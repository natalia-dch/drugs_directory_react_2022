// @ts-nocheck
import React, {Component, useState} from 'react';

function ListItem(props) {
    const [isShown, setIsShown] = useState(false);
    return(
      <div key={props.item.id} className="bigCard relativeCard"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}>
      {props.canDeleteItem && isShown &&
        <>
        <div className="deleteCard btnToClick" onClick={() => {
              props.deleteItem(props.item.id);
        }}><p>удалить</p></div>

        <div className="processCard btnToClick" onClick={() => {
              props.processItem(props.item.id);
        }}><p>отметить как обработанное</p></div>

        <div className="respondCard btnToClick" onClick={() => {
              props.composeEmail(props.item)
        }}><p>отметить как обработанное</p></div>
       </>
      }
      <div className="drugCard"
      onClick={() => {
        props.handleClick(props.item);
  }} >
      <p className={props.isBold?"boldName notOverFl":"notOverFl"}>
      {props.item.name}({props.item.email}) {(props.item.isMedic ? " - мед работник" : " - пациент")}
      </p>
      <p className={props.isBold?"boldName notOverFl":"notOverFl messageCard" }>
      {props.item.text}
      </p>
      </div>
      <hr/>
      </div>
    )
}
export default ListItem;
