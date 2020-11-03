import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-fdbc0.cloudfunctions.net/api", // The API (Cloud function) url
  // http://localhost:5001/clone-fdbc0/us-central1/api   [Can be use for debugging]
});


export default instance;
