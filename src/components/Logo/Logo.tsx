import React, { ReactNode } from 'react';

import logo from '../../assets/logo.svg';

/**
 * width: The initial width of the image
 *
 * height: The initial width of the image
 *
 * classes: A list of classes that should be applied directly to the image tag
 *
 * alt: The alt text for the img tag
 */
type LogoProps = {
  width?: number;
  height?: number;
  classes?: string;
  alt?: string;
};

/**
 * A logo image
 * @param {LogoProps} props - The width and height of the element and a string of all the classes to be applied to the element and the alt text for the image
 * @example <Logo width={72} height={32} classes='text-center someOtherClass'>
 */
function Logo({ width, height, classes, alt }: LogoProps) {
  return (
    <img
      className={classes}
      src={logo}
      alt={alt}
      width={width}
      height={height}
    />
  );
}

export default Logo;
