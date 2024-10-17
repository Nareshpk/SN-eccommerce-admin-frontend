import React from 'react';
import Stack from '@mui/material/Stack';

export default function Rating(PropTypes) {
  const { numReviews } = PropTypes;
  return (
    <Stack spacing={1}>
      <Rating name="rating" Value={2.5} precision={0.5} />
      <span>{numReviews + ' reviews'}</span>
    </Stack>
  );
}