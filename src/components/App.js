//App is a class based component because it hold all of the different states for our application
import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("super cars");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);
  //

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      {/* onFormSubmit is any name not a specific event name and also it is prop*/}
      {/* I have {this.state.videos.length} videos. */}

      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            {/* <VideoList onVideoSelect={(video)=> setSelectedVideo(video)} videos={videos} /> */}
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
            {/* for one parameter to be passed it can be directly also written
            this video object is that is fetchecd from youtube api
            console.log("From the app!", video); */}
          </div>
        </div>
      </div>

      {/* this.state.videos is coming from state, array to display vidoes and the term
      videos ater VideoList is the prop  */}
    </div>
  );
};

export default App;

// term bascially here means search term
// we make input from uncontrolled to controlled search term inside of a component not in the dom

//child to parent always callback is used
