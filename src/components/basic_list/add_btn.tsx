// @ts-nocheck
import React, {Component, useState} from 'react';

function AddBtn(props) {
    return(
      <div key={-1} className="bigCard relativeCard">
      <div className="drugCard"
      onClick={() => {
        props.handleClick();
  }} >
      <p className={"boldName notOverFl"}>{props.value}</p>
      </div>
      <hr/>
      </div>
    )
}
export default AddBtn;
