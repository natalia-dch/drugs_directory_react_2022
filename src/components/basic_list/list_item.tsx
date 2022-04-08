// @ts-nocheck
import React, {Component, useState} from 'react';
import "./basic_list.css";

function ListItem(props) {
    const [isShown, setIsShown] = useState(false);
    return(
      <div key={props.item.id} className="bigCard relativeCard"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}>
      {props.canDeleteItem && isShown &&

        <div className="deleteCard btnToClick" onClick={() => {
              props.deleteItem(props.item.id);
        }}><p>удалить</p></div>
      }
      <div className="drugCard"
      onClick={() => {
        props.handleClick(props.item);
  }} >
      <p className={props.isBold?"boldName notOverFl":"notOverFl"}>{props.item.name  ?? props.item.title}</p>
      </div>
      <hr/>
      </div>
    )
}
export default ListItem;
