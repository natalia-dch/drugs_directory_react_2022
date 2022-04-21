// @ts-nocheck
import React, { useState, Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import Grid from '@mui/material/Grid';
import './Video.css';
import VideoForm from '../components/dialogs/videoForm';
import useMediaQuery from '@mui/material/useMediaQuery';
import FormHelperText from '@mui/material/FormHelperText';

function VideoCard(props) {
  const [isShown, setIsShown] = useState(false);
  const isMedium = useMediaQuery('(max-width:850px)');
  const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <Grid className="videoContainer" id={props.id}
     onMouseEnter={() => setIsShown(true)}
     onMouseLeave={() => setIsShown(false)}
     item xs={isMobile? 12 : (isMedium ? 6 : 4)}>
     {(isShown || isMobile) && (<p className="deleteBtnV" onClick={()=> props.delete(props.id)}>удалить видео?</p>)}
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
      <Grid container spacing={2}>
      <Grid item xs={isMedium? 12 : 9}>
        <Form.Group size="lg" className="form-inline" controlId="link">
          <Form.Control
            className="addVidForm"
            autoFocus
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </Form.Group>
        </Grid>
        <Grid item xs={isMedium? 12 : 3}>
        <Button variant="flat" size="lg" onClick={() => props.handleSubmit(link)}>Добавить видео</Button>
        </Grid>
        </Grid>
        <FormHelperText>{props.helperText}</FormHelperText>
        <hr/>
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
const [helperText, setHelperText] = React.useState("");

const addVideo = (link1) => {
     console.log("adding"+link1)
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = link1.match(regExp);
    if (match && match[7].length == 11) {
      console.log("extracted"+match[7])
      setLink(match[7]);
      setOpen(true);
    } else {
      console.log("wrong")
      setHelperText("Неправильная ссылка")
    }
    // setLink(link1);

  }
  function extractVideoID(url) {

  }

const handleClose = (item,isSuccess) => {
  setOpen(false);
  console.log(item);
  if(isSuccess){
  setItems([...items,item])
  }

};

const deleteVideo = (index) => {
  console.log("deleting",index)
  const newList = [].concat(items) // Clone array with concat or slice(0)
  newList.splice(index, 1);
  setItems(newList);
  }

const videos = items.map((src,id)=>{
      return(
  <VideoCard src={src} key={id} id={id} delete={deleteVideo} />
      )
    });
return(<div className="wrapperV">
    <VideoForm isOpen={open} item={link} handleClose={handleClose}/>
    <AddVideo helperText={helperText} handleSubmit={addVideo} />
    <Grid container spacing={2}>
       {videos}
    </Grid>
      </div>)
}
