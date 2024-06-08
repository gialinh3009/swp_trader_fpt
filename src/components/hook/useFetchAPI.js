import axios from "axios";
import { useAuth } from "./useAuth";

export const useFetchAPI = (method = "get", url = "/", data = {}) => {
  const { userInformation } = useAuth();
  return async () => {
    try {
      const headers = {};

      if (userInformation && userInformation.token) {
        headers["Authorization"] = `Bearer ${userInformation.token}`;
      }
      const request = await axios({ method, url, data, headers });
      const response = request.data;
      return response;
    } catch (e) {
      console.error(e);
    }
  };
};
