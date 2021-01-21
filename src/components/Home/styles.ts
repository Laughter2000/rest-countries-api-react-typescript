import styled, { keyframes } from 'styled-components';
import { Search } from '@styled-icons/boxicons-regular/Search';
import { CheveronDown } from '@styled-icons/zondicons/CheveronDown';

const spin = keyframes`
    0% {transform: rotate(0deg);}
    100% {transform: rotate(360deg);}
`;
export const Loading = styled.div`
  border: 7px solid #f3f3f3;
  border-top: 7px solid hsl(200, 15%, 8%);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin: 40vmin auto;
  animation: ${spin} 2s linear infinite;
`;

export const SearchDrop = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

export const SearchDiv = styled.form`
  flex: 0 0 90%;
  background-color: ${({ theme }) => theme.element};
  margin: 30px auto;
  padding: 0 10px;
  border-radius: 5px;

  @media only screen and (min-width: 1200px) {
    flex: 0 0 40%;
    height: 100%;
    margin-left: 5%;
  }
`;

export const SearchIcon = styled(Search)`
  color: ${({ theme }) => theme.input};
`;

export const InputTab = styled.input`
  height: 70px;
  width: 95%;
  border: none;
  padding-left: 15px;
  color: ${({ theme }) => theme.input};
  background-color: ${({ theme }) => theme.element};
`;

export const SelectTab = styled.div`
  background-color: ${({ theme }) => theme.element};
  color: ${({ theme }) => theme.text};
  height: 70px;
  width: 50%;
  margin: 0 5%;
  padding: 0 20px;
  border-radius: 7px;
  font-weight: 600;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  flex: 0 0 60%;
`;

export const DownIcon = styled(CheveronDown)`
  color: ${({ theme }) => theme.text};
  padding-left: 5px;
`;

export const DropDownContainer = styled.div`
  flex: 0 0 100%;
  display: flex;
  flex-flow: row wrap;
  @media only screen and (min-width: 1200px) {
    flex: 0 0 30%;
    margin: 30px 0;
  }
`;

export const DropDownList = styled.ul<{ drop: boolean }>`
  background-color: ${({ theme }) => theme.element};
  color: ${({ theme }) => theme.text};
  border-radius: 7px;
  padding: ${({ drop }) => (drop ? '20px' : 0)};
  width: 60%;
  margin: 80px 5%;
  list-style-type: none;
  flex: 0 0 60%;
  height: ${({ drop }) => (drop ? '200px' : 0)};
  overflow: hidden;
  transition: height 0.5s ease-in-out;
  position: absolute;
  /* z-index: 9999; */
  @media only screen and (min-width: 1200px) {
    width: 17.5%;
    margin-left: 2%;
  }
`;

export const ListItem = styled.li`
  font-weight: 600;
  padding-bottom: 15px;
  cursor: pointer;
`;

export const CountryList = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  margin: 50px auto;
  justify-content: center;
  position: relative;
  z-index: -999;
`;

export const Card = styled.div`
  flex: 0 0 80%;
  height: 400px;
  border-radius: 10px;
  margin: 30px auto;
  background-color: ${({ theme }) => theme.element};
  position: relative;
  z-index: -999;

  @media only screen and (min-width: 1200px) {
    flex: 0 0 20%;
    margin: 30px 2%;
  }
`;

export const CardFlag = styled.img`
  width: 100%;
  height: 200px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  object-fit: cover;
`;
export const CardBody = styled.div`
  width: 100%;
  height: 200px;
  padding-left: 20px;
`;
export const CardCountry = styled.h2`
  font-weight: 800;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
`;
export const CardValue = styled.span`
  margin-left: 10px;
  color: ${({ theme }) => theme.text};
`;
export const CardKey = styled.p`
  font-weight: 800;
  color: ${({ theme }) => theme.text};
`;
