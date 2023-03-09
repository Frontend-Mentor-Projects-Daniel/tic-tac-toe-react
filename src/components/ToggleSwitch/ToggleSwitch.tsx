import React from 'react';

import VisuallyHidden from '../VisuallyHidden/VisuallyHidden';

function ToggleSwitch() {
  const [xBg, setXBg] = React.useState(true);

  return (
    <form className='flex'>
      {/* X mark */}
      <div className='flex flex-1 text-center'>
        <label
          className={`${
            xBg && 'bg-toggle-mark-checked-bg'
          } relative flex flex-1 flex-col-reverse items-center text-6xl text-white`}
          htmlFor='x-mark'
        >
          <input
            type='radio'
            name='mark'
            id='x-mark'
            value='x'
            className='peer absolute w-[1em] opacity-0'
            defaultChecked
            onChange={() => {
              setXBg(true);
            }}
          />

          <svg
            className='translate-x-2 translate-y-2 fill-toggle-mark-regular-fill peer-checked:fill-toggle-mark-checked-fill'
            width='64'
            height='64'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 100 100'
          >
            <path
              d='M51.12 1.269c.511 0 1.023.195 1.414.586l9.611 9.611c.391.391.586.903.586 1.415s-.195 1.023-.586 1.414L44.441 32l17.704 17.705c.391.39.586.902.586 1.414 0 .512-.195 1.024-.586 1.415l-9.611 9.611c-.391.391-.903.586-1.415.586a1.994 1.994 0 0 1-1.414-.586L32 44.441 14.295 62.145c-.39.391-.902.586-1.414.586a1.994 1.994 0 0 1-1.415-.586l-9.611-9.611a1.994 1.994 0 0 1-.586-1.415c0-.512.195-1.023.586-1.414L19.559 32 1.855 14.295a1.994 1.994 0 0 1-.586-1.414c0-.512.195-1.024.586-1.415l9.611-9.611c.391-.391.903-.586 1.415-.586s1.023.195 1.414.586L32 19.559 49.705 1.855c.39-.391.902-.586 1.414-.586Z'
              strokeWidth='2'
            />
          </svg>

          <VisuallyHidden>X</VisuallyHidden>
        </label>
      </div>

      {/* O mark */}
      <div className='flex flex-1 text-center'>
        <label
          className={`${
            !xBg && 'bg-toggle-mark-checked-bg'
          } relative flex flex-1 flex-col-reverse items-center text-6xl text-white`}
          htmlFor='o-mark'
        >
          <input
            type='radio'
            name='mark'
            id='o-mark'
            value='o'
            className='peer absolute w-[1em] opacity-0'
            onChange={() => {
              setXBg(false);
            }}
          />

          <svg
            className='translate-x-2 translate-y-2 fill-toggle-mark-regular-fill peer-checked:fill-toggle-mark-checked-fill'
            width='66'
            height='66'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 100 100'
          >
            <path
              d='M33 1c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C15.327 65 1 50.673 1 33 1 15.327 15.327 1 33 1Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z'
              strokeWidth='2'
            />
          </svg>

          <VisuallyHidden>O</VisuallyHidden>
        </label>
      </div>
    </form>
  );
}

export default ToggleSwitch;
