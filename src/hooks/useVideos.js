import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
    //this function is made for default search when the component first loads
  }, [defaultSearchTerm]);

  const search = async (term) => {
    //   console.log(term);  This function give us what the search term is form Search term and then refer to api
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items);
  };

  return [videos, search];
};

export default useVideos;
