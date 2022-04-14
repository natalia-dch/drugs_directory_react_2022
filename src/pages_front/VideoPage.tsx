// @ts-nocheck
import React, {Component} from 'react';
import Grid from '@mui/material/Grid';
import './Video.css';
import useMediaQuery from '@mui/material/useMediaQuery';

const myVideos = ["https://www.youtube.com/embed/T3rqrPchOTo","https://www.youtube.com/embed/rZ3DiIc50nk",
"https://www.youtube.com/embed/wKraDSkt5IU", "https://www.youtube.com/embed/HIku1wIv9AM",
"https://www.youtube.com/embed/L6ueL6sUo6Y","https://www.youtube.com/embed/GdybYT-vffg"]

export default function Video (props) {
    const [videos, setVideos] = React.useState(myVideos);
    const isMedium = useMediaQuery('(max-width:850px)');
    const isMobile = useMediaQuery('(max-width:600px)');
    const videoCards = videos.map((src)=>{
      return(
        <Grid item xs={isMobile? 12 : (isMedium ? 6 : 4)}>
        <iframe width="100%" src={src}
        title="YouTube video player" frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen></iframe>
        </Grid>
      )
    })
    return(<div className="wrapperV">
    <Grid container spacing={2}>
       {videoCards}
    </Grid>
      </div>)
}
