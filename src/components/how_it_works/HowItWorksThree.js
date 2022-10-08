import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Font from "react-font";
import { styled } from '@mui/material/styles';
import { useMediaQuery } from 'react-responsive';
import Image from '../../assets/Step3.png';
import './HowItWorks.css';

const HowItWorksThree = () => {
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
                                <span>3. On the recieving device click the recieve button and write the code assigned to you</span>
                            </h3>
                        </Font>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </div>
    )
}

export default HowItWorksThree;