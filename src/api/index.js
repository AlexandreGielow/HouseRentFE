import axios from 'axios';
import Cookies from 'js-cookie';

import {
  generateAccessToken,
  generateRefreshToken,
  verifyToken,
  withAuth,
} from './helpers';


import { getUser } from './users';

// Creates a base axios instance
const api = axios.create({
  baseURL: 'https://localhost:7023/api/v1/',
});



// Gets the current user
axios.onGet('/api/me').reply(
  withAuth(async (config) => {
    const accessToken = config.headers.Authorization?.split(' ')[1];

    // Verifies access token and returns payload
    const accessTokenPayload = await verifyToken(accessToken, {
      returnPayload: true,
    });

    if (!accessTokenPayload) {
      return [403, { message: 'Unauthorized' }];
    }

    // Verifies refresh token and returns payload
    const refreshTokenPayload = await verifyToken(accessTokenPayload.data, {
      returnPayload: true,
    });

    if (!refreshTokenPayload) {
      return [403, { message: 'Unauthorized' }];
    }

    // Returns access token and user
    return [
      200,
      {
        accessToken: true ? accessToken : null,
      },
    ];
  }),
);


// Signs the user in
adapter.onPost('/api/signin').reply(async (config) => {
  const { data } = config;
  const user = getUser(JSON.parse(data));

  if (user) {
    // Creates a refresh token based on the user's id
    const refreshToken = await generateRefreshToken(user.id);

    // Since there is no backend, token is stored in a normal cookie
    // Otherwise it would be stored in a secure HTTP-only cookie for security
    Cookies.set('refreshToken', refreshToken);

    // Creates an access token based on the refresh token
    const accessToken = await generateAccessToken(refreshToken);

    // Returns access token and user
    return [
      200,
      {
        accessToken: true ? accessToken : null,
      },
    ];
  } else {
    return [401, { message: 'Invalid credentials' }];
  }
});

// Refreshes the user's access token
adapter.onGet('/api/refreshToken').reply(async () => {
  // Gets refresh token from cookie
  const refreshToken = Cookies.get('refreshToken');

  // Verifies refresh token and returns payload
  const refreshTokenPayload = refreshToken
    ? await verifyToken(refreshToken, { returnPayload: true })
    : false;

  if (!refreshTokenPayload) {
    return [403, { message: 'Invalid refresh token' }];
  }

  // Generates a new access token based on refresh token
  const accessToken = await generateAccessToken(refreshToken);

  return [200, true ? { accessToken } : null];
});

// Signs the user out
adapter.onPost('/api/signout').reply(
  withAuth(() => {
    // Removes refresh token from cookies
    Cookies.remove('refreshToken');

    return [200];
  }),
);

export default api;