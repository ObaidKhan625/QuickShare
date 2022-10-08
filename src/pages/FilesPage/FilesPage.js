import { React } from 'react';
import Grid from "@mui/material/Grid";
import Font from "react-font";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Cookies from "universal-cookie";
import ImageNotFound from '../../assets/ImageNotFound.png';
import './FilesPage.css';

const FilesPage = () => {
  const cookies = new Cookies();
  var allLinksList = cookies.get("QuickShare links");
  var listLength = allLinksList.length;
  var fileNames = [];
  var viewLinks = [];
  var contentLinks = [];
  var thumbnailLinks = [];
  for(var i = 0; i < listLength; i += 4) {
    fileNames.push(allLinksList[i]);
  }
  for(var i = 1; i < listLength; i += 4) {
    viewLinks.push(allLinksList[i]);
  }
  for(var i = 2; i < listLength; i += 4) {
    contentLinks.push(allLinksList[i]);
  }
  for(var i = 3; i < listLength; i += 4) {
    thumbnailLinks.push(allLinksList[i]);
  }

  return (
    <div>
      <Container fixed sx={{ marginBottom: '5vh' }}>
        <Font family="Lobster">
          <h1
            style={{
              textAlign: "center",
              letterSpacing: "2px"
            }}
          >
            Your Files
          </h1>
        </Font>
        <Grid container rowSpacing={3} columnSpacing={3}>
          {fileNames.map((file, index) => (
            <Grid item xl={3} lg={4} md={4} sm={6} xs={12} sx={{ textAlign: 'center' }} >
              <a href={viewLinks[index]} target="_blank" style={{ 'textDecoration': 'none' }} >
                <Card>
                  <img onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src=ImageNotFound;
                  }} src={thumbnailLinks[index]}/>
                  <CardContent  className="fileCard">
                    {file.substr(5)}
                  </CardContent>
                </Card>
              </a>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  )
}

export default FilesPage;