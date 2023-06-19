import { Stack, Typography } from '@mui/material'
import React from 'react'
import PostsForm from '../components/PostsForm'


const NewPost = () => {
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
            <PostsForm />
        </Stack>
    )
}

export default NewPost