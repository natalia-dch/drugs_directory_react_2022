// @ts-nocheck
import React, {Component} from 'react';
import RadioBtn from './radioBtn';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';


function FeedbackFilter(props) {
  const [value1, setValue1] = React.useState(-1);
  const [value2, setValue2] = React.useState(-1);
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('Choose wisely');

  const handleRadioChange = () => {
    setHelperText(' ');
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.filter(value1,value2);
    if(value1 != -1 && value2 != -1){
      setHelperText('Please select an option.');
      setError(true);
    }
  };
return(
  <form onSubmit={handleSubmit}>
  <FormControl sx={{ m: 3 }} error={error} variant="standard">
  <RadioBtn handleChange={(value)=>{setValue1(value); handleRadioChange()}} label="тип пользователя" opt1="пациент" opt2="мед работник"/>
  <RadioBtn handleChange={(value)=>{setValue1(value); handleRadioChange()}} label="тип сообщения" opt1="необработанное" opt2="обработанное"/>
    <FormHelperText>{helperText}</FormHelperText>
    <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
      Отфильтровать
    </Button>
  </FormControl>
</form>
  )
}
export default FeedbackFilter;
