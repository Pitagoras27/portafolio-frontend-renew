import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { generateId } from "../../helpers";
import { useBlogStore } from '../../hooks';

export const CategorySelector = ({ label, options }) => {
  
  const { topicSelected, setTopicSelected } = useBlogStore();

  const handleChange = (event) => {
    setTopicSelected(event.target.value)
  };
  return (
    <>
      <FormControl variant="standard" fullWidth>
        <InputLabel id="demo-simple-select-autowidth-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={topicSelected}
          onChange={handleChange}
          label="Select"
        >
          <MenuItem value="">
            <em>All categories</em>
          </MenuItem>
          {
            options.map((item) => {
              const id = generateId();
              return (
                <MenuItem
                  key={ id }
                  id={ id }
                  value={ item.section }
                >
                  { item.section }
                </MenuItem>
              )
            })
          }
        </Select>
      </FormControl>
    </>
  );
}