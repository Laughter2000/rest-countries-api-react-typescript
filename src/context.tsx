import React from 'react';
import { State } from './reducer';

const initialState = {
  isDark: false,
  isLoading: false,
  countries: [],
};

type ContextType = {
  state: State;
  dispatch: React.Dispatch<any>;
};

const Context = React.createContext<ContextType>({
  state: initialState,
  dispatch: () => null,
});

export default Context;
