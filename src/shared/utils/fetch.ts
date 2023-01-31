import { HOST, isServer, PORT } from '../constants/env';

const envAwareFetch = (url: string, options?: Record<string, unknown>) => {
  const fetchUrl =
    isServer && url.startsWith('/') ? `${HOST}:${PORT}${url}` : url;

  return fetch(fetchUrl, options).then((res) => res.json());
};

export { envAwareFetch as fetch };
