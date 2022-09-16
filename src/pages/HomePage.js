import React from 'react';
import SendButton from '../components/SendButton';
import ReceiveButton from '../components/ReceiveButton';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Text } from 'react-font';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
// import Pdf from '../assets/Saurabh_LinkedIn_SRE.pdf'

// Pdf
{/* <a href='http://www.africau.edu/images/default/sample.pdf' target='_blank' rel='noopener noreferrer'>
    Hello
</a> */}
// //button[contains(text(), 'Download File')]

const HomePage = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const Pdf = require('../assets/Pratik Mahankal Resume.pdf');
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
                    {/* Sliding bar on 100vh */}
                    {/* <Box sx={{ bgcolor: '#cfe8fc' }}> */}
                    {/* Responsive break because of Title */}
                    {/* <div class="docBar">
                        <span class="docBar_content_1">
                            <PictureAsPdfIcon color="disabled" sx={{ fontSize: 200 }} />
                            <PictureAsPdfIcon color="disabled" sx={{ fontSize: 200 }} />
                            <PictureAsPdfIcon color="disabled" sx={{ fontSize: 200 }} />
                            <PictureAsPdfIcon color="disabled" sx={{ fontSize: 200 }} />
                            <PictureAsPdfIcon color="disabled" sx={{ fontSize: 200 }} />
                            <PictureAsPdfIcon color="disabled" sx={{ fontSize: 200 }} />
                            <PictureAsPdfIcon color="disabled" sx={{ fontSize: 200 }} />
                        </span>
                        <span class="docBar_content_2">
                            <ArticleIcon color="disabled" sx={{ fontSize: 200 }} />
                            <ArticleIcon color="disabled" sx={{ fontSize: 200 }} />
                            <ArticleIcon color="disabled" sx={{ fontSize: 200 }} />
                            <ArticleIcon color="disabled" sx={{ fontSize: 200 }} />
                            <ArticleIcon color="disabled" sx={{ fontSize: 200 }} />
                            <ArticleIcon color="disabled" sx={{ fontSize: 200 }} />
                            <ArticleIcon color="disabled" sx={{ fontSize: 200 }} />
                        </span>
                    </div> */}
                    <Box sx={{ textAlign: 'center', fontSize: '10vh' }} >
                        <Text italic weight={700}>
                            SPrintOut
                        </Text>
                    </Box>
                    <Grid
                        container
                        sx={{ height: '40vh' }}
                        spacing={0}
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                        justify="space-around" 
                    >
                        <Button onClick={() => window.location = 'upload' }>
                            <Grid item sx={{ padding: '5vh', bgcolor: 'white', boxShadow: 3, borderRadius: '50%', '&:hover' :{ boxShadow: 10 }}} >
                                <SendButton />
                            </Grid>
                        </Button>
                        <Button onClick={handleOpen}>
                            <Grid item sx={{ padding: '5vh', bgcolor: 'white', boxShadow: 3, borderRadius: '50%', '&:hover' :{ boxShadow: 10 }}} >
                                <ReceiveButton />
                            </Grid>
                        </Button>
                    </Grid>
                    {/* <div onClick={(e) => { e.preventDefault(); window.location.replace("/#how-it-works"); } }>
                        Next
                    </div> */}
                    {/* </Box> */}
                </Container>
            </section>
            <section id="how-it-works" className="two">
                How It Works
            </section>
        </div>
    )
}

export default HomePage;