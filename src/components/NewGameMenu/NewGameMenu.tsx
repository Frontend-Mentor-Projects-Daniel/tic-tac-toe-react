import React from 'react';
import Logo from '../Logo/Logo';

import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';

type newGameMenuProps = {
  newGame: string;
  setNewGame: React.Dispatch<React.SetStateAction<string>>;
};

/**
 * Renders the initial game board
 */
function NewGameMenu({ newGame, setNewGame }: newGameMenuProps) {
  const [xMark, setXMark] = React.useState(true);

  /**
   * Renders whether the player will play against computer or another person
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (xMark === true) {
      // play against player
    } else {
      // play against cpu
    }
  };

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
        <form
          id='mark-form'
          className='flex'
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }}
        >
          <ToggleSwitch xMark={xMark} setXMark={setXMark} />
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

export default NewGameMenu;
