import { createContext, useState } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [board, setBoard] = useState([
    { space: 1, content: '' },
    { space: 2, content: '' },
    { space: 3, content: '' },
    { space: 4, content: '' },
    { space: 5, content: '' },
    { space: 6, content: '' },
    { space: 7, content: '' },
    { space: 8, content: '' },
    { space: 9, content: '' },
  ]);
  const [currentPlayer, setCurrentPlayer] = useState('O');
  const [active, setActive] = useState(false);
  const [gameMessage, setGameMessage] = useState('Your turn O');

  const handleBoxClick = (box) => {
    const currentBoxIndex = board.findIndex((boardBox) => boardBox.space === box.space);
    const newBoard = board;
    if (!newBoard[currentBoxIndex].content) {
      newBoard[currentBoxIndex] = {
        space: newBoard[currentBoxIndex].space,
        content: currentPlayer,
      };
      setBoard(newBoard);
    }
    setCurrentPlayer(currentPlayer === 'O' ? 'X' : 'O');
    setGameMessage(`Your turn ${currentPlayer === 'O' ? 'X' : 'O'}`);
  };
  const checkStats = () => {
    if (!active) return;
    const winner = checkWinner();
    if (winner) {
      setGameMessage(`You win ${winner}!`);
      setActive(false);
    } else if (isCatsGame()) {
      setGameMessage('Cats  Game!');
      setActive(false);
    }
  };
  checkStats();

  return (
    <GameContext.Provider
      value={{
        board,
        setBoard,
        currentPlayer,
        setCurrentPlayer,
        active,
        setActive,
        gameMessage,
        setGameMessage,
        handleBoxClick,
        checkStats,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameProvider, GameContext };
