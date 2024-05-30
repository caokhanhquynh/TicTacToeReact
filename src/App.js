import React from 'react';
import './App.css'; // Import your CSS file here
import Game from './components/Game';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tic-Tac-Toe Game</h1>
      </header>
      <main>
        <Game />
      </main>
    </div>
  );
}

export default App;
