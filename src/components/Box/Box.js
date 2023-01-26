import React from 'react';
import Box from '@mui/material/Box';

export default function BoxSx({ content, space }) {
  const handleClick = () => {
    ({ content, space });
  };
  return (
    <Box
      onClick={handleClick}
      sx={{
        marginBottom: (theme) => theme.spacing(3),
        width: 150,
        height: 150,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <span className="square">{content}</span>
    </Box>

    //   <span className="square">{content}</span>
  );
}
