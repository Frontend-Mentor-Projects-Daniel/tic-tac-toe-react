import React from 'react';

import logo from '../../assets/logo.svg';

type LogoProps = {
  width: number;
  height: number;
};

/**
 * A logo image
 * @param {LogoProps} - The width and height of the image, primarily for browser performance
 */
function Logo({ width, height }: LogoProps) {
  return <img src={logo} alt='' width={width} height={height} />;
}

export default Logo;
