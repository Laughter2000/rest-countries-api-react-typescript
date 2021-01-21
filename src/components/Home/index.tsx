import React, { useState, useContext } from 'react';
import Context from '../../context';
import { NavLink } from 'react-router-dom';
import {
  Loading,
  SearchDrop,
  SearchDiv,
  SearchIcon,
  InputTab,
  DownIcon,
  DropDownContainer,
  DropDownList,
  ListItem,
  SelectTab,
  Card,
  CardBody,
  CardCountry,
  CardValue,
  CardKey,
  CardFlag,
  CountryList,
} from './styles';
const Home = () => {
  const { state } = useContext(Context);
  const [drop, setDrop] = useState(false);
  const [filter, setFilter] = useState<string | null>('');
  const [countryName, setCountryName] = useState('');

  //eslint-disable-next-line
  const countries = state.countries.filter((country) => {
    if (filter === '') {
      return true;
    }
    if (country.region === filter) {
      return true;
    }

    return false;
  });
  return (
    <>
      <SearchDrop>
        <SearchDiv
          onSubmit={(e) => {
            e.preventDefault();
            console.log(countryName);
          }}
        >
          <SearchIcon size="15" />
          <InputTab
            placeholder="Search for a country..."
            value={countryName}
            onChange={(e) => setCountryName(e.currentTarget.value)}
          ></InputTab>
        </SearchDiv>

        <DropDownContainer onClick={() => setDrop(!drop)}>
          <SelectTab onClick={() => setDrop(!drop)}>
            {filter ? filter : 'Filter By Region'}
            <DownIcon size="20" onClick={() => setDrop(!drop)} />
          </SelectTab>
          <DropDownList drop={drop}>
            <ListItem onClick={(e) => setFilter(e.currentTarget.textContent)}>Africa</ListItem>
            <ListItem onClick={(e) => setFilter(e.currentTarget.textContent)}>Americas</ListItem>
            <ListItem onClick={(e) => setFilter(e.currentTarget.textContent)}>Asia</ListItem>
            <ListItem onClick={(e) => setFilter(e.currentTarget.textContent)}>Europe</ListItem>
            <ListItem onClick={(e) => setFilter(e.currentTarget.textContent)}>Oceania</ListItem>
          </DropDownList>
        </DropDownContainer>
      </SearchDrop>

      {state.isLoading ? (
        <Loading />
      ) : (
        <>
          <NavLink to={`/details/${countries[0].name.replace(' ', '-')}`}>
            <CardCountry>{countries[0].name}</CardCountry>
          </NavLink>

          <CountryList>
            {countries
              .filter(
                (country) =>
                  country.name.toLowerCase().includes(countryName.toLowerCase()) ||
                  countryName === ''
              )
              .map((country) => (
                <Card key={country.name}>
                  <CardFlag src={country.flag} alt={`${country.name} flag`} />
                  <CardBody>
                    <NavLink to={`/details/${country.name.replace(' ', '-')}`}>
                      <CardCountry>{country.name}</CardCountry>
                    </NavLink>
                    <CardKey>
                      Population:{' '}
                      <CardValue>{country.population.toLocaleString('en-US')}</CardValue>
                    </CardKey>
                    <CardKey>
                      Region: <CardValue>{country.region}</CardValue>
                    </CardKey>
                    <CardKey>
                      Capital: <CardValue>{country.capital}</CardValue>
                    </CardKey>
                  </CardBody>
                </Card>
              ))}
          </CountryList>
        </>
      )}
      {/* <Route path={`details/:countryName`}>
        <Detail />
      </Route> */}
    </>
  );
};

export default Home;
