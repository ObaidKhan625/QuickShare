import { React, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from "@mui/material/Grid";

const File = (props) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div>
      {loaded ? null : (
        <div
          style={{
            background: 'red',
            height: '400px',
            width: '400px'
          }}
        />
      )}
      <img
        style={loaded ? {} : { display: 'none' }}
        src="https://lh4.googleusercontent.com/YtdRWvhCJTAeItZ-PIsZrn-UjTj--mLQOL1J91TtacukCO-xJZAgvI42qmDnDTMqEaxH5vJqyrM9YI8=s220"
        onLoad={() => setLoaded(true)}
      />
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