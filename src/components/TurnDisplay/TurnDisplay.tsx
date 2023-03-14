import React from 'react';

function TurnDisplay() {
  return (
    <div className='flex items-center gap-1 rounded bg-header-turn-bg px-4 py-2 shadow-[inset_0px_-4px_0px_#10212A]'>
      <div className='w-[20px]'>
        <svg
          className='inline-block h-full w-full'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 75 75'
        >
          <path
            d='M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z'
            fill='#A8BFC9'
            fillRule='evenodd'
          />
        </svg>
      </div>
      <span className='text-sm font-bold uppercase tracking-widest text-header-turn-text md:text-base'>
        turn
      </span>
    </div>
  );
}

export default TurnDisplay;
