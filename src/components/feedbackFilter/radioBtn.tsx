// @ts-nocheck
import React, {Component} from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';


function RadioBtn(props) {
return(
  <FormControl>
    <FormLabel id="demo-radio-buttons-group-label">{props.label}</FormLabel>
    <RadioGroup
      aria-labelledby="demo-radio-buttons-group-label"
      defaultValue={props.opt1}
      name="radio-buttons-group"
      onChange={(event) => {props.handleChange(event.target.value)}}
    >
      <FormControlLabel value={props.opt1} control={<Radio />} label={props.opt1} />
      <FormControlLabel value={props.opt2} control={<Radio />} label={props.opt2} />
    </RadioGroup>
  </FormControl>
)
}
export default RadioBtn;
