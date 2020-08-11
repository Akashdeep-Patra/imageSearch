import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID YbttiN6trwEta3qkpUa6pO1klO71ujC97Y8WNNLf79U",
  },
});
