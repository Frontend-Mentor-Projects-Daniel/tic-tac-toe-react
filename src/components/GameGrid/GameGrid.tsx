import React from 'react';

import xIcon from '../../assets/icon-x.svg';
import oIcon from '../../assets/icon-o.svg';
import { convertStringToNum } from '../../utils/helpers';

//TODO
// 1) When a user clicks on a square either x or o should be placed there depending on who's turn it is
//    + OnClick an image should be rendered
//    + OnClick which square has been taken should become known
// 2) A user shouldn't be able to click on a square that has a shape in it
// 3) When a user hovers over an empty square it should show an outline of either x or o
// 4) When a player has gotten 3 in a row or all the tiles have been filled, the game will end

// prettier-ignore
const GRID = [
  ["", "" , ""],
  ["", "" , ""],
  ["", "" , ""]
]

function GameGrid() {
  const [image, setImage] = React.useState(GRID);
  const [alt, setAlt] = React.useState(GRID);
  const [grid, setGrid] = React.useState(GRID);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = e.target;
    if (target instanceof HTMLButtonElement) {
      const buttonPositionString = target.dataset.position;

      if (buttonPositionString) {
        const buttonPositionNum = convertStringToNum(buttonPositionString);

        // create a new array so react knows to re-render
        const newGrid = [...grid];
        // newGrid[buttonPositionNum] = buttonPositionString;
        // setGrid(newGrid);

        // if (newGrid[buttonPositionNum] === buttonPositionString) {
        //   const newImageGrid = [...grid];
        //   setImage((nextValue) => {
        //     return newImageGrid;
        //   });

        //   const newAltGrid = [...grid];
        //   setAlt(newAltGrid);
        // }
      }
    }
  };

  return (
    <div className='my-5 grid grid-cols-3 justify-items-center gap-y-5 gap-x-5'>
      <button
        data-position='0'
        onClick={(e) => {
          handleClick(e);
        }}
        className='flex h-24 w-24 cursor-pointer items-center justify-center rounded-xl border-none bg-grid-bg shadow-[inset_0px_-8px_0px_#10212A]'
      >
        {/* <img src={image[0]} alt={alt[0]} /> */}
      </button>
      <button
        data-position='1'
        onClick={(e) => {
          handleClick(e);
        }}
        className='flex h-24 w-24 cursor-pointer items-center justify-center rounded-xl border-none bg-grid-bg shadow-[inset_0px_-8px_0px_#10212A]'
      >
        {/* <img src={image[1]} alt={alt[1]} /> */}
      </button>
      <button
        data-position='2'
        onClick={(e) => {
          handleClick(e);
        }}
        className='flex h-24 w-24 cursor-pointer items-center justify-center rounded-xl border-none bg-grid-bg shadow-[inset_0px_-8px_0px_#10212A]'
      >
        {/* <img src={image[2]} alt={alt[2]} /> */}
      </button>

      <button
        data-position='3'
        onClick={(e) => {
          handleClick(e);
        }}
        className='flex h-24 w-24 cursor-pointer items-center justify-center rounded-xl border-none bg-grid-bg shadow-[inset_0px_-8px_0px_#10212A]'
      >
        {/* <img src={image[3]} alt={alt[3]} /> */}
      </button>
      <button
        data-position='4'
        onClick={(e) => {
          handleClick(e);
        }}
        className='flex h-24 w-24 cursor-pointer items-center justify-center rounded-xl border-none bg-grid-bg shadow-[inset_0px_-8px_0px_#10212A]'
      >
        {/* <img src={image[4]} alt={alt[4]} /> */}
      </button>
      <button
        data-position='5'
        onClick={(e) => {
          handleClick(e);
        }}
        className='flex h-24 w-24 cursor-pointer items-center justify-center rounded-xl border-none bg-grid-bg shadow-[inset_0px_-8px_0px_#10212A]'
      >
        {/* <img src={image[5]} alt={alt[5]} /> */}
      </button>

      <button
        data-position='6'
        onClick={(e) => {
          handleClick(e);
        }}
        className='flex h-24 w-24 cursor-pointer items-center justify-center rounded-xl border-none bg-grid-bg shadow-[inset_0px_-8px_0px_#10212A]'
      >
        {/* <img src={image[6]} alt={alt[6]} /> */}
      </button>
      <button
        data-position='7'
        onClick={(e) => {
          handleClick(e);
        }}
        className='flex h-24 w-24 cursor-pointer items-center justify-center rounded-xl border-none bg-grid-bg shadow-[inset_0px_-8px_0px_#10212A]'
      >
        {/* <img src={image[7]} alt={alt[7]} /> */}
      </button>
      <button
        data-position='8'
        onClick={(e) => {
          handleClick(e);
        }}
        className='flex h-24 w-24 cursor-pointer items-center justify-center rounded-xl border-none bg-grid-bg shadow-[inset_0px_-8px_0px_#10212A]'
      >
        {/* <img src={image[8]} alt={alt[8]} /> */}
      </button>
    </div>
  );
}

export default GameGrid;
