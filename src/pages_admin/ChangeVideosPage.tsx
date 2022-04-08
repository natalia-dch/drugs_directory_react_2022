// @ts-nocheck
import React, { useState, Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import Grid from '@mui/material/Grid';
import './Video.css';

function VideoCard(props) {
  const [isShown, setIsShown] = useState(false);
  return (
    <Grid className="videoContainer" id={props.id}
     onMouseEnter={() => setIsShown(true)}
     onMouseLeave={() => setIsShown(false)}
     item xs={4}>
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

  function validateForm() {
    return link.length > 0;
  }

  return (
    <div>
      <Form onSubmit={props.handleSubmit}>
        <Form.Group size="lg" class="form-inline" controlId="link">
          <Form.Control
            autoFocus
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Добавить видео
        </Button>
      </Form>
    </div>
  );
}


class ChangeVideos extends Component {


  constructor(props) {
  super(props);
    this.state = {
      videos: ["https://www.youtube.com/embed/T3rqrPchOTo","https://www.youtube.com/embed/rZ3DiIc50nk",
      "https://www.youtube.com/embed/wKraDSkt5IU", "https://www.youtube.com/embed/HIku1wIv9AM",
    "https://www.youtube.com/embed/L6ueL6sUo6Y","https://www.youtube.com/embed/GdybYT-vffg"]
    }
  }
  addVideo(link){
    alert("added"+link)
    this.setState({
    videos: this.state.videos.concat([link])
  })
  }
  deleteVideo(index){
    alert("deleted"+index)
    this.setState({
    videos: this.state.videos.splice(index, 1), //delete
  })
  }

  render(){
    const videoCards = this.state.videos.map((src,id)=>{
      return(
<VideoCard src={src} id={id} delete={this.deleteVideo} />
      )
    })
    return(<div className="wrapperV">
    <AddVideo handleSubmit={this.addVideo} />
    <Grid container spacing={2}>
       {videoCards}
    </Grid>
      </div>)
  }
}

export default ChangeVideos;
