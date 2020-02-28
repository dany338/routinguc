import Cookies from "js-cookie";
import {
  LOGIN_INIT,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_INIT,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR
} from './types';

const isCookie = (typeof Cookies.get('routing') !== 'undefined');

const initialState = {
  username: isCookie ? JSON.parse(Cookies.get('routing')).user.username : '',
  email: isCookie ? JSON.parse(Cookies.get('routing')).user.email : '',
	isLoading: false,
	isLoggedIn: isCookie,
  error: '',
  response: '',
};

const login = (state = initialState, { type, payload }) => {
	switch (type) {
		case LOGIN_INIT: {
			return {
				...state,
				error: '',
				isLoading: true,
      };
    }

		case LOGIN_SUCCESS: {
      const { username, token } = payload.data;
			return {
				...state,
				userLogin: username,
				token,
				isLoading: false,
				isLoggedIn: true,
			};
    }

		case LOGIN_ERROR: {
			return {
				...state,
				isLoading: false,
				isLoggedIn: false,
				error: payload,
      };
    }

		case LOGOUT_INIT: {
			return {
				...state,
				error: '',
				isLoading: true,
      };
    }

		case LOGOUT_SUCCESS: {
			return {
				...state,
				username: '',
				email: '',
				isLoading: false,
				isLoggedIn: false,
			};
    }

		case LOGOUT_ERROR: {
			return {
				...state,
				isLoading: false,
				error: payload,
      };
    }

		default: {
			return state;
		}
	}
};

export { login as default, initialState };
