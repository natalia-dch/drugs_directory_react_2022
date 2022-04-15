// @ts-nocheck
import React, {Component} from 'react';
import Checkbox from '@mui/material/Checkbox';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import './feedback.css';


export default function CheckBx(props) {
return(
  <FormControl>
    <FormLabel id="demo-radio-buttons-group-label">{props.label}</FormLabel>
    <FormControlLabel control={<Checkbox style ={{color: "#07458d"}} onClick={(e)=> props.handleChange(0,e.target.checked)} checked={props.v1}/>} label={props.opt1} />
    <FormControlLabel control={<Checkbox style ={{color: "#07458d"}} onClick={(e)=>props.handleChange(1,e.target.checked)} checked={props.v2}/>} label={props.opt2} />
  </FormControl>
)
}
