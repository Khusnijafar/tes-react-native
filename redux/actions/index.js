import Axios from 'axios';

import {GET_USER} from '../types';

const axios = Axios.create({
  timeout: 1000,
});

export const getUserData = () => {
  return dispatch => {
    return new Promise(async (resolve, reject) => {
      try {
        let data = await axios({
          method: 'GET',
          url: 'http://jsonplaceholder.typicode.com/users',
        });
        console.log(data, 'data');
        dispatch({
          type: GET_USER,
          payload: data.data,
        });
        resolve(data.data);
      } catch (error) {
        reject(error);
        console.log(error, 'err');
      }
    });
  };
};
