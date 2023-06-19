import { Box, Button, FormHelperText, Stack, TextField } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'

const PostsForm = ({ post }) => {
    const { register, formState: { errors }, handleSubmit } = useForm({
        defaultValues: {
            title: 'Title test',
            body: "Some text from here..."
        }
    });
    const formFieldsInformation = {
        title: {
            name: "title",
            defaultLabel: "Title",
            helperTextLabel: "title-helper-text",
            defaultHelperMessage: "Post's title",
            isRequired: true,
            maxLength: 40
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
        console.log(data);
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <Box>
                    <TextField
                        label={formFieldsInformation.title.defaultLabel}
                        variant="outlined"
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
                        {errors.title && errorMessages[errors.title?.type] ? errorMessages[errors.title?.type] :  formFieldsInformation.title.defaultHelperMessage}
                    </FormHelperText>
                </Box>
                <Box mt="2rem">
                    <TextField
                        label={formFieldsInformation.body.defaultLabel}
                        aria-describedby={formFieldsInformation.body.helperTextLabel}
                        variant="outlined"
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
                        {errors.body && errorMessages[errors.body?.type] ? errorMessages[errors.body?.type] :  formFieldsInformation.body.defaultHelperMessage}
                    </FormHelperText>
                </Box>
                <Stack direction='row' justifyContent='center' mt="2rem">
                    <Button variant="contained" type="submit">
                        Create
                    </Button>
                </Stack>
            </form>
        </>
    )
}

export default PostsForm