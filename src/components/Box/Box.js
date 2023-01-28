import React from 'react';
import Button from '@mui/material/Button';

export default function BoxSx({ content, space, handleBoxClick, active }) {
  const handleClick = () => {
    handleBoxClick({ content, space });
  };

  return (
    <Button
      onClick={handleClick}
      disabled={content || !active ? true : false}
      sx={{
        marginBottom: (theme) => theme.spacing(1),
        width: 150,
        height: 150,
        backgroundColor: '#e0ffcd',
        '&:hover': {
          backgroundColor: '#ffcab0',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <span className="square">{content}</span>
    </Button>
  );
}
