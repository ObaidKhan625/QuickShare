import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid";
import Font from "react-font";
import Button from '@mui/material/Button';
import DescriptionIcon from '@mui/icons-material/Description';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import axios from 'axios';
import { useDropzone } from "react-dropzone";
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';
import Slide from '@mui/material/Slide';
import FormControlLabel from '@mui/material/FormControlLabel';

const UploadPage = () => {
    const [allFiles, setAllFiles] = useState([]);
    const [uploadedOnce, setUploadedOnce] = useState(false);
    const [fileCode, setFileCode] = useState("zeros");

    function makeID(length) {
      var result           = '';
      var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * 
        charactersLength));
      }
      return result;
    }

    useEffect(() => {
      const code = makeID(4);
      setFileCode(code);
    }, []);

    const uploadFilesToAPI = async(files) => {
      const data = new FormData();
      for(let i = 0; i < files.length; i++) {
        data.append('file', files[i]);
      }
      axios.post('//localhost:3001/upload', data)
        .then((response) => {
          console.log('Upload Success');
        })
        .catch((e) => {
          console.log('Upload Error');
        })
      setUploadedOnce(true);
    }

    const {getRootProps, getInputProps} = useDropzone({
        onDrop:(acceptedFiles) => {
            var tempFiles = allFiles;
            for(let i = 0; i < acceptedFiles.length; i++) {
                const myRenamedFile = new File([acceptedFiles[i]], fileCode+'-'+acceptedFiles[i].name);
                // acceptedFiles[i].newName = fileCode+'-'+acceptedFiles[i].name;
                tempFiles.push(myRenamedFile);
            }
            setAllFiles(tempFiles);
            // console.log(allFiles);
            console.log(allFiles[0]);
            uploadFilesToAPI(allFiles);
        }
    });

    // const icon = (
    //   <Paper sx={{ m: 1 }} elevation={4}>
    //     Hey There
    //     {/* <Box component="svg" sx={{ width: 100, height: 100 }}> */}
    //       {/* <Box
    //         component="polygon"
    //         sx={{
    //           fill: (theme) => theme.palette.common.white,
    //           stroke: (theme) => theme.palette.divider,
    //           strokeWidth: 1,
    //         }}
    //         points="0,100 50,00, 100,100"
    //       /> */}
    //     {/* </Box> */}
    //   </Paper>
    // );

    return (
        <Container fixed>
          <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          >
            <Grid item xs={12} md={12} lg={12}>
              <div className="uploadBox" {...getRootProps()}>
                {/* <input {...getInputProps()} />
                <p className="text" style={{ width: '50vh', color: '#585858' }}>
                    <CloudUploadIcon sx={{ fontSize: '25vh' }}/>
                    {
                        !uploadedOnce? 
                        <span>Drop files here!!!</span> :
                        <span>Done! Upload some more ;)</span>
                    }
                </p> */}
                {/* Hello There */}
              </div>
            </Grid>      
          </Grid>
          {/* <Button onClick={() => window.location = '' }>
            Done
          </Button> */}
          <Font family="Lobster">
            <h1
              style={{
                textAlign: "center",
                color: "#585858",
                letterSpacing: "2px"
              }}
            >
              Uploaded Files
            </h1>
          </Font>
          <Grid
            container
            spacing={4}
            paddingTop={5}
            paddingLeft={5}
            paddingRight={5}
          >
            {allFiles.map((file, index) => (
              <React.Fragment key={index}>
                <Grid item xs={12} md={12} lg={12}>
                  <Box sx={{ textAlign: 'center' }} className="uploadedFile">
                    <Slide in={true} direction="down"
                    style={{ transformOrigin: '0 0 0' }}
                    {...(true ? { timeout: 2000 } : {})}>
                      <Paper sx={{ p: 2, backgroundColor: 'transparent' }} elevation={5}>
                        {file.name.substr(5)}
                      </Paper>
                    </Slide>
                  </Box>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Container>
    );
}

export default UploadPage;