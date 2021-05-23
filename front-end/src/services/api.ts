import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_WEB,
});

const signOut = () => {
  localStorage.removeItem('@Aprendize:token');
  document.location.href = '/';
};

api.interceptors.response.use(
  (response) => {
    if (response.data.errors) {
      const error = response.data.errors[0];
      if (error.extensions.code === 'AUTH_NOT_AUTHENTICATED') {
        signOut();
      }
    }
    return response;
  },
  (error: Error) => {
    if (error.message === 'Network Error') {
      signOut();
    }
    return Promise.reject(error);
  },
);

export { api };
