import axios from 'axios';
import { baseUrl } from '../api';

export const userUrl: string = baseUrl + '/api/user/';


export interface User {
  email: string;
  username: string;
  first_name?: string;
  last_name?: string;
}

export function getUser() {
  return new Promise<User>((resolve, reject) => {
    axios({
      method: 'get',
      url: userUrl + 'me/',
      withCredentials: true
    })
    .then(res => resolve(res.data))
    .catch(err => reject(err))
  });
}