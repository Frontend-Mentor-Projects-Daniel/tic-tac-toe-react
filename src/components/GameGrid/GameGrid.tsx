import React from 'react';

import xIcon from '../../assets/icon-x.svg';
import oIcon from '../../assets/icon-o.svg';

function GameGrid() {
  return (
    <div className='my-5 grid grid-cols-3 justify-items-center gap-y-5 gap-x-5'>
      <div className='flex h-24 w-24 items-center justify-center rounded-xl bg-grid-bg shadow-[inset_0px_-8px_0px_#10212A]'>
        <img src={oIcon} alt='' />
      </div>
      <div className='h-24 w-24 rounded-xl bg-grid-bg shadow-[inset_0px_-8px_0px_#10212A]'></div>
      <div className='h-24 w-24 rounded-xl bg-grid-bg shadow-[inset_0px_-8px_0px_#10212A]'></div>

      <div className='h-24 w-24 rounded-xl bg-grid-bg shadow-[inset_0px_-8px_0px_#10212A]'></div>
      <div className='h-24 w-24 rounded-xl bg-grid-bg shadow-[inset_0px_-8px_0px_#10212A]'></div>
      <div className='h-24 w-24 rounded-xl bg-grid-bg shadow-[inset_0px_-8px_0px_#10212A]'></div>

      <div className='h-24 w-24 rounded-xl bg-grid-bg shadow-[inset_0px_-8px_0px_#10212A]'></div>
      <div className='h-24 w-24 rounded-xl bg-grid-bg shadow-[inset_0px_-8px_0px_#10212A]'></div>
      <div className='h-24 w-24 rounded-xl bg-grid-bg shadow-[inset_0px_-8px_0px_#10212A]'></div>
    </div>
  );
}

export default GameGrid;
