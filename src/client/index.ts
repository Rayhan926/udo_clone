import axios from "axios";

const client = axios.create({
  baseURL: "https://dev.askudo.de",
  params: {
    format: "json",
  },
  headers: {
    Accept: "application/json",
  },
});

export default client;
