import { React, useState } from 'react';
import SendButton from '../../components/Send_Receive_Buttons/SendButton';
import ReceiveButton from '../../components/Send_Receive_Buttons/ReceiveButton';
import HowItWorksOne from '../../components/how_it_works/HowItWorksOne';
import HowItWorksTwo from '../../components/how_it_works/HowItWorksTwo';
import HowItWorksThree from '../../components/how_it_works/HowItWorksThree';
import HowItWorksFour from '../../components/how_it_works/HowItWorksFour';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useMediaQuery } from 'react-responsive';
import Font from "react-font";
import Cookies from "universal-cookie";
import LoadingScreen from "react-loading-screen";
import GitHubIcon from '@mui/icons-material/GitHub';
import './HomePage.css';

const HomePage = () => {
    const apiBaseURL = process.env.REACT_APP_API_URL;
    const [open, setOpen] = useState(false);
    const [code, setCode] = useState("");
    const [loading, setLoading] = useState(false);
    const handleOpen = async() => setOpen(true);
    const handleClose = () => setOpen(false);

    const postCode = async() => {
        setLoading(true);
        let response = await fetch(`${apiBaseURL}/post-code/`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify({ code: code }),
        });
        let responseStatus = await response.status;
        let responseJson = await response.json();
        if(responseStatus === 200) {
            const cookies = new Cookies();
            cookies.remove("QuickShare links");
            cookies.set("QuickShare links", responseJson['files'], {
                path: "/",
                maxAge: 15 * 60,
            });
            window.location.href = "/show-files";
            setLoading(false);
        }
        else {
            setLoading(false);
            alert("Wrong Code!!!");
        }
    }
    const screenWidth = useMediaQuery({
        query: '(max-width: 460px)'
    });
    const screenWidthGitLogo = useMediaQuery({
        query: '(min-width: 510px)'
    });
    let buttonTop = screenWidth ? 10 : 20;
    return (
        <div className="home-container">
            <LoadingScreen
                loading={loading}
                bgColor="#E3E2DF"
                spinnerColor="#EE4C7C"
                textColor="#EE4C7C"
                text="Please Wait"
            >
                
                <section className="one">
                    <div className={screenWidthGitLogo ? "gitCircleBig" : "gitCircleMedium"}>
                    </div>
                    <div style={{ position: 'fixed', top:'1vh', left: '1vh' }}>
                        <Button>
                            <GitHubIcon onClick={() => window.open('https://github.com/ObaidKhan625/QuickShare', '_blank')} 
                            className="gitIcon"
                            sx={{ 'height': screenWidthGitLogo ? '10vh': '7vh', 
                            'width': screenWidthGitLogo ? '10vh': '7vh' }} />
                        </Button>
                    </div>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle sx = {{ textAlign: 'center', color: '#EE4C7C' }}>
                            <Font family="Acme">
                                Enter the code you received on uploading your files.
                            </Font>
                        </DialogTitle>
                        <DialogContent>
                            <TextField
                                required
                                id="outlined-required"
                                label="Enter the code"
                                value={code}
                                onInput={ e => setCode(e.target.value) }
                                fullWidth
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={postCode}>Proceed</Button>
                        </DialogActions>
                    </Dialog>
                    <Container fixed>
                        <Box sx={{ textAlign: 'center' }} >
                            <Font family="Acme">
                                <h3 style={{ fontSize: '10vh', marginBottom: 0 }}>
                                    <span>QuickShare</span>
                                </h3>
                                <h3 style={{ marginTop: 0, marginBottom: '10vh', letterSpacing: 3 }}><i>Making PDF/Docs Sharing Faster</i></h3>
                            </Font>
                        </Box>
                        {/* 10 spacing for mobile */}
                        <Grid container justifyContent="center" spacing={buttonTop}>
                            <Grid item>
                                <Button className="gradient-border" onClick={() => window.location = 'upload' } sx={{ padding: '5vh', bgcolor: 'white', boxShadow: 3, '&:hover' :{ boxShadow: 10, color: 'white' }, color: '#EE4C7C' }} >
                                    <SendButton />
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button className="gradient-border" onClick={handleOpen} sx={{ padding: '5vh', bgcolor: 'white', boxShadow: 3, '&:hover' :{ boxShadow: 10, color: 'white' }, color: '#EE4C7C' }} >
                                    <ReceiveButton />
                                </Button>
                            </Grid>
                        </Grid>
                        {/* <Box sx={{ textAlign: 'center', color: '#EE4C7C' }} >
                            <Button sx={{ color: '#EE4C7C' }} onClick={ () => document.getElementById('section-two').scrollIntoView() }>
                                <Font family="Acme">
                                    <h1 style={{ letterSpacing: 3 }}>How it works?</h1>
                                </Font>
                            </Button>
                        </Box> */}
                    </Container>
                </section>
                <section id="section-two" className="two">
                    <HowItWorksOne />
                </section>
                <section className="three">
                    <HowItWorksTwo />
                </section>
                <section className="four">
                    <HowItWorksThree />
                </section>
                <section className="five">
                    <HowItWorksFour />
                </section>
            </LoadingScreen>
        </div>
    )
}

export default HomePage;