/* eslint-disable no-underscore-dangle */
import {
  USERS_LIST_INIT,
  USERS_LIST_SUCCESS,
  USERS_LIST_ERROR,
  USERS_CREATE_INIT,
  USERS_CREATE_SUCCESS,
  USERS_CREATE_ERROR
} from './types';

const initialState = {
  data: [],
  isLoading: false,
  error: '',
  response: '',
  userSelected: '',
  newUser: false,
};

const users = (state = initialState, { type, payload }) => {
	switch (type) {
		case USERS_LIST_INIT: {
			return {
				...state,
				error: '',
				isLoading: true,
      };
    }

		case USERS_LIST_SUCCESS: {
      const {
        nombres,
        apellidos,
        correo,
        tipo,
        entidad,
        roles,
      } = payload.values;

      const usersFiltered = payload.data
        .filter(({ nombres: firstName }) => {
          if(nombres === '') return true;
          if(firstName.includes(nombres)) return true;

          return false;
        })
        .filter(({ apellidos: lastName }) => {
          if(apellidos === '') return true;
          if(lastName.includes(apellidos)) return true;

          return false;
        })
        .filter(({ correo: email }) => {
          if(correo === '') return true;
          if(email.includes(correo)) return true;

          return false;
        })
        .filter(({ autoridadName, entidadName }) => {
          if(entidad === '') return true;
          if(tipo === 'autoridad' && autoridadName === (entidad)) return true;
          if(tipo === 'disposicion' && entidadName === (entidad)) return true;
          return false;
        })
        .filter(({ roles: rol }) => {
          if(roles === '') return true;
          if(rol === (roles)) return true;

          return false;
        });

			return {
				...state,
				data: usersFiltered,
        isLoading: false,
        newUser: false,
			};
    }

		case USERS_LIST_ERROR: {
			return {
				...state,
				isLoading: false,
				error: payload,
      };
    }

    case USERS_CREATE_INIT: {
			return {
				...state,
				error: '',
				isLoading: true,
      };
    }

    case USERS_CREATE_SUCCESS: {
			return {
				...state,
				data: [payload.data, ...state.data],
        isLoading: false,
        newUser: true,
        userSelected: '',
			};
    }

    case USERS_CREATE_ERROR: {
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

export { users as default, initialState };
