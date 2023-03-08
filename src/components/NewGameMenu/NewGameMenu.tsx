import React from 'react';
import Logo from '../Logo/Logo';

import xImageOutline from '../../assets/icon-x-outline.svg';
import oImageOutline from '../../assets/icon-o-outline.svg';

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

      {/* Mark */}
      <div className='bg-mark-bg'>
        <h2>Pick Player 1's Mark</h2>

        <div>
          <img src={xImageOutline} alt='Press this to choose X' />
          <img src={oImageOutline} alt='Press this to choose O' />
        </div>

        <p>Remember: X goes first</p>
      </div>

      {/* Play Buttons */}
      <div>
        <button>New Game (vs cpu)</button>
        <button className='bg-player-bg'>New Game (vs player)</button>
      </div>
    </div>
  );
}

export default NewGameMenu;
