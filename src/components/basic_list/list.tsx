// @ts-nocheck
import React, {Component} from 'react';
import ListItem from './list_item';
import AddBtn from './add_btn';


function List(props) {
const elems = props.items.map((item)=>{
    return(
      <>
      <ListItem
      item={item}
      handleClick={() => props.handleClick(item)}
      deleteItem={() => props.deleteItem(id)} /></>
    )
  })
return(<div className="wrapper">
    <AddBtn value={"добавить "+ (props.name) } handleClick={props.addNew}/>
     {elems}
    </div>)
}
export default List;
