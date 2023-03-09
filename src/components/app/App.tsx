import React from 'react';

import NewGameMenu from '../NewGameMenu/NewGameMenu';
import VisuallyHidden from '../VisuallyHidden/VisuallyHidden';

function App() {
  return (
    <>
      <header>
        <h1>
          <VisuallyHidden>Tic Tac Toe Project</VisuallyHidden>
        </h1>
      </header>

      <main className='center px-6'>
        <NewGameMenu />
      </main>

      <footer className='center text-center text-header-text'>
        <p>Made by Daniel Arzanipour</p>
      </footer>
    </>
  );
}

export default App;
