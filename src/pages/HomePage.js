import { React, useState } from 'react';
import SendButton from '../components/Send_Receive_Buttons/SendButton';
import ReceiveButton from '../components/Send_Receive_Buttons/ReceiveButton';
import HowItWorksOne from '../components/how_it_works/HowItWorksOne';
import HowItWorksTwo from '../components/how_it_works/HowItWorksTwo';
import HowItWorksThree from '../components/how_it_works/HowItWorksThree';
import HowItWorksFour from '../components/how_it_works/HowItWorksFour';
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
import './HomePage.css'

const HomePage = () => {
    const [open, setOpen] = useState(false);
    const [code, setCode] = useState("");
    const [loading, setLoading] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const postCode = async() => {
        setLoading(true);
        let response = await fetch(`http://localhost:3001/post-code/`, {
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
            alert("Wrong Code");
            setLoading(false);
        }
    }
    const screenWidth = useMediaQuery({
        query: '(max-width: 460px)'
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
                                <Button className="gradient-border"onClick={handleOpen} sx={{ padding: '5vh', bgcolor: 'white', boxShadow: 3, '&:hover' :{ boxShadow: 10, color: 'white' }, color: '#EE4C7C' }} >
                                    <ReceiveButton />
                                </Button>
                            </Grid>
                        </Grid>
                    </Container>
                </section>
                <section className="two">
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