import React from 'react';

import iconRestart from '../../assets/icon-restart.svg';

function RestartButton() {
  return (
    <button className='cursor-pointer rounded border-none bg-header-restartBtn-bg p-3 shadow-[inset_0px_-4px_0px_#6B8997]'>
      <img src={iconRestart} alt='Restart the game' />
    </button>
  );
}

export default RestartButton;
