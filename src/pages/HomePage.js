import React from 'react';
import SendButton from '../components/SendButton';
import ReceiveButton from '../components/ReceiveButton';
import HowItWorks from '../components/HowItWorks';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useMediaQuery } from 'react-responsive';
import Font from "react-font";

const HomePage = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const Pdf = require('../assets/Pratik Mahankal Resume.pdf');
    const screenWidth = useMediaQuery({
        query: '(max-width: 460px)'
    });
    let buttonTop = screenWidth ? 10 : 20;
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    return (
        <div className="home-container">
            <section className="one">
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle sx = {{ textAlign: 'center' }}>
                        Enter the code you received on uploading your files.
                    </DialogTitle>
                    <DialogContent>
                    {/* <DialogContentText>
                        Enter the code you received on uploading your files.
                    </DialogContentText> */}
                    <TextField
                        required
                        id="outlined-required"
                        label="Enter the code"
                        fullWidth
                    />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Proceed</Button>
                        <a href={Pdf} target='_blank' rel='noopener noreferrer'>
                            Open
                        </a>
                    </DialogActions>
                </Dialog>
                <Container fixed>
                    <Box sx={{ textAlign: 'center', fontSize: '10vh' }} >
                        <Font family="Acme">
                            <h3 sx={{ textAlign: "center", letterSpacing: "2px" }}>
                                SPrintout
                            </h3>
                        </Font>
                    </Box>
                    {/* 10 spacing for mobile */}
                    <Grid container justifyContent="center" spacing={buttonTop}>
                        <Grid item>
                            <Button className="gradient-border" onClick={() => window.location = 'upload' } sx={{ padding: '5vh', bgcolor: 'white', boxShadow: 3, '&:hover' :{ boxShadow: 10, color: 'white' }, color: '#484848' }} >
                                <SendButton />
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button className="gradient-border"onClick={handleOpen} sx={{ padding: '5vh', bgcolor: 'white', boxShadow: 3, '&:hover' :{ boxShadow: 10, color: 'white' }, color: '#484848' }} >
                                <ReceiveButton />
                            </Button>
                        </Grid>
                    </Grid>
                    {/* <div onClick={(e) => { e.preventDefault(); window.location.replace("/#how-it-works"); } }>
                        Next
                    </div> */}
                    {/* </Box> */}
                </Container>
            </section>
            <section id="how-it-works" className="two">
                <HowItWorks />
            </section>
        </div>
    )
}

export default HomePage;