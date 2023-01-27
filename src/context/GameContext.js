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
  const [winner, setWinner] = useState(false);

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
    // if (!active) return;
    if (board[0].content === board[1].content && board[1].content === board[2].content)
      setWinner(true);
    setActive(false);

    const fullBoard = false;
    if (winner) {
      setGameMessage(`You win ${winner}!`);
      setActive(false);
    } else if (fullBoard) {
      setGameMessage('Cats  Game!');
      setActive(false);
    }
  };

  const resetGame = () => {
    setBoard([
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
    setActive(true);
    setGameMessage('Play Again?');
    setCurrentPlayer('O');
  };

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
        resetGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameProvider, GameContext };
