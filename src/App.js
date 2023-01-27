import './App.css';
import Board from './components/Board/Board.js';
import Header from './components/Header/Header.js';
import Message from './components/Message/Message.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Message />
      <Board />
    </div>
  );
}

export default App;
