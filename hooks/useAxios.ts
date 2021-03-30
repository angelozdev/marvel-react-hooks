import * as React from "react";

/* Axios */
import axios, { AxiosError, AxiosRequestConfig } from "axios";

/* Config */
import { config } from "config";

/* LOCAL TYPES */
interface InitialState {
  data: any;
  error: AxiosError;
  status: Status;
}

type Action = { type: string; payload?: any };

type Status = "LOADING" | "SUCCESS" | "FAILURE" | "IDLE";

enum ActionTypes {
  DATA_REQUEST_LOADING = "DATA_REQUEST_LOADING",
  DATA_REQUEST_FAILURE = "DATA_REQUEST_FAILURE",
  DATA_REQUEST_SUCCESS = "DATA_REQUEST_SUCCESS",
}

const initialState: InitialState = {
  data: null,
  error: null,
  status: "IDLE",
};

/* REDUCER */
function reducer(state = initialState, action: Action): InitialState {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.DATA_REQUEST_LOADING:
      return {
        ...state,
        status: "LOADING",
      };

    case ActionTypes.DATA_REQUEST_FAILURE:
      return {
        ...state,
        status: "FAILURE",
        error: payload,
      };
    case ActionTypes.DATA_REQUEST_SUCCESS:
      return {
        ...state,
        status: "SUCCESS",
        data: payload,
      };
    default:
      return state;
  }
}

/* HOOK */
function useAxios({ url, ...rest }: AxiosRequestConfig) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    const {
      env: { marvelApiKey, marvelHash, marvelTs },
    } = config;

    dispatch({
      type: ActionTypes.DATA_REQUEST_LOADING,
    });

    axios({
      method: "GET",
      baseURL: "https://gateway.marvel.com/v1/public",
      url,
      params: {
        apikey: marvelApiKey,
        ts: marvelTs,
        hash: marvelHash,
      },
      ...rest,
    })
      .then(({ data: { data } }) => {
        dispatch({ type: ActionTypes.DATA_REQUEST_SUCCESS, payload: data });
      })
      .catch((error) => {
        dispatch({ type: ActionTypes.DATA_REQUEST_FAILURE, payload: error });
        return Promise.reject(error);
      });
  }, []);

  return state;
}

export default useAxios;
