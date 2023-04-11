'use client';

import { FC, useState, useEffect } from 'react';
import Select from 'react-select';
import { useLocations } from '../hooks/useLocations';

interface LocationSelectProps {}

// interface Option {
//   value: string;
//   label: string;
// }

const formatedOption = (option: any) => {
  let label = option.label;
  switch (option.type) {
    case 'city':
      label += `, ${option.state}, ${option.country}`;
      break;
    case 'state':
      label += `, ${option.country}`;
      break;
    default:
      break;
  }
  return <span>{label}</span>;
};

const LocationSelect: FC<LocationSelectProps> = ({}) => {
  const [userInput, setUserInput] = useState('');
  const { filterOptions } = useLocations();

  const handleInputChange = (newValue: string) => {
    setUserInput(newValue);
  };

  const options = filterOptions(userInput);

  return (
    <Select
      placeholder="Where to..."
      options={options}
      formatOptionLabel={formatedOption}
      onInputChange={handleInputChange}
      noOptionsMessage={() =>
        userInput.length > 0 ? 'No results' : 'Start typing...'
      }
    />
  );
};

export default LocationSelect;
