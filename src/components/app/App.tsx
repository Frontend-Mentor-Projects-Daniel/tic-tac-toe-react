import React from 'react';

import NewGameMenu from '../NewGameMenu/NewGameMenu';
import VisuallyHidden from '../VisuallyHidden/VisuallyHidden';

function App() {
  const [newGame, setNewGame] = React.useState('');

  return (
    <>
      <header>
        <h1>
          <VisuallyHidden>Tic Tac Toe Project</VisuallyHidden>
        </h1>
      </header>

      <main className='center px-6'>
        <NewGameMenu newGame={newGame} setNewGame={setNewGame} />
      </main>

      <footer className='center text-center text-header-text'>
        <p>Made by Daniel Arzanipour</p>
      </footer>
    </>
  );
}

export default App;
