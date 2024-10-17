import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Typography } from '../../node_modules/@material-ui/core/index';

export default function LoadingBox() {

  return (


    <Typography>
      <CircularProgress size="1.5rem"/> &nbsp;Loading...
    </Typography >
  );
}

