import React from 'react';
import Logo from '../Logo';

import ToggleSwitch from '../ToggleSwitch';

type NewGameMenuProps = {
  toggleBtnOne: boolean;
  setToggleBtnOne: React.Dispatch<React.SetStateAction<boolean>>;
  setVsPlayer: React.Dispatch<React.SetStateAction<string>>;
  setHasSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
};

/**
 * Renders the initial game board
 */
function NewGameMenu({
  toggleBtnOne,
  setToggleBtnOne,
  setVsPlayer,
  setHasSubmitted,
}: NewGameMenuProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setHasSubmitted(true);
  };

  const handleButtonClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const target = e.target;
    if (target instanceof HTMLButtonElement) {
      setVsPlayer(target.id);
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
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }}
        >
          <ToggleSwitch
            toggleBtnOne={toggleBtnOne}
            setToggleBtnOne={setToggleBtnOne}
          />
        </form>

        <p className='mt-7 text-center text-sm font-medium uppercase tracking-wide text-side-note-text opacity-50 md:mt-4'>
          Remember: X goes first
        </p>
      </div>

      {/* Play Buttons */}
      <div className='mt-8 flex flex-col gap-4 md:mt-10 md:gap-5'>
        <button
          onClick={(e) => {
            handleButtonClick(e);
          }}
          form='mark-form'
          className='h-[56px] cursor-pointer rounded-2xl border-none bg-cpu-or-p2-bg font-bold uppercase tracking-widest shadow-[inset_0px_-8px_0px_#CC8B13;]'
          id='vsCpu'
        >
          New Game (vs cpu)
        </button>
        <button
          onClick={(e) => {
            handleButtonClick(e);
          }}
          form='mark-form'
          className='h-[56px] cursor-pointer rounded-2xl border-none bg-player-bg font-bold uppercase tracking-widest shadow-[inset_0px_-8px_0px_#118C87;]'
          id='vsPlayer'
        >
          New Game (vs player)
        </button>
      </div>
    </div>
  );
}

export default NewGameMenu;
