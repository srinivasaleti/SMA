import { TextField } from '@material-ui/core';
import * as React from 'react';
import { useState } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from 'axios'
import { config } from '../config';

export const SearchBar = (props) => {
  const [options, setOptions] = useState([])

  const getSearchOptions = async (text) => {
    const url = `${config.url}/search?text=${text}`
    return (await axios.get(url)).data
  }

  const onSearchChange = async (e) => {
    const text = e.target.value;
    if (text.length > 2) {
      const data = (await getSearchOptions(text)).data
      setOptions(data?.stocks || [])
    }
  }


  return (
    <div>
      <Autocomplete
        id="grouped-demo"
        options={options}
        getOptionLabel={(option) => option.ticker || undefined}
        onChange={(e, val) => {
          props.onChange(val.sid)
        }}

        style={{ width: 300 }}
        renderInput={(params) => <TextField {...params}
          onChange={onSearchChange}
          label="Combo box" variant="outlined" />}
      />
    </div>
  );
}