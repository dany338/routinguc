import {
  LOGIN_INIT,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_INIT,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR
} from './types';

export const login = () => {
	return {
		type: LOGIN_INIT
	};
};

export const success = data => {
	return {
		type: LOGIN_SUCCESS,
		payload: { data }
	};
};

export const failed = error => {
	return {
		type: LOGIN_ERROR,
		payload: error
	};
};

export const logout = () => {
	return {
		type: LOGOUT_INIT
	};
};

export const logoutSuccess = data => {
	return {
		type: LOGOUT_SUCCESS,
		payload: { data }
	};
};

export const logoutFailed = error => {
	return {
		type: LOGOUT_ERROR,
		payload: error
	};
};
