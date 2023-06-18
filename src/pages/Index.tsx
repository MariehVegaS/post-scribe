import axios from 'axios';
import React from 'react';
import { useLoaderData } from 'react-router-dom'

export function loader() {
    const urlAllPosts = "https://jsonplaceholder.typicode.com/posts"
    const posts = axios.get(urlAllPosts).then((response) => {
        if (response.status === 200 && response.data.length > 0 ) {
            // We need the whole information, so we get in directly
            return response.data;
        }
        return [];
    })
    return posts;
}

const Index = () => {
    const posts = useLoaderData();
    // console.log(posts);
    return (
        <div>Index</div>
    )
}

export default Index