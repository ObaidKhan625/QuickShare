import React from "react";
import SendButton from "../components/SendButton";
import ReceiveButton from "../components/ReceiveButton";
import HowItWorks from "../components/HowItWorks";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useMediaQuery } from "react-responsive";
import Font from "react-font";
import {
  homeObjFour,
  homeObjThree,
  homeObjTwo,
  homeObjOne,
} from "../components/Data";
import InfoSection from "./InfoSection/InfoSection";
import { motion } from "framer-motion";

const HomePage = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    window.location = "show-files";
  };
  const Pdf = require("../assets/Pratik Mahankal Resume.pdf");
  const screenWidth = useMediaQuery({
    query: "(max-width: 460px)",
  });
  let buttonTop = screenWidth ? 10 : 20;
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <div className="home-container">
      <section className="one">
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle sx={{ textAlign: "center" }}>
            <Font family="Acme">
              Enter the code you received on uploading your files.
            </Font>
          </DialogTitle>
          <DialogContent>
            <TextField
              required
              id="outlined-required"
              label="Enter the code"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Proceed</Button>
          </DialogActions>
        </Dialog>
        <Container fixed>
          <Box sx={{ textAlign: "center" }}>
            <Font family="Acme">
              <h3
                className="waviy"
                style={{ fontSize: "10vh", marginBottom: 0 }}
              >
                <span style={{ "--i": "1" }}>S</span>
                <span style={{ "--i": "2" }}>p</span>
                <span style={{ "--i": "3" }}>r</span>
                <span style={{ "--i": "4" }}>i</span>
                <span style={{ "--i": "5" }}>n</span>
                <span style={{ "--i": "6" }}>t</span>
                <span style={{ "--i": "7" }}>o</span>
                <span style={{ "--i": "8" }}>u</span>
                <span style={{ "--i": "9" }}>t</span>
                {/* SPrintout */}
              </h3>
              <h3
                style={{ marginTop: 0, marginBottom: "10vh", letterSpacing: 3 }}
              >
                <i>Make Printouts Faster</i>
              </h3>
            </Font>
          </Box>
          {/* 10 spacing for mobile */}
          <Grid container justifyContent="center" spacing={buttonTop}>
            <Grid item>
              <Button
                className="gradient-border"
                onClick={() => (window.location = "upload")}
                sx={{
                  padding: "5vh",
                  bgcolor: "white",
                  boxShadow: 3,
                  "&:hover": { boxShadow: 10, color: "white" },
                  color: "#484848",
                }}
              >
                <SendButton />
              </Button>
            </Grid>

            <Grid item>
              <motion.div
                whileHover={{ scale: 1.0, rotate: 360 }}
                whileTap={{
                  scale: 1.2,

                  borderRadius: "100%",
                }}
              >
                <Button
                  className="gradient-border"
                  onClick={handleOpen}
                  sx={{
                    padding: "5vh",
                    bgcolor: "white",
                    boxShadow: 3,
                    "&:hover": { boxShadow: 10, color: "white" },
                    color: "#484848",
                  }}
                >
                  <ReceiveButton />
                </Button>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section id="how-it-works" className="two">
        <InfoSection {...homeObjOne} />
      </section>
      <section id="how-it-works" className="two">
        <InfoSection {...homeObjTwo} />
      </section>
      <section id="how-it-works" className="two">
        <InfoSection {...homeObjThree} />
      </section>
      <section id="how-it-works" className="two">
        <InfoSection {...homeObjFour} />
      </section>
    </div>
  );
};

export default HomePage;
