// @ts-nocheck
import React, {Component} from 'react';
import ListItem from './list_item';
import "./message_list.css";


function List(props) {
const elems = props.items.map((item)=>{
    return(
      <>
      <ListItem
      item={item}
      handleClick={() => props.handleClick(item)}
      deleteItem={() => props.deleteItem(id)}
      processItem={() => props.processItem(id)}
      composeEmail={() => props.composeEmail(item)}
      canDeleteItem={true} /></>
    )
  })
return(<div className="wrapper">
     {elems}
    </div>)
}
export default List;
