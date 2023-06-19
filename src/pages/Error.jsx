import { Stack, Typography } from '@mui/material';
import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const error = useRouteError();
    return (
        <Stack minHeight="80vh" alignItems="center" justifyContent="center" paddingX="2rem">
            <Stack marginBottom="2rem" textAlign="center">
                <Typography className='title-text' variant="h4" gutterBottom>
                    Oh no! An error has occurred
                </Typography>
                <Stack padding="0 1rem">
                    <Typography variant="body1" color="initial" gutterBottom>
                        In case it is not solved after trying again later, please contact support by sending the screenshot of this error, it will help us a lot to improve!                    </Typography>
                    <Typography variant="body1" color="initial">
                        <b>Code error: </b>{error.status || 'NA'}
                        <br />
                        <b>Message: </b>{error.statusText || error.message}
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Error