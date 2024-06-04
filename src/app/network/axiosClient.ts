import axios from "axios";

export type ResponseType = "json" | "blob";

export type GetRequest = {
  url: string;
  headers: Record<string, string>;
  params: Record<string, string>;
  baseURL: string;
  responseType: ResponseType;
};
export type PostRequest<Payload = unknown> = GetRequest & { payload: Payload };
export type PutRequest = PostRequest;
export type DeleteRequest = GetRequest;

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const get = <Response = unknown>(props: GetRequest) => {
  return instance.get<Response>(props.url, {
    baseURL: props.baseURL,
    headers: new axios.AxiosHeaders({
      ...instance.defaults.headers,
      ...props.headers,
    }),
    params: { ...instance.defaults.params, ...props.params },
    responseType: props.responseType,
  });
};

const post = <Response = unknown, Payload = unknown>(
  props: PostRequest<Payload>
) => {
  return instance.post<Response>(props.url, props.payload, {
    baseURL: props.baseURL,
    headers: new axios.AxiosHeaders({
      ...instance.defaults.headers,
      ...props.headers,
    }),
    params: { ...instance.defaults.params, ...props.params },
    responseType: props.responseType,
  });
};

const put = <Response = unknown, Payload = unknown>(
  props: PostRequest<Payload>
) => {
  return instance.put<Response>(props.url, props.payload, {
    baseURL: props.baseURL,
    headers: new axios.AxiosHeaders({
      ...instance.defaults.headers,
      ...props.headers,
    }),
    params: { ...instance.defaults.params, ...props.params },
    responseType: props.responseType,
  });
};

const deleteReq = <Response = unknown>(props: DeleteRequest) => {
  return instance.delete<Response>(props.url, {
    baseURL: props.baseURL,
    headers: new axios.AxiosHeaders({
      ...instance.defaults.headers,
      ...props.headers,
    }),
    params: { ...instance.defaults.params, ...props.params },
    responseType: props.responseType,
  });
};

export const api = { get, post, put, delete: deleteReq, instance };
export default instance;
