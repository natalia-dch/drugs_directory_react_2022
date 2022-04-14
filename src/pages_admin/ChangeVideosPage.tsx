// @ts-nocheck
import React, { useState, Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import Grid from '@mui/material/Grid';
import './Video.css';
import VideoForm from '../components/dialogs/videoForm';
import useMediaQuery from '@mui/material/useMediaQuery';

function VideoCard(props) {
  const [isShown, setIsShown] = useState(false);
  const isMedium = useMediaQuery('(max-width:850px)');
  const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <Grid className="videoContainer" id={props.id}
     onMouseEnter={() => setIsShown(true)}
     onMouseLeave={() => setIsShown(false)}
     item xs={isMobile? 12 : (isMedium ? 6 : 4)}>
     {isShown && (<p className="deleteBtnV" onClick={()=> props.delete(props.id)}>удалить видео?</p>)}
    <iframe width="100%" src={props.src}
    title="YouTube video player" frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen></iframe>
    </Grid>
  )
}

function AddVideo(props) {
const [link, setLink] = useState("");
const isMedium = useMediaQuery('(max-width:850px)');
const isMobile = useMediaQuery('(max-width:600px)');

const validateForm = () => {
    return link.length > 0;
  }

  return (
    <div>
      <Form onSubmit={props.handleSubmit}>
        <Form.Group size="lg" className="form-inline" controlId="link">
          <Form.Control
            autoFocus
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </Form.Group>
        <Button size="lg" type="submit">Добавить видео</Button>
      </Form>
    </div>
  );
}
const myVideos = ["https://www.youtube.com/embed/T3rqrPchOTo","https://www.youtube.com/embed/rZ3DiIc50nk",
"https://www.youtube.com/embed/wKraDSkt5IU",
"https://www.youtube.com/embed/L6ueL6sUo6Y","https://www.youtube.com/embed/GdybYT-vffg"];

export default function ChangeVideos () {
const [items, setItems] = React.useState(myVideos);
const [open, setOpen] = React.useState(false);
const [link,setLink] = React.useState(myVideos[0]);

const addVideo = (link1) => {
    console.log("adding"+link1)
    // setLink(link1);
    setOpen(true);
  }

const handleClose = (item,isSuccess) => {
  setOpen(false);
  console.log(item);
  if(isSuccess){
  setItems([...items,item])
  }

};

const deleteVideo = (index) => {
  setOpen(true);
  setLink(items[0]);
  console.log("deleting",index)
  const newList = [].concat(items) // Clone array with concat or slice(0)
  newList.splice(index, 1);
  setItems(newList);
  }

const videos = items.map((src,id)=>{
      return(
<VideoCard src={src} id={id} delete={deleteVideo} />
      )
    });
return(<div className="wrapperV">
    <VideoForm isOpen={open} item={link} handleClose={handleClose}/>
    <AddVideo handleSubmit={addVideo} />
    <Grid container spacing={2}>
       {videos}
    </Grid>
      </div>)
}
