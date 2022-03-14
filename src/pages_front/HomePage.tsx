// @ts-nocheck
import React, {Component} from 'react';
import Slider from '../components/slider/Slider';
import slider1 from '../shared/slider1.jpg'
import slider2 from '../shared/slider2.jpg'
import slider3 from '../shared/slider3.jpg'

const images = [slider1, slider2, slider3];

class Home extends Component {
  render(){
    return(<div><Slider imgSrcs={images}/></div>)
  }
}

export default Home;
