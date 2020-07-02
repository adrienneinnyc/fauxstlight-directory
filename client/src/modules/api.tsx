type APIRequestInput = APIRequestOptions & { method: string };

interface APIRequestOptions {
  url: string;
  data?: any;
}

export const createAPIRequest = async (opt: APIRequestInput) => {
  const { method, url, data } = opt;

  try {
    let body = undefined;
    const headers = new Headers({
      Accept: "application/json",
      "Cache-Control": "no-cache, no-store, must-revalidate",
    });

    if (data) {
      body = JSON.stringify(data);
      headers.append("Content-Type", "application/json");
    }

    const request = new Request(url, {
      method,
      headers,
      body,
    });

    const response = await fetch(request);

    let result;

    if (response.status >= 400) {
      throw response;
    } else if (response.status === 204) {
      result = response.statusText;
    } else {
      result = await response.json();
    }
    return result;
  } catch (error) {
    error.message = `${method} ${url}: ${error.message}`;
    throw error;
  }
};

export const apiRequest = {
  GET: (opts: APIRequestOptions) =>
    createAPIRequest({ method: "GET", ...opts }),
  POST: (opts: APIRequestOptions) =>
    createAPIRequest({ method: "POST", ...opts }),
  PUT: (opts: APIRequestOptions) =>
    createAPIRequest({ method: "PUT", ...opts }),
  DELETE: (opts: APIRequestOptions) =>
    createAPIRequest({ method: "DELETE", ...opts }),
};
