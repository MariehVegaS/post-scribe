import { Box, Button, FormHelperText, Input, Stack, TextField } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import SendIcon from '@mui/icons-material/Send';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const PostsForm = ({ post, onSubmitFunction }) => {
    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit } = useForm();
    const formFieldsInformation = {
        title: {
            name: "title",
            defaultLabel: "Title",
            helperTextLabel: "title-helper-text",
            defaultHelperMessage: "Post's title",
            isRequired: true,
            maxLength: 100
        },
        body: {
            name: "body",
            defaultLabel: "Body",
            helperTextLabel: "body-helper-text",
            defaultHelperMessage: "Post content of no more than 300 characters",
            isRequired: true,
            maxLength: 300
        }
    }
    const errorMessages = {
        required: "This field is required.",
        maxLength: "You have exceeded the number of characters allowed for the field."
    }
    const onSubmit = data => {
        onSubmitFunction(data);
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <Input
                    type="hidden"
                    hidden={true}
                    defaultValue={post?.id}
                    {...register('id')}
                />
                <Box>
                    <TextField
                        label={formFieldsInformation.title.defaultLabel}
                        variant="outlined"
                        defaultValue={post?.title}
                        aria-describedby={formFieldsInformation.title.helperTextLabel}
                        fullWidth
                        required={formFieldsInformation.title.isRequired} // To put the * in the title for UX
                        {...register(formFieldsInformation.title.name, {
                            required: formFieldsInformation.title.isRequired,
                            maxLength: formFieldsInformation.title.maxLength
                        })}
                        error={errors.title ? true : false}
                    />
                    <FormHelperText id={formFieldsInformation.title.helperTextLabel} error={errors.title ? true : false}>
                        {errors.title && errorMessages[errors.title?.type] ? errorMessages[errors.title?.type] : formFieldsInformation.title.defaultHelperMessage}
                    </FormHelperText>
                </Box>
                <Box mt="2rem">
                    <TextField
                        label={formFieldsInformation.body.defaultLabel}
                        aria-describedby={formFieldsInformation.body.helperTextLabel}
                        variant="outlined"
                        defaultValue={post?.body}
                        multiline
                        rows={2}
                        fullWidth
                        required={formFieldsInformation.body.isRequired}  // To put the * in the title for UX
                        {...register(formFieldsInformation.body.name, {
                            required: formFieldsInformation.body.isRequired,
                            maxLength: formFieldsInformation.body.maxLength
                        })}
                        error={errors.body ? true : false}
                    />
                    <FormHelperText id={formFieldsInformation.body.helperTextLabel} error={errors.body ? true : false}>
                        {errors.body && errorMessages[errors.body?.type] ? errorMessages[errors.body?.type] : formFieldsInformation.body.defaultHelperMessage}
                    </FormHelperText>
                </Box>
                <Stack direction='row' justifyContent='center' mt="2rem" spacing={2}>
                    <Button variant="contained" type="button" startIcon={<ArrowBackIcon />} onClick={() => navigate(-1)} color='warning'>
                        GO BACK
                    </Button>
                    <Button variant="contained" type="submit" endIcon={<SendIcon />}>
                        {post ? 'EDIT' : 'CREATE'}
                    </Button>
                </Stack>
            </form>
        </>
    )
}

export default PostsForm