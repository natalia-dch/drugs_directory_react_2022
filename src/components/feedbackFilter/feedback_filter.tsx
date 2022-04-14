// @ts-nocheck
import React, {Component} from 'react';
import CheckBx from './checkBox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';


function FeedbackFilter(props) {
  const [values, setValues] = React.useState([true,true,true,true]);
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState("");

  const handleRadioChange = () => {
    setHelperText(' ');
    setError(false);
  };
  const handleChange = (n,value) => {
    console.log(n,value);
    console.log(n+1-2*(n%2),values[n+1-2*(n%2)]);
    if(!value && !props.filter[n+1-2*(n%2)]){
      setHelperText('Ошибка');
      setError(true);
    }
    else{
      props.changeFilter(n,value);
    setHelperText('');
    }
  };
return(
  <form>
  <FormControl sx={{ m: 3 }} width="100%" error={error} variant="standard">
  <Grid container spacing={2}>
  <Grid item xs={6}>
  <CheckBx  v1={props.filter[0]} v2={props.filter[1]} handleChange={(i,value)=>handleChange(i,value)} label="тип пользователя" opt1="пациент" opt2="мед работник"/>
  </Grid>
  <Grid item xs={6}>
  <CheckBx  v1={props.filter[2]} v2={props.filter[3]} handleChange={(i,value)=>handleChange(2+i,value)} label="тип сообщения" opt1="необработанное" opt2="обработанное"/>
  </Grid>
  </Grid>
    <FormHelperText>{helperText}</FormHelperText>
  </FormControl>
</form>
  )
}
export default FeedbackFilter;
