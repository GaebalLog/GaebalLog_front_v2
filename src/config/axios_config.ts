import axios from "axios";

import { serverURL } from "./env_config";

export const instance = axios.create({
  baseURL: serverURL,
  withCredentials: true,
});
