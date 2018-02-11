import axios from "axios";
const api = "https://jsonplaceholder.typicode.com";

const userApi = {
  getAllUserMessages: () => {
    return axios.get(api + "/comments");
  }
};

export default userApi;
