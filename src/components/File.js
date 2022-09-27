import { React, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from "@mui/material/Grid";

const File = (props) => {
    const [loaded, setLoaded] = useState(false);
    console.log(props.thumbnailLink);
    return (
        <div>
            {/* xl={3} lg={4} md={4} sm={6} xs={12} */}
            <Grid item  sx={{ textAlign: 'center' }} >
              <a href={props.viewLink} target="_blank" style={{ 'textDecoration': 'none' }} >
                <Card>
                  {/* <CardMedia
                    component="img"
                    image={loaded[index] ? thumbnailLinks[index] : }
                    alt="green iguana"
                    sx={{ height: '40vh' }}
                  /> */}
                  <img
                    src={loaded ? props.thumbnailLink : 'none'}
                    onLoad={() => { setLoaded(true); alert(props.file); }}
                  />
                  <CardContent>
                  {props.file.substr(5)}
                  </CardContent>
                </Card>
              </a>
            </Grid>
        </div>
        // {loaded ? null : (
        // <div
        //     style={{
        //     background: 'red',
        //     height: '400px',
        //     width: '400px'
        //     }}
        // />
        // )}
        // <img
        // style={loaded ? {} : { display: 'none' }}
        // src={src}
        // onLoad={() => setLoaded(true)}
        // />
    )
}

export default File;