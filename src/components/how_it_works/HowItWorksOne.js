import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Font from "react-font";
import Image from '../../assets/Step1.png';
import { styled } from '@mui/material/styles';
import { useMediaQuery } from 'react-responsive';
import './HowItWorks.css';

const HowItWorksOne = () => {
    const screenWidth = useMediaQuery({
        query: '(min-width: 1200px)'
    });
    const Img = styled('img')({
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
        paddingTop: '5vh'
    });
    return (
    <div>
        <Container fixed>
            <Grid container sx={{ height: '100vh' }}>
                {
                    screenWidth?
                    <Grid item lg={6} sm={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Box sx={{ textAlign: 'center' }}>
                            <div className="tilt-left">
                                <img src={Image} className='tilt-image-left' />
                            </div>
                        </Box>
                    </Grid>
                    :
                    <Grid item container>
                        <Img alt="complex" src={Image} />
                    </Grid>
                }
                <Grid item lg={6} sm={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box sx={{ textAlign: 'center' }}>
                        <Font family="Acme">
                            <h3 style={{ fontSize: '5vh', marginBottom: 0 }}>
                                <span>Click the send button on the device through which you like to send the files</span>
                            </h3>
                        </Font>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </div>
    )
}

export default HowItWorksOne;