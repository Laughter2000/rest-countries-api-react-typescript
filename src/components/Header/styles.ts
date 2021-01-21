import styled from 'styled-components';
import { Moon } from '@styled-icons/fa-regular/Moon';
import { Moon as DarkMoon } from '@styled-icons/bootstrap/Moon';

export const HeaderDiv = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 0 20px 0;
  background-color: ${({ theme }) => theme.element};
  font-size: 14px;
`;

export const HeaderText = styled.h3`
  font-weight: 800;
  color: ${({ theme }) => theme.text};
  align-self: center;
`;

export const HeaderBody = styled.span`
  margin: 0 5px;
  align-self: center;
`;

export const HeaderDark = styled.span`
  color: ${({ theme }) => theme.text};
  font-weight: 800;
  margin-left: 5px;
`;

export const MoonIcon = styled(Moon)`
  width: 20px;
  height: 20px;
`;

export const DarkMoonIcon = styled(DarkMoon)`
  width: 20px;
  height: 20px;
  color: white;
`;
