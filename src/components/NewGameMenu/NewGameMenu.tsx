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
        <Logo
          width={72}
          height={32}
          classes='mx-auto mb-8 md:mb-10'
          alt='tic tac toe game logo'
        />
      </div>

      {/* Mark */}
      <div className='rounded-2xl bg-mark-bg px-6 pt-6 pb-8 shadow-lg shadow-[#10212A]'>
        <h2 className='mb-6 text-center text-base uppercase text-header-text md:mb-8'>
          Pick Player 1's Mark
        </h2>

        {/* toggle switch */}
        <form id='mark-form' className='flex'>
          <ToggleSwitch />
        </form>

        <p className='mt-7 text-center text-sm font-medium uppercase tracking-wide text-side-note-text opacity-50 md:mt-4'>
          Remember: X goes first
        </p>
      </div>

      {/* Play Buttons */}
      <div className='mt-8 flex flex-col gap-4 md:mt-10 md:gap-5'>
        <button
          form='mark-form'
          className='h-[56px] cursor-pointer rounded-2xl border-none bg-cpu-or-p2-bg font-bold uppercase tracking-widest shadow-[inset_0px_-8px_0px_#CC8B13;]'
        >
          New Game (vs cpu)
        </button>
        <button
          form='mark-form'
          className='h-[56px] cursor-pointer rounded-2xl border-none bg-player-bg font-bold uppercase tracking-widest shadow-[inset_0px_-8px_0px_#118C87;]'
        >
          New Game (vs player)
        </button>
      </div>
    </div>
  );
}

// box-shadow: inset 0px -8px 0px #CC8B13;
// box-shadow: inset 0px -8px 0px #118C87;

export default NewGameMenu;
