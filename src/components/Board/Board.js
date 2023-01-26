import BoxSx from '../Box/Box.js';
import { GameContext } from '../../context/GameContext.js';
import './Board.css';
import { useContext } from 'react';

export default function Board() {
  const { board } = useContext(GameContext);
  return (
    <div className="board">
      {board.map((box) => (
        <BoxSx key={box.space} {...box} />
      ))}
    </div>
  );
}
