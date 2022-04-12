import React from "react";
import VideoItem from "./VideoItem";

//Using propsd=
// const VideoList = (props) => {
//   return <div>{props.videos.length}</div>;
// };

//Using destructuring
const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });
  //renderedList is result of mapping over the videos array
  //in video prop we are passing the video that we are currently iterating over
  //onVideoSelect is new prop declared and in which onVideoSelect is been called

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
