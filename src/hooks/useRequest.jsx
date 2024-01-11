import toast from 'react-hot-toast';
import { useCallback, useContext } from 'react';
import { AuthContext } from '../context/Auth';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const useRequest = () => {
  const [state, dispatch] = useContext(AuthContext);

  const request = useCallback(
    async ({
      baseurl = BASE_URL,
      url = '',
      method = 'GET',
      body = null,
      headers = {},
      includeToken = true,
    }) => {
      try {
        if (body) {
          body = JSON.stringify(body);
          headers['Content-Type'] = 'application/json';
        }
        if (includeToken) {
          headers['Authorization'] = `Bearer ${state.token}`;
        }
        const response = await fetch(`${baseurl}${url}`, {
          method: method,
          headers,
          body,
        });

        const data = await response.json();

        if (data.status === 401) {
          const refreshToken = await fetch(`${BASE_URL}/auth/refreshToken`, {
            method: 'GET',
            headers: {
              isRefreshedToken: true,
              Authorization: `Bearer ${state.token}`,
            },
          });
          const refreshData = await refreshToken.json();
          dispatch({ type: 'login', payload: refreshData?.meta?.token });
          window.location.reload();

          if (!refreshData.ok) {
            throw new Error(
              data.message || 'Oops! Something went wrong with refresh token!'
            );
          }
        }
        return data;
      } catch (error) {
        toast.error('Something went wrong');
      }
    },
    [state, dispatch]
  );
  return { request };
};

export default useRequest;
