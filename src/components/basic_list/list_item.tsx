// @ts-nocheck
import React, {Component, useState} from 'react';
import "./basic_list.css";
import useMediaQuery from '@mui/material/useMediaQuery';

function ListItem(props) {
  const isMedium = useMediaQuery('(max-width:850px)');
  const isMobile = useMediaQuery('(max-width:600px)');
    const [isShown, setIsShown] = useState(false);
    return(
      <div key={props.item.id} className="bigCard relativeCard"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}>
      {props.canDeleteItem && (isShown || isMobile) &&

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
