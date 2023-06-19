import axios from 'axios';
import React from 'react';
import { useLoaderData } from 'react-router-dom'
import { getPost, getPosts } from '../data/posts';
import PostsTable from '../components/PostsTable';

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
        </div>
    )
}

export default Index