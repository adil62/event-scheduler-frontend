/* eslint-disable import/no-anonymous-default-export */
import axios from ".";

const create = (data) => axios.post("/event", data);
const show = () => axios.get("/event");

export default { create, show };
