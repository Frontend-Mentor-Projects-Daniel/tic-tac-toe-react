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

      <NewGameMenu />
    </>
  );
}

export default App;
