import React, { createContext } from 'react';
import { useLocalStore } from 'mobx-react-lite';

export const StoreContext = createContext(null);

type Props = {
  children: any;
};

type Store = {
  stateGame: boolean;
  count: number;
  changeStateGame: (value: boolean) => void;
};

export const StoreProvider = ({ children }: Props) => {
  const store: Store = useLocalStore(() => ({
    stateGame: false,
    count: 0,
    changeStateGame: (value) => {
      store.count++;
      store.stateGame = value;
    }
  }));

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};
