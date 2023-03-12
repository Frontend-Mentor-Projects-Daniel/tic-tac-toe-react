import React from 'react';

import NewGameMenu from '../NewGameMenu';
import VisuallyHidden from '../VisuallyHidden';

function App() {
  const [toggleBtnOne, setToggleBtnOne] = React.useState(true);
  const [vsPlayer, setVsPlayer] = React.useState('');
  const [hasSubmitted, setHasSubmitted] = React.useState(false);

  return (
    <>
      <header>
        <h1>
          <VisuallyHidden>Tic Tac Toe Project</VisuallyHidden>
        </h1>
      </header>

      <main className='center px-6'>
        {!hasSubmitted && (
          <NewGameMenu
            toggleBtnOne={toggleBtnOne}
            setToggleBtnOne={setToggleBtnOne}
            setVsPlayer={setVsPlayer}
            setHasSubmitted={setHasSubmitted}
          />
        )}

        {hasSubmitted && (
          <div className='text-center text-4xl text-white'>
            Render Game board
          </div>
        )}
      </main>

      <footer className='center text-center text-header-text'>
        <p>Made by Daniel Arzanipour</p>
      </footer>
    </>
  );
}

export default App;
