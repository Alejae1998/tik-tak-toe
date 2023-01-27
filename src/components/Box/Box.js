import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import { GameContext } from '../../context/GameContext.js';

export default function BoxSx({ content, space, handleBoxClick }) {
  const { checkStats } = useContext(GameContext);
  const handleClick = () => {
    handleBoxClick({ content, space });
    checkStats();
  };
  return (
    <Button
      onClick={handleClick}
      disabled={content ? true : false}
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

    //   <span className="square">{content}</span>
  );
}
