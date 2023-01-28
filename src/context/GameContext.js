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
  const [active, setActive] = useState(true);
  const [gameMessage, setGameMessage] = useState('Your turn O');
  const [movesBoard, setMovesBoard] = useState({
    win1: {
      0: '',
      1: '',
      2: '',
    },
    win2: {
      0: '',
      3: '',
      6: '',
    },
    win3: {
      0: '',
      4: '',
      8: '',
    },
    win4: {
      1: '',
      4: '',
      7: '',
    },
    win5: {
      2: '',
      5: '',
      8: '',
    },
    win6: {
      2: '',
      4: '',
      6: '',
    },
    win7: {
      3: '',
      4: '',
      5: '',
    },
    win8: {
      6: '',
      7: '',
      8: '',
    },
  });
  const [movesCount, setMovesCount] = useState(0);
  let hasWinner = false;

  const handleBoxClick = (box) => {
    setMovesCount(movesCount + 1);
    const currentBoxIndex = board.findIndex((boardBox) => boardBox.space === box.space);
    const newBoard = board;
    const newPossibleWins = movesBoard;

    if (!newBoard[currentBoxIndex].content) {
      newBoard[currentBoxIndex] = {
        space: newBoard[currentBoxIndex].space,
        content: currentPlayer,
      };
      setBoard(newBoard);

      Object.values(newPossibleWins).map((possibleWin) => {
        if (Object.keys(possibleWin).includes((box.space - 1).toString())) {
          possibleWin[box.space - 1] = currentPlayer;
          const count = Object.values(possibleWin).reduce((n, val) => {
            return n + (val === currentPlayer);
          }, 0);

          if (count === 3) {
            setGameMessage(`You win ${currentPlayer}!`);
            setActive(false);
            hasWinner = true;
          }
        }
        return possibleWin;
      });
      setMovesBoard(newPossibleWins);

      if (!hasWinner) {
        if (movesCount < 8) {
          setCurrentPlayer(currentPlayer === 'O' ? 'X' : 'O');
          setGameMessage(`Your turn ${currentPlayer === 'O' ? 'X' : 'O'}`);
        } else {
          setGameMessage('Cats Game!');
          setActive(false);
        }
      }
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
    setMovesBoard({
      win1: {
        0: '',
        1: '',
        2: '',
      },
      win2: {
        0: '',
        3: '',
        6: '',
      },
      win3: {
        0: '',
        4: '',
        8: '',
      },
      win4: {
        1: '',
        4: '',
        7: '',
      },
      win5: {
        2: '',
        5: '',
        8: '',
      },
      win6: {
        2: '',
        4: '',
        6: '',
      },
      win7: {
        3: '',
        4: '',
        5: '',
      },
      win8: {
        6: '',
        7: '',
        8: '',
      },
    });
    setMovesCount(0);
    hasWinner = false;
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
        resetGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameProvider, GameContext };
