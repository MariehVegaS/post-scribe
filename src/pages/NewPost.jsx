import { Stack, Typography } from '@mui/material'
import React, { useRef } from 'react'
import PostsForm from '../components/PostsForm'
import { createPost } from '../data/posts';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const NewPost = () => {
    const navigate = useNavigate()
    const toastId = useRef(null)
    const createNewPost = async (data) => {
        if (!toast.isActive(toastId.current)) {
            toastId.current = toast.info('Creating a new post...');
        }
        const result = await createPost(data);
        console.log(result)
        // To see the effect of creating...
        setTimeout(() => {
            toast.dismiss(toastId.current);
            navigate('/')
            if (Object.keys(result).length > 0 ) {
                toastId.current = toast.success('Post created successfully!');
            } else {
                toastId.current = toast.error('Uh... something went wrong... Please try later!');
            }
        }, 1500);
    }
    return (
        <Stack>
            <Typography className='title-text' variant="h4" gutterBottom>
                Create a new post!
            </Typography>
            <Stack padding="0 1rem" marginBottom="2rem" textAlign="center">
                <Typography variant="body1" color="initial">
                    It's time to put your creativity to the test, create a new post that will appear in our selection of posts!
                </Typography>
            </Stack>
            <PostsForm 
                onSubmitFunction={createNewPost}
            />
        </Stack>
    )
}

export default NewPost