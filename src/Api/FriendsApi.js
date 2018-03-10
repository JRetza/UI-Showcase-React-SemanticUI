import axios from "axios";
const api = "https://jsonplaceholder.typicode.com";

const friendsApi = {
  getAllFriends: () => {
    return axios.get(api + "/users");
  }
};

export default friendsApi;
