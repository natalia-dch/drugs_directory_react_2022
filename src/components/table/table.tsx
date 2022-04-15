// @ts-nocheck
import React, {Component} from 'react';
import './table.css';

export default function Table(props) {
const data = props.data.map ((row, rowInd) => {
  return(
    <tr key={rowInd}>
    {row.map((el, index) => {return(<td key={index}>{el}</td>)})}
    </tr>
  )
})
  return(
    <table>
      {props.title &&
        <tr>
        {props.title.map ((el,index) => {
        return(<th key={index} >{el}</th>)
      })}
      </tr>}
      {data}
    </table>
  )
}
