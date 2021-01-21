import React, { useContext } from 'react';
import ContextType from '../../context';

import {
  DetailDiv,
  Button,
  DetailFlag,
  DetailKey,
  DetailValue,
  DetailCountry,
  DetailBody,
  DetailBody1,
  DetailBody2,
  DetailBody3,
  ArrowBackIcon,
  DetailTop,
  BorderTitle,
  BorderList,
  BorderButton,
} from './styles';
import { Loading } from '../Home/styles';
import { Link, useParams } from 'react-router-dom';

type currencies = { code: string; name: string; symbol: string };
type languages = { iso639_1: string; iso639_2: string; name: string; nativeName: string };

type Props = {
  items: (currencies | languages)[];
};

const ListToString = ({ items }: Props) => {
  var stringList: string[] = [];
  items.map((item) => stringList.push(item.name));
  return <DetailValue>{stringList.join(', ')}</DetailValue>;
};

const Detail = () => {
  const { name } = useParams<{ name: string }>();

  const { state } = useContext(ContextType);

  const country = state.countries.filter(
    (countries) => countries.name.toLowerCase() === name.toLowerCase()
  );

  const BorderCountries = (borders: string[]) => {
    var borderCountries: string[] = [];
    for (var i = 0; i < borders.length; i++) {
      for (var j = 0; j < state.countries.length; j++) {
        if (state.countries[j].alpha3Code === borders[i]) {
          borderCountries.push(state.countries[j].name);
        }
      }
    }
    return borderCountries;
  };
  return (
    <>
      <Link to="/">
        <Button>
          <ArrowBackIcon size="20" />
          Back
        </Button>
      </Link>
      {state.isLoading ? (
        <Loading />
      ) : (
        <DetailDiv>
          <DetailTop>
            <DetailFlag src={country[0].flag} alt="country-flag" />
          </DetailTop>

          <DetailBody>
            <DetailCountry>{country[0].name}</DetailCountry>
            <DetailBody1>
              <DetailKey>
                Native Name: <DetailValue>{country[0].nativeName}</DetailValue>
              </DetailKey>
              <DetailKey>
                Population: <DetailValue>{country[0].population.toLocaleString('us')}</DetailValue>
              </DetailKey>
              <DetailKey>
                Region: <DetailValue>{country[0].region}</DetailValue>
              </DetailKey>
              <DetailKey>
                Sub Region: <DetailValue>{country[0].subregion}</DetailValue>
              </DetailKey>
              <DetailKey>
                Capital: <DetailValue>{country[0].capital}</DetailValue>
              </DetailKey>
            </DetailBody1>

            <DetailBody2>
              <DetailKey>
                Top Level Domain: <DetailValue>{country[0].topLevelDomain[0]}</DetailValue>
              </DetailKey>

              <DetailKey>
                Currencies:
                <ListToString items={country[0].currencies} />
              </DetailKey>
              <DetailKey>
                Languages:
                <ListToString items={country[0].languages} />
              </DetailKey>
            </DetailBody2>

            <DetailBody3>
              <BorderTitle>Border Countries:</BorderTitle>
              <BorderList>
                {BorderCountries(country[0].borders).map((border) => (
                  <BorderButton key={border}>{border}</BorderButton>
                ))}
              </BorderList>
            </DetailBody3>
          </DetailBody>
        </DetailDiv>
      )}
    </>
  );
};

export default Detail;
