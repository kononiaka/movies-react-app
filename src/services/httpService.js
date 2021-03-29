import axios from "axios";
import logger from "./logService";
import { toast } from "react-toastify";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    logger.log(error);
    toast.error("An unexpected error has occured!");
  }
  return Promise.reject(error);
});

function setJwt(jwt) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  get: axios.get,
  put: axios.put,
  delete: axios.delete,
  post: axios.post,
  setJwt,
};
