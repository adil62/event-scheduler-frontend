/* eslint-disable import/no-anonymous-default-export */
import axios from "./";

const register = (data) => axios.post("/auth/register", data);

const login = (data) => axios.post("/auth/login", data);

export default { register, login };
