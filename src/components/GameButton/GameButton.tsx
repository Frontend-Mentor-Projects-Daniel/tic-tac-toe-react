import React from 'react';

// @ts-ignore
function GameButton({ handleClick, index }) {
  return (
    <button
      data-position='0'
      onClick={(e) => {
        handleClick(0, 0);
      }}
      className='flex h-24 w-24 cursor-pointer items-center justify-center rounded-xl border-none bg-grid-bg shadow-[inset_0px_-8px_0px_#10212A]'
    >
      {/* <img src={image[0]} alt={alt[0]} /> */}
    </button>
  );
}

export default GameButton;
