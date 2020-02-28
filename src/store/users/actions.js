import {
  USERS_LIST_INIT,
  USERS_LIST_SUCCESS,
  USERS_LIST_ERROR,
  USERS_CREATE_INIT,
  USERS_CREATE_SUCCESS,
  USERS_CREATE_ERROR
} from './types';

export const listUsers = () => {
	return {
		type: USERS_LIST_INIT
	};
};

export const listSuccess = (data, values) => {
	return {
		type: USERS_LIST_SUCCESS,
		payload: { data, values }
	};
};

export const listFailed = error => {
	return {
		type: USERS_LIST_ERROR,
		payload: error
	};
};

export const createUser = () => {
	return {
		type: USERS_CREATE_INIT
	};
};

export const createSuccess = data => {
	return {
		type: USERS_CREATE_SUCCESS,
		payload: { data }
	};
};

export const createFailed = error => {
	return {
		type: USERS_CREATE_ERROR,
		payload: error
	};
};
