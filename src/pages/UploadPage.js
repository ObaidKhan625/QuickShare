import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid";
import Font from "react-font";
import Button from '@mui/material/Button';
import DescriptionIcon from '@mui/icons-material/Description';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import CloudDoneOutlinedIcon from '@mui/icons-material/CloudDoneOutlined';
import axios from 'axios';
import { useDropzone } from "react-dropzone";
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';
import Slide from '@mui/material/Slide';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useMediaQuery } from 'react-responsive';

const UploadPage = () => {
    const [allFiles, setAllFiles] = useState([]);
    const [allFilesSizes, setAllFilesSizes] = useState([]);
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
                  <p className="text" style={{ width: uploadWidth, color: '#484848' }}>
                      {
                          !uploadedOnce? 
                          <CloudUploadOutlinedIcon className="animateUploadPop" sx={{ fontSize: '25vh' }}/> :
                          <CloudDoneOutlinedIcon className="animateUploadPop" sx={{ fontSize: '25vh' }}/>
                      }
                      <Font family="Acme">
                        <h2
                          style={{
                            textAlign: "center",
                            letterSpacing: "1px"
                          }}
                        >
                          {
                              !uploadedOnce? 
                              <span>Drop files here!!!</span> :
                              <span>Done! Upload some more :)</span>
                          }
                        </h2>
                      </Font>
                  </p>
                  {/* Hello There */}
                </div>
            </Grid>
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
                          <Paper className="animate pop delay" sx={{ p: 2 }} elevation={5} >
                            <Font family="Acme" style={{ letterSpacing: '1px' }}>
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
