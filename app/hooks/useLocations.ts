'use client';

import { Country, State, City } from 'country-state-city';

export const useLocations = () => {
  const formatedCountries = Country.getAllCountries().map(country => ({
    value: country.isoCode,
    label: country.name,
    flag: country.flag,
    latlng: country.latitude + ',' + country.longitude,
    type: 'country',
  }));
  const formatedStates = State.getAllStates().map(state => ({
    value: state.isoCode,
    label: state.name,
    country: state.countryCode,
    latlng: state.latitude + ',' + state.longitude,
    type: 'state',
  }));
  const formatedCities = City.getAllCities().map(city => ({
    value: city.name,
    label: city.name,
    state: city.stateCode,
    country: city.countryCode,
    latlng: city.latitude + ',' + city.longitude,
    type: 'city',
  }));

  const getAll = [...formatedCountries, ...formatedStates, ...formatedCities];

  const filterOptions = (inputValue: string) => {
    return getAll
      .filter(option =>
        inputValue === ''
          ? null
          : option.label.toLowerCase().includes(inputValue.toLowerCase())
      )
      .slice(0, 10);
  };

  return { filterOptions };
};
