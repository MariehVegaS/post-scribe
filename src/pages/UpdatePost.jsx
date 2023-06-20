import { Stack, Typography } from '@mui/material'
import React, { useRef } from 'react'
import PostsForm from '../components/PostsForm'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { getPost, updatePost } from '../data/posts'
import { toast } from 'react-toastify'
import useConfirmation from '../hooks/useConfirmation'

export async function loader({ params }) {
  const post = await getPost(params.id);
  return post
}

const UpdatePost = () => {
  const post = useLoaderData()
  const navigate = useNavigate()
  const toastId = useRef(null)
  const { openConfirmation, ConfirmationAlert } = useConfirmation();

  const confirmUpdate = (data) => {
    openConfirmation(`You are updating this post`,'Are you sure you want to update it?', () => updateOldPost(data));
  }

  const updateOldPost = async (data) => {
    if (!toast.isActive(toastId.current)) {
      toastId.current = toast.info('Updating the post...');
    }
    const result = await updatePost(data.id, data);
    console.log(result)
    // To see the effect of updating...
    setTimeout(() => {
      toast.dismiss(toastId.current);
      navigate('/')
      if (result && Object.keys(result).includes('id')) {
        toastId.current = toast.success('Post updated successfully!');
      } else {
        toastId.current = toast.error('Uh... something went wrong... Please try later!');
      }
    }, 1500);
  }

  return (
    <Stack>
      <ConfirmationAlert />
      <Typography className='title-text' variant="h4" gutterBottom>
        Let's edit!
      </Typography>
      <Stack padding="0 1rem" marginBottom="2rem" textAlign="center">
        <Typography variant="body1" color="initial">
          It's time to put your creativity to the test, edit this outdated post so that everyone can see it in our selection of posts!
        </Typography>
      </Stack>
      <PostsForm
        post={post}
        onSubmitFunction={confirmUpdate}
      />
    </Stack>
  )
}

export default UpdatePost