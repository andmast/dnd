import axios from "axios";
const instance = axios.create({
  baseURL: "https://www.dnd5eapi.co/api/",
});
export default instance;
