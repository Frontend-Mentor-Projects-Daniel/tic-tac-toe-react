import React, { ReactNode } from 'react';

interface ToggleBtnOneContextType {
  toggleBtnOne: boolean;
  setToggleBtnOne: React.Dispatch<React.SetStateAction<boolean>>;
}

type ToggleProviderProps = {
  children: ReactNode;
};

/**
 * A state variable and its setter function
 * toggleBtnOne is the state of the toggle button (either true for x or false for o)
 */
export const ToggleBtnOneContext = React.createContext<ToggleBtnOneContextType>(
  {
    toggleBtnOne: true,
    setToggleBtnOne: () => {},
  }
);

function ToggleProvider({ children }: ToggleProviderProps) {
  const [toggleBtnOne, setToggleBtnOne] = React.useState(true);

  return (
    <ToggleBtnOneContext.Provider value={{ toggleBtnOne, setToggleBtnOne }}>
      {children}
    </ToggleBtnOneContext.Provider>
  );
}

export default ToggleProvider;
