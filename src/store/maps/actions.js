import {
  MAPS_LIST_INIT,
  MAPS_LIST_SUCCESS,
  MAPS_LIST_ERROR
} from './types';

export const maps = () => {
	return {
		type: MAPS_LIST_INIT
	};
};

export const mapsSuccess = (data, values) => {
	return {
		type: MAPS_LIST_SUCCESS,
		payload: { data, values }
	};
};

export const mapsFailed = error => {
	return {
		type: MAPS_LIST_ERROR,
		payload: error
	};
};
