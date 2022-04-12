import React from "react";
import VideoItem from "./VideoItem";

//using props
// const VideoDetail = (props) =>{
//     return <div>{props.video.snippet.title}</div>
// }

//using destructuring
const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
  //video.snippet.title stores title
};

export default VideoDetail;
