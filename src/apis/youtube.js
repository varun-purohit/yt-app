import axios from "axios";

const KEY = "AIzaSyCRWMpZmajzGe513OIt5Iin5hWDtUUw02A";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    type: "video",
  },
});
