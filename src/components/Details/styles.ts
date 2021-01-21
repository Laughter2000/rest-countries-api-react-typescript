import styled from 'styled-components';
import { ArrowBack } from '@styled-icons/boxicons-regular/ArrowBack';

export const DetailDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  font-size: 20px;

  @media only screen and (min-width: 1200px) {
    flex-flow: row nowrap;
    margin: 150px 0;
    max-width: 80%;
    justify-content: space-between;
  }
`;

export const ArrowBackIcon = styled(ArrowBack)`
  margin-right: 5px;
`;

export const Button = styled.button`
  margin: 70px 5%;
  height: 50px;
  padding: 5px 15px;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.element};
  border: none;
  box-shadow: 2px 5px 30px ${({ theme }) => theme.element};
  display: flex;
  align-items: center;
  font-size: 18px;
`;

export const DetailTop = styled.div`
  flex: 0 0 60%;
  margin: 30px 0;

  @media only screen and (min-width: 1200px) {
    flex: 0 0 40%;
    margin: 0 5%;
  }
`;

export const DetailFlag = styled.img`
  max-width: 80vw;

  @media only screen and (min-width: 1200px) {
    max-width: 40vw;
    margin: 0 5%;
  }
`;

export const DetailBody = styled.div`
  flex: 0 0 80%;
  display: flex;
  flex-flow: row wrap;

  @media only screen and (min-width: 1200px) {
    flex: 0 0 50%;
    flex-flow: row wrap;
    margin-left: 10%;
  }
`;

export const DetailBody1 = styled.div`
  flex: 0 0 80%;

  @media only screen and (min-width: 1200px) {
    flex: 0 0 50%;
  }
`;

export const DetailBody2 = styled.div`
  flex: 0 0 50%;
`;

export const DetailCountry = styled.h1`
  font-weight: 800;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  flex: 0 0 100%;
`;
export const DetailValue = styled.span`
  font-weight: 300;
  margin-left: 10px;
  color: ${({ theme }) => theme.text};
`;
export const DetailKey = styled.p`
  font-weight: 600;
  color: ${({ theme }) => theme.text};
`;

export const DetailBody3 = styled.div`
  flex: 0 0 80%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  align-content: center;

  @media only screen and (min-width: 1200px) {
    flex: 0 0 100%;
    flex-flow: row nowrap;
    margin: 30px 0;
  }
`;

export const BorderTitle = styled.p`
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  flex: 0 0 100%;

  @media only screen and (min-width: 1200px) {
    flex: 0 0 30%;
    margin: 0;
  }
`;

export const BorderList = styled.div`
  flex: 0 0 100%;
  display: flex;
  flex-flow: row wrap;

  @media only screen and (min-width: 1200px) {
    flex: 0 0 68%;
    margin: 0;
  }
`;

export const BorderButton = styled(Button)`
  /* display: inline-block !important; */
  margin: 0 1% 15px;
  flex: 0 0 5%;
  padding: 3px 10px;
`;
