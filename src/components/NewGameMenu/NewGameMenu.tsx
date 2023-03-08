import React from 'react';
import Logo from '../Logo/Logo';

/**
 * Renders the initial game board
 */
function NewGameMenu() {
  return (
    <div>
      {/* Logo */}
      <div>
        <Logo width={72} height={32} />
      </div>
    </div>
  );
}

export default NewGameMenu;
