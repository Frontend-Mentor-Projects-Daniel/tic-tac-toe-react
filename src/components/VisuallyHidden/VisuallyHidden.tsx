import React, { ReactNode, ReactElement } from 'react';

interface VisuallyHiddenProps {
  children: ReactNode;
}

const VisuallyHidden = ({
  children,
  ...delegated
}: VisuallyHiddenProps): ReactElement<any, any> => {
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

  if (forceShow) {
    // @ts-ignore
    return children;
  }

  return (
    <span className='sr-only' {...delegated}>
      {children}
    </span>
  );
};

export default VisuallyHidden;
