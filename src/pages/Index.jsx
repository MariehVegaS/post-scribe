import React, { useEffect, useRef, useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom'
import { deletePost, getPosts } from '../data/posts';
import PostsTable from '../components/PostsTable';
import Button from '@mui/material/Button'
import { FormControlLabel, Stack, Switch } from '@mui/material';
import { toast } from 'react-toastify';

export async function loader() {
    localStorage.getItem('useLocalStorage') ?? localStorage.setItem('useLocalStorage', true)
    const posts = await getPosts()
    return posts
}

const Index = () => {
    const navigate = useNavigate()
    const posts = useLoaderData();
    const [withlocalStorage, setWithlocalStorage] = useState(true);
    const toastId = useRef(null)

    useEffect(() => {
        const storageValue = localStorage.getItem('useLocalStorage')
        const useLocalStorage = (storageValue) ? JSON.parse(storageValue) : true;
        setWithlocalStorage(useLocalStorage)
    }, [])

    const handleChangeUseLS = e => {
        setWithlocalStorage(e.target.checked)
        localStorage.setItem('useLocalStorage', JSON.stringify(e.target.checked))
        navigate(0)
    }

    const processIdsArray = async (ids) => {
        let result = true;
        await Promise.all(ids.map(async (id) => {
            const isValid = await deletePost(id);
            console.log(`Post ${id} deleted`, isValid)
            if (!isValid) { result = false; }
        }));
        return result;
    }

    const deleteSeveralPosts = async (ids) => {
        if (!toast.isActive(toastId.current)) {
            toastId.current = toast.info('Deleting...')
        }
        const result = await processIdsArray(ids);
        // To see the effect of creating...
        setTimeout(() => {
            toast.dismiss(toastId.current)
            if (result) {
                toastId.current = toast.success(`Posts successfully deleted!`)
                setTimeout(() => {
                    navigate(0)
                }, 500);
            } else {
                toastId.current = toast.error(`Something went wrong deleting the posts... Please try later!`)
            }
        }, 1500);

    }

    return (
        <div>
            <Stack direction='row' justifyContent='center' mb='2rem'>
                <FormControlLabel
                    width="100"
                    control={<Switch checked={withlocalStorage} onChange={handleChangeUseLS} />}
                    label="Use data persistence" />
            </Stack>
            <PostsTable
                deleteSeveralPosts={deleteSeveralPosts}
                posts={posts}
            />
            <Stack direction='row' justifyContent='center'>
                <Button variant="contained" to="/posts/create" component={Link}>
                    Create a new post here!
                </Button>
            </Stack>
        </div>
    )
}

export default Index