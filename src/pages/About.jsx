import { Grid, Paper, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import React from 'react'

// With styled components
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body1,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.initial,
}));

const About = () => {
    return (
        <>
            <Stack minHeight="80vh" alignItems="center" justifyContent="center" paddingX="2rem">

                <Stack marginBottom="2rem" textAlign="center">
                    <Typography className='title-text' variant="h4" gutterBottom>
                        What is PostScribe?
                    </Typography>
                    <Stack padding="0 1rem">
                        <Typography variant="body1" color="initial">
                            It is a website that will allow you to choose, edit and delete posts in the easiest way possible!
                        </Typography>
                        <Typography variant="body1" color="initial">
                            We invite you to explore the website and see the functionalities in real time thanks to the integration with JSONPlaceholder.
                        </Typography>
                    </Stack>
                </Stack>
                <Stack>
                    <Typography className='title-text' variant="h4" gutterBottom>
                        Project features
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Item>
                                This project uses React Router DOM!
                            </Item>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Item>
                                Also we use Material UI for the styles!
                            </Item>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Item>
                                Have we already mentioned integration with JSONPlaceholder?
                            </Item>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Item>
                                And for requests we have Axios!
                            </Item>
                        </Grid>
                    </Grid>
                </Stack>
            </Stack>
        </>
    )
}

export default About