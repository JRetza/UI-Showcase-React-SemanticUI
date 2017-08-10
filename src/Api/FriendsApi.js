import axios from "axios";
const api = "http://rest.learncode.academy/api/learncode";

const friendsApi = {
  getAllFriends: () => {
    return axios.get(api + "/friends");
  }
};

export default friendsApi;
