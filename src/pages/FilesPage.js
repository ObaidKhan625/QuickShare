import { React, useState } from 'react';
import Grid from "@mui/material/Grid";
import Font from "react-font";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Cookies from "universal-cookie";

const FilesPage = () => {
  const cookies = new Cookies();
  var allLinksList = cookies.get("SPrintout links");
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
                  <CardMedia
                    component="img"
                    image={thumbnailLinks[index]}
                    alt="green iguana"
                    sx={{ height: '40vh' }}
                  />
                  <CardContent>
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

















// import { React } from 'react';
// import Grid from "@mui/material/Grid";
// import Font from "react-font";
// import Container from '@mui/material/Container';
// import Cookies from "universal-cookie";
// import File from '../components/File';

// const FilesPage = () => {
//   const cookies = new Cookies();
//   var allLinksList = cookies.get("SPrintout links");
//   var listLength = allLinksList.length;
//   var fileNames = [];
//   var viewLinks = [];
//   var contentLinks = [];
//   var thumbnailLinks = [];
//   for(var i = 0; i < listLength; i += 4) {
//     fileNames.push(allLinksList[i]);
//   }
//   for(var i = 1; i < listLength; i += 4) {
//     viewLinks.push(allLinksList[i]);
//   }
//   for(var i = 2; i < listLength; i += 4) {
//     contentLinks.push(allLinksList[i]);
//   }
//   for(var i = 3; i < listLength; i += 4) {
//     thumbnailLinks.push(allLinksList[i]);
//   }

//   return (
//     <div>
//       <Container fixed sx={{ marginBottom: '5vh' }}>
//         <Font family="Lobster">
//           <h1
//             style={{
//               textAlign: "center",
//               letterSpacing: "2px"
//             }}
//           >
//             Your Files
//           </h1>
//         </Font>
//         <Grid container rowSpacing={3} columnSpacing={3}>
//           {fileNames.map((file, index) => (
//             <File file={file} viewLink={viewLinks[index]} contentLink={contentLinks[index]} thumbnailLink={thumbnailLinks[index]} />
//           ))}
//         </Grid>
//       </Container>
//     </div>
//   )
// }

// export default FilesPage;