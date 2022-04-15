// @ts-nocheck
import React, {Component, useState} from 'react';
import Button from '@mui/material/Button';
import { InputAdornment, Input, Card, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function SearchForm(props) {

  return(
    <TextField className="drugInput"
    onKeyPress={(e) => {
 if (e.key === 'Enter') {
   props.handleSearch(e.target.value);
 }}}
       id="input-with-icon-adornment"
       value={props.input}
       onChange={() => props.handleChange(e.target.value)}
      label="поиск по названию" variant="standard"
       InputProps={{
   startAdornment: (
     <InputAdornment position="start">
                  <SearchIcon />
     </InputAdornment>
   ),
 }}/>
  )
}

export default SearchForm
