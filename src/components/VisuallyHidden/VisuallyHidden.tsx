import React, { ReactNode } from 'react';

/**
 * children: Any content, whether text or an element or a react element
 * classes: Any classes, each class should be separated by a space
 * ...delegated: Any props to add to the span element
 */
interface VisuallyHiddenProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  classes?: string;
}

/**
 * Accessibly hides content from sighted users but reveals it to screen readers
 * @param {VisuallyHiddenProps} props - Accepts any content as children, can add classes or attributes to the returning span element
 * @returns A span element
 */
const VisuallyHidden = ({
  classes,
  children,
  ...delegated
}: VisuallyHiddenProps) => {
  const [forceShow, setForceShow] = React.useState(false);
  React.useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      const handleKeyDown = (ev: Event) => {
        if (ev instanceof KeyboardEvent) {
          if (ev.key === 'Alt') {
            setForceShow(true);
          }
        }
      };
      const handleKeyUp = (ev: Event) => {
        if (ev instanceof KeyboardEvent) {
          if (ev.key === 'Alt') {
            setForceShow(false);
          }
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('keyup', handleKeyUp);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('keyup', handleKeyUp);
      };
    }
  }, []);

  return forceShow ? (
    <span className={`${classes}`} {...delegated}>
      {children}
    </span>
  ) : (
    <span className={`sr-only`}>{children}</span>
  );
};

export default VisuallyHidden;
