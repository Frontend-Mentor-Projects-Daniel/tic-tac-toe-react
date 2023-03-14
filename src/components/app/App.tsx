import React from 'react';

import NewGameMenu from '../NewGameMenu';
import GameBoard from '../GameBoard';
import VisuallyHidden from '../VisuallyHidden';

import ToggleProvider from '../../contexts/ToggleProvider';
import VSProvider from '../../contexts/VsPlayerContext';

function App() {
  // has the form been submitted with the above info
  const [hasSubmitted, setHasSubmitted] = React.useState(false);

  return (
    <ToggleProvider>
      <VSProvider>
        <header>
          <h1>
            <VisuallyHidden>Tic Tac Toe Project</VisuallyHidden>
          </h1>
        </header>

        <main className='center px-6'>
          {!hasSubmitted && <NewGameMenu setHasSubmitted={setHasSubmitted} />}

          {hasSubmitted && (
            <div className='text-center text-4xl text-white'>
              <GameBoard />
            </div>
          )}
        </main>

        <footer className='center text-center text-header-text'>
          <p>Made by Daniel Arzanipour</p>
        </footer>
      </VSProvider>
    </ToggleProvider>
  );
}

export default App;
