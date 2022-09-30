import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Font from "react-font";
import { styled } from '@mui/material/styles';
import { useMediaQuery } from 'react-responsive';
import Image from '../../assets/Step2.png';
import './HowItWorks.css';

const HowItWorksTwo = () => {
    const screenWidth = useMediaQuery({
        query: '(min-width: 1200px)'
    });
    const Img = styled('img')({
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
        paddingBottom: '5vh'
    });
    return (
        <div>
            <Container fixed>
                <Grid container sx={{ height: '100vh' }}>
                    <Grid item lg={6} sm={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Box sx={{ textAlign: 'center' }}>
                            <Font family="Acme">
                                <h3 style={{ fontSize: '5vh', marginBottom: 0 }}>
                                    <span>Upload the files on the Drag & Drop Upload Box, note the code allotted</span>
                                </h3>
                            </Font>
                        </Box>
                    </Grid>
                    {
                        screenWidth?
                        <Grid item lg={6} sm={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Box sx={{ textAlign: 'center' }}>
                                <div className="tilt-right">
                                    <img src={Image} className='tilt-image-right' />
                                </div>
                            </Box>
                        </Grid>
                        :
                        <Grid item container>
                            <Img alt="complex" src={Image} />
                        </Grid>
                    }
                </Grid>
            </Container>
        </div>
    )
}

export default HowItWorksTwo;