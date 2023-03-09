import React from 'react';
import Logo from '../Logo/Logo';

import xImageOutline from '../../assets/icon-x-outline.svg';
import oImageOutline from '../../assets/icon-o-outline.svg';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';

/**
 * Renders the initial game board
 */
function NewGameMenu() {
  return (
    <div>
      {/* Logo */}
      <div>
        <Logo width={72} height={32} classes='mx-auto mb-8 md:mb-10' />
      </div>

      {/* Mark */}
      <div className='rounded-2xl bg-mark-bg px-6 pt-6 pb-8 shadow-lg shadow-[#10212A]'>
        <h2 className='mb-6 text-center text-base uppercase text-header-text md:mb-8'>
          Pick Player 1's Mark
        </h2>

        {/* toggle switch */}
        <ToggleSwitch />

        <p className='mt-7 text-center text-sm font-medium uppercase tracking-wide text-side-note-text opacity-50 md:mt-4'>
          Remember: X goes first
        </p>
      </div>

      {/* Play Buttons */}
      <div className='mt-8 md:mt-10'>
        <button>New Game (vs cpu)</button>
        <button className='bg-player-bg'>New Game (vs player)</button>
      </div>
    </div>
  );
}

export default NewGameMenu;
