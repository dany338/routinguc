/* eslint-disable no-underscore-dangle */
import {
  MAPS_LIST_INIT,
  MAPS_LIST_SUCCESS,
  MAPS_LIST_ERROR
} from './types';

const initialState = {
  data: [],
  isLoading: false,
  error: '',
  response: '',
  mapSelected: '',
};

const maps = (state = initialState, { type, payload }) => {
	switch (type) {
		case MAPS_LIST_INIT: {
			return {
				...state,
				error: '',
				isLoading: true,
      };
    }

		case MAPS_LIST_SUCCESS: {
      const {
        originLatitude,
        originLongitude,
        status,
      } = payload.values;

      const usersFiltered = payload.data
        .filter(({ origin_latitude }) => {
          if(originLatitude === '') return true;
          if(origin_latitude.includes(originLatitude)) return true;

          return false;
        })
        .filter(({ origin_longitude }) => {
          if(originLongitude === '') return true;
          if(origin_longitude.includes(originLongitude)) return true;

          return false;
        })
        .filter(({ status: statusCoord }) => {
          if(status === '') return true;
          if(statusCoord === (status)) return true;
          return false;
        });

			return {
				...state,
				data: usersFiltered,
        isLoading: false,
        newUser: false,
			};
    }

		case MAPS_LIST_ERROR: {
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

export { maps as default, initialState };
