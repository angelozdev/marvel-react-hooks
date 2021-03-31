import axios, { AxiosRequestConfig } from "axios";

/* Config */
import { config } from "config";

async function getData({ url, params, ...rest }: AxiosRequestConfig) {
  const { env } = config;
  const { marvelApiKey, marvelHash, marvelTs } = env;

  return axios({
    method: "GET",
    baseURL: "https://gateway.marvel.com/v1/public",
    url,
    params: {
      apikey: marvelApiKey,
      ts: marvelTs,
      hash: marvelHash,
      ...params,
    },
    ...rest,
  })
    .then(({ data: { data } }) => {
      if (!data) throw new Error("Missing data");

      return data;
    })
    .catch((error) => {
      console.error(error);

      return Promise.reject(error);
    });
}

export default getData;
