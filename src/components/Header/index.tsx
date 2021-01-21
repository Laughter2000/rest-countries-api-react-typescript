import React, { useContext } from 'react';
import Context from '../../context';
//eslint-disable-next-line
import { HeaderDiv, HeaderText, HeaderBody, HeaderDark, MoonIcon, DarkMoonIcon } from './styles';
import { Link } from 'react-router-dom';
const Header = () => {
  const { state, dispatch } = useContext(Context);

  return (
    <HeaderDiv>
      <Link to="/details/belgium">
        <HeaderText>Where in the world? </HeaderText>
      </Link>

      <HeaderBody>
        {state.isDark ? (
          <DarkMoonIcon onClick={() => dispatch({ type: 'TOGGLE THEME' })} />
        ) : (
          <MoonIcon onClick={() => dispatch({ type: 'TOGGLE THEME' })} />
        )}

        <HeaderDark>Dark Mode</HeaderDark>
      </HeaderBody>
    </HeaderDiv>
  );
};

export default Header;
