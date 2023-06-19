import React from 'react';
import { Link, useLoaderData } from 'react-router-dom'
import { getPosts } from '../data/posts';
import PostsTable from '../components/PostsTable';
import Button from '@mui/material/Button'
import { Stack } from '@mui/material';

export async function loader() {
    const clientes = getPosts();
    return clientes
}

const Index = () => {
    const posts = useLoaderData();
    return (
        <div>
            <PostsTable
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