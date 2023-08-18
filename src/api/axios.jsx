import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",

  params: {
    api_key: "67f35f46f6bb3dfef710c57b4640323c",
    language: "ko-KR",
  },
});

export default instance;
