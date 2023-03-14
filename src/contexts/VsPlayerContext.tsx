import React, { ReactNode } from 'react';

type VsPlayerContextType = {
  vsPlayer: string;
  setVsPlayer: React.Dispatch<React.SetStateAction<string>>;
};

type VSProviderProps = {
  children: ReactNode;
};

/**
 * Whether p1 is playing against p2 or cpu
 */
export const VsPlayerContext = React.createContext<VsPlayerContextType>({
  vsPlayer: '',
  setVsPlayer: () => {},
});

/**
 * A state variable and its setter function
 * vsPlayer will either be "vsPlayer" or "vsCpu" depending on whether the user choices to play against cpu or another player
 */
function VSProvider({ children }: VSProviderProps) {
  const [vsPlayer, setVsPlayer] = React.useState('');

  return (
    <VsPlayerContext.Provider value={{ vsPlayer, setVsPlayer }}>
      {children}
    </VsPlayerContext.Provider>
  );
}

export default VSProvider;
