import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';

export const CategorySelector = ({ label, options }) => {
  const [ optionSelected, setOptionSelected ] = useState('');

  const handleChange = (event) => {
    setOptionSelected(event.target.value);
  };

  return (
    <>
      <FormControl variant="standard" fullWidth>
        <InputLabel id="demo-simple-select-autowidth-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={optionSelected}
          onChange={handleChange}
          label="Select"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {
            options.map((item) => (
              <MenuItem
                key={ item.id }
                id={ item.id }
                value={ item.id }
              >
                { item.type }
              </MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </>
  );
}