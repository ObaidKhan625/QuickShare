import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Font from "react-font";
import Image from '../assets/Step1.png';

const HowItWorksOne = () => {
  return (
    <div>
        <Container fixed>
            <Grid container sx={{ height: '100vh' }}>
                <Grid item sm={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box sx={{ textAlign: 'center' }}>
                    <div className="tilt-left">
                        <img src={Image} className='tilt-image-left' />
                    </div>
                    </Box>
                </Grid>
                <Grid item sm={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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