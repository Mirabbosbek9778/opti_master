import { useCallback, useContext } from 'react';
import { AuthContext } from '../context/Auth';
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const useAxios = () => {
  const [state] = useContext(AuthContext);

  const request = useCallback(
    async ({
      baseUrl = BASE_URL,
      url = '',
      method = 'get',
      data = null,
      headers = {},
      includeToken = true,
    }) => {
      try {
        if (data) {
          headers['Content-Type'] = 'application/json';
        }
        if (includeToken) {
          headers['Authorization'] = state.token;
        }
        const response = await axios({
          method,
          url: `${baseUrl}${url}`,
          data,
          headers,
        });

        return response?.data;
      } catch (error) {
        const { statusCode, message } = error?.response?.data ?? {};
        if (statusCode > 299) {
          console.log(message);
        }
      }
    }
  );
  return { request };
};

export default useAxios;
