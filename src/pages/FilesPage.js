import React from 'react';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import Grid from "@mui/material/Grid";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Font from "react-font";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const FilesPage = () => {
    var allFiles = [1, 2, 3, 4, 5];
    const commonStyles = {
        bgcolor: 'background.paper',
        m: 1,
        border: 1,
        width: '5rem',
        height: '5rem',
      };
      const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
      
    return (
      <div>
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
        <Grid container rowSpacing={3} columnSpacing={3} sx={{ marginLeft: 1, marginRight:1 }}>
          <Grid item xs={4} sx={{ textAlign: 'center' }} >
            <Card>
              <CardMedia
                component="img"
                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  File Name
                </Typography>
                {/* <Typography variant="body2" color="text.secondary">
                  some size (KB)
                </Typography> */}
              </CardContent>
              {/* <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions> */}
            </Card>
          </Grid>
          <Grid item xs={4} sx={{ textAlign: 'center' }} >
            <Card>
              <CardMedia
                component="img"
                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  File Name
                </Typography>
                {/* <Typography variant="body2" color="text.secondary">
                  some size (KB)
                </Typography> */}
              </CardContent>
              {/* <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions> */}
            </Card>
          </Grid>
          <Grid item xs={4} sx={{ textAlign: 'center' }} >
            <Card>
              <CardMedia
                component="img"
                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  File Name
                </Typography>
                {/* <Typography variant="body2" color="text.secondary">
                  some size (KB)
                </Typography> */}
              </CardContent>
              {/* <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions> */}
            </Card>
          </Grid>
          <Grid item xs={4} sx={{ textAlign: 'center' }} >
            <Card>
              <CardMedia
                component="img"
                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  File Name
                </Typography>
                {/* <Typography variant="body2" color="text.secondary">
                  some size (KB)
                </Typography> */}
              </CardContent>
              {/* <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions> */}
            </Card>
          </Grid>
        </Grid>
      </div>
    )
}

export default FilesPage;