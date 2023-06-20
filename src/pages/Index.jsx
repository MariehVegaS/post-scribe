import React, { useRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom'
import { deletePost, getPosts } from '../data/posts';
import PostsTable from '../components/PostsTable';
import Button from '@mui/material/Button'
import { Stack } from '@mui/material';
import { toast } from 'react-toastify';

export async function loader() {
    const posts = getPosts();
    return posts
}

const Index = () => {
    const toastId = useRef(null)
    const posts = useLoaderData();

    const processIdsArray = async (ids) => {
        let result = true;
        await Promise.all(ids.map(async (id) => {
            const isValid = await deletePost(id);
            console.log(`Post ${id} deleted`,isValid)
            if (!isValid) { result = false; }
        }));
        return result;
    }

    const deleteSeveralPosts = async (ids) => {
        if (!toast.isActive(toastId.current)) {
            toastId.current = toast.info('Deleting...')
        }
        const result = await processIdsArray(ids);
        toast.dismiss(toastId.current)
        if (result) {
            toastId.current = toast.success(`Posts successfully deleted!`)
        } else {
            toastId.current = toast.error(`Something went wrong deleting the posts... Please try later!`)
        }
    }

    return (
        <div>
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