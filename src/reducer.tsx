type Currencies = {
  code: string;
  name: string;
  symbol: string;
};

type Translation = {
  [key: string]: string;
};

type Languages = {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
};

type reginalBlocs = {
  acronym: string;
  name: string;
  otherAcronyms: string[];
  otherNames: string[];
};

export type Countries = {
  name: string;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital: string;
  altSpellings: string[];
  region: string;
  subregion: string;
  population: number;
  latlng: number[];
  demonym: string;
  area: number;
  gini: number;
  timezones: string[];
  borders: string[];
  nativeName: string;
  numericCode: string;
  currencies: Currencies[];
  languages: Languages[];
  translations: Translation;
  flag: string;
  regionalBlocs: reginalBlocs[];
  cioc: string;
};

export type Counter = {
  name: string;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital: string;
  altSpellings: string[];
  region: string;
  subregion: string;
  population: number;
  latlng: number[];
  demonym: string;
  area: number;
  gini: number;
  timezones: string[];
  borders: string[];
  nativeName: string;
  numericCode: string;
  currencies: Currencies[];
  languages: Languages[];
  translations: Translation;
  flag: string;
  regionalBlocs: reginalBlocs[];
  cioc: string;
};

export type State = {
  isDark: boolean;
  isLoading: boolean;
  countries: Countries[];
};

export type theme = {
  type: 'TOGGLE THEME';
};

export type addCountries = {
  type: 'ADD COUNTRIES';
  payload: Countries[];
};

export type Actions = theme | addCountries;

const GlobalReducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case 'TOGGLE THEME':
      return { ...state, isDark: !state.isDark };

    case 'ADD COUNTRIES':
      return { ...state, countries: action.payload, isLoading: false };

    default:
      neverReached(action);
  }
  return state;
};

const neverReached = (action: never) => {};

export default GlobalReducer;
