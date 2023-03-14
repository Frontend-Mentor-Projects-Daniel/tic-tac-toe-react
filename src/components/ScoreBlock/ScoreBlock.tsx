import React from 'react';

function ScoreBlock() {
  return (
    <>
      <div className='flex-1 rounded-lg bg-scoreboard-x-bg px-6 py-3'>
        <p className='flex flex-col text-xs font-medium tracking-[0.75px] text-scoreboard-text md:text-sm md:tracking-[0.88px]'>
          X
          <span className='text-xl font-bold tracking-[1.25px] md:text-2xl md:tracking-[1.5px]'>
            14
          </span>
        </p>
      </div>

      <div className='flex-1 rounded-lg bg-scoreboard-ties-bg px-6 py-3'>
        <p className='flex flex-col text-xs font-medium tracking-[0.75px] text-scoreboard-text md:text-sm md:tracking-[0.88px]'>
          TIES
          <span className='text-xl font-bold tracking-[1.25px] md:text-2xl md:tracking-[1.5px]'>
            32
          </span>
        </p>
      </div>

      <div className='flex-1 rounded-lg bg-scoreboard-o-bg px-6 py-3'>
        <p className='flex flex-col text-xs font-medium tracking-[0.75px] text-scoreboard-text md:text-sm md:tracking-[0.88px]'>
          O
          <span className='text-xl font-bold tracking-[1.25px] md:text-2xl md:tracking-[1.5px]'>
            11
          </span>
        </p>
      </div>
    </>
  );
}

export default ScoreBlock;
