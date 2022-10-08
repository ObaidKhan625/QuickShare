import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid";
import Font from "react-font";
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import CloudDoneOutlinedIcon from '@mui/icons-material/CloudDoneOutlined';
import axios from 'axios';
import { useDropzone } from "react-dropzone";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import { useMediaQuery } from 'react-responsive';
import SyncLoader from "react-spinners/SyncLoader";
import './UploadPage.css';

const UploadPage = () => {
    const apiBaseURL = process.env.REACT_APP_API_URL;
    const [allFiles, setAllFiles] = useState([]);
    const [allFilesSizes, setAllFilesSizes] = useState([]);
    const [uploading, setUploading] = useState(false);
    const [uploadedOnce, setUploadedOnce] = useState(false);
    const [fileCode, setFileCode] = useState("zeros");
    const rightGap1 = useMediaQuery({
      query: '(max-width: 340px)'
    });
    const rightGap2 = useMediaQuery({
      query: '(max-width: 265px)'
    });
    const rightGap3 = useMediaQuery({
      query: '(max-width: 213px)'
    });
    var uploadWidth = rightGap1 ? rightGap2 ? rightGap3 ? '15vw' : '20vw' : '35vw' : '50vw';
    var cloudSize = rightGap2 ? '20vh' : '25vh';

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
      if(uploading)
        return;
      setUploading(true);
      const data = new FormData();
      for(let i = 0; i < files.length; i++) {
        data.append('file', files[i]);
      }
      let response = await axios.post(`${apiBaseURL}/upload`, 
      data)
        .then((response) => {
          console.log(response);
          setUploading(false);
          setUploadedOnce(true);
          console.log('Upload Success');
        })
        .catch((e) => {
          console.log(e);
          setUploading(false);
          setUploadedOnce(true);
          console.log('Upload Error');
        });
      console.log(response);
    }

    const {getRootProps, getInputProps} = useDropzone({
        onDrop:(acceptedFiles) => {
          if(!uploading) {
            var tempFiles = allFiles;
            var tempFilesSizes = allFilesSizes;
            for(let i = 0; i < acceptedFiles.length; i++) {
                const myRenamedFile = new File([acceptedFiles[i]], fileCode+'-'+acceptedFiles[i].name);
                var fileSize = acceptedFiles[i].size/1024;
                // acceptedFiles[i].newName = fileCode+'-'+acceptedFiles[i].name;
                tempFiles.push(myRenamedFile);
                tempFilesSizes.push(fileSize.toPrecision(4)); 
            }
            setAllFiles(tempFiles);
            setAllFilesSizes(tempFilesSizes);
            uploadFilesToAPI(allFiles);
          }
        }
    });

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
                <input {...getInputProps()} />
                <p className="text" style={{ width: uploadWidth, color: '#EE4C7C' }}>
                  {
                    uploading?
                    <SyncLoader color='#EE4C7C' loading={uploading} style={{ fontSize: cloudSize }} />:
                    !uploadedOnce?
                    <CloudUploadOutlinedIcon className="animateUploadPop" sx={{ fontSize: cloudSize }}/>:
                    <CloudDoneOutlinedIcon className="animateUploadPop" sx={{ fontSize: cloudSize }}/>
                  }
                  <Font family="Acme">
                    <h2
                      style={{
                        textAlign: "center",
                        letterSpacing: "1px"
                      }}
                    >
                      {
                        uploading?
                        <span></span>:
                        !uploadedOnce?
                        <span>Drop files here!!!</span>:
                        <span>Done! Upload some more :)</span>
                      }
                    </h2>
                  </Font>
                </p>
                {/* Hello There */}
              </div>
            </Grid>
            {
              uploadedOnce ?
              <Grid item xs={12} md={12} lg={12}>
                <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                className="codeBox gradient-border"
                >
                  <Grid item xs={12} md={12} lg={12}>
                    <Font family="Acme">
                      <h2
                        style={{
                          textAlign: "center",
                          letterSpacing: "1px"
                        }}
                      >
                        Here's your code : 
                      </h2>
                    </Font>
                  </Grid>
                  <Grid item xs={12} md={12} lg={12}>
                    <Font family="Acme">
                      <h2
                        style={{
                          textAlign: "center",
                          letterSpacing: "5px"
                        }}
                      >
                        {fileCode}
                      </h2>
                    </Font>
                  </Grid>
                </Grid>
              </Grid>
              :
              <span></span>
            }
            <Grid item xs={12} md={12} lg={12}>
              {/* <Button onClick={() => window.location = '' }>
                Done
              </Button> */}
              <Font family="Lobster">
                <h1
                  style={{
                    textAlign: "center",
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
                      <Box sx={{ textAlign: 'center' }}>
                        <Slide in={true} direction="down"
                        style={{ transformOrigin: '0 0 0' }}
                        {...(true ? { timeout: 2000 } : {})}>
                          <Paper className="animate pop delay" sx={{ p: 2, color: '#EE4C7C' }} elevation={5} >
                            <Font family="Acme" style={{ letterSpacing: '1px', textAlign: 'center' }}>
                              {file.name.substr(5)} ({allFilesSizes[index]} KB)
                            </Font>
                          </Paper>
                        </Slide>
                      </Box>
                    </Grid>
                  </React.Fragment>
                ))}
              </Grid>
              <br />
              <br />
            </Grid>
          </Grid>
        </Container>
    );
}

export default UploadPage;
