import React, { useReducer, useEffect } from 'react';
import { GlobalStyle, light, dark } from './styles/global';
import { ThemeProvider } from 'styled-components';
import Context from './context';
import GlobalReducer, { State, Actions } from './reducer';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Details';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

const App: React.FC = () => {
  const [state, dispatch] = useReducer<React.Reducer<State, Actions>>(GlobalReducer, {
    isDark: false,
    isLoading: true,
    countries: [],
  });

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then((result) => dispatch({ type: 'ADD COUNTRIES', payload: result.data }))
      .catch((e) => console.log(e));
  }, [dispatch]);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <ThemeProvider theme={state.isDark ? dark : light}>
        <>
          <GlobalStyle />
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/details/:name">
              <Detail />
            </Route>
          </Switch>
        </>
      </ThemeProvider>
    </Context.Provider>
  );
};

export default App;
