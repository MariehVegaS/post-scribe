import React, { useRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom'
import { getPosts } from '../data/posts';
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
    
    const deleteSeveralPosts = (ids) => {
        if (!toast.isActive(toastId.current)) {
            toastId.current = toast.info('Deleting...');
        }
        console.log("The data is here", ids)
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