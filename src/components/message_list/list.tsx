// @ts-nocheck
import React, {Component} from 'react';
import ListItem from './list_item';
import "./message_list.css";


function List(props) {
const elems = props.items.map((item, id)=>{
    return(
      <ListItem
      item={item}
      key={id}
      handleClick={() => {}}
      deleteItem={() => props.deleteItem(item.id)}
      processItem={() => props.processItem(item.id)}
      composeEmail={() => props.composeEmail(item)}
      canDeleteItem={true} />
    )
  })
return(<div className="wrapper">
     {elems}
    </div>)
}
export default List;
