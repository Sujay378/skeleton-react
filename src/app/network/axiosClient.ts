import axios from "axios";

type ResponseType = "json" | "blob";

type GetRequest = {
  url: string;
  headers: Record<string, string>;
  params: Record<string, string>;
  baseURL: string;
  responseType: ResponseType;
};
type PostRequest<Payload = unknown> = GetRequest & { payload: Payload };
export type PutRequest<Payload> = PostRequest<Payload>;
export type DeleteRequest = GetRequest;

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const getRequestOptions = (props: Omit<GetRequest, "url">) => ({
  baseURL: props.baseURL,
  headers: new axios.AxiosHeaders({
    ...instance.defaults.headers,
    ...props.headers,
  }),
  params: { ...instance.defaults.params, ...props.params },
  responseType: props.responseType,
});

const get = <Response = unknown>(props: GetRequest) =>
  instance.get<Response>(props.url, getRequestOptions(props));

const post = <Response = unknown, Payload = unknown>(
  props: PostRequest<Payload>
) =>
  instance.post<Response>(props.url, props.payload, getRequestOptions(props));

const put = <Response = unknown, Payload = unknown>(
  props: PutRequest<Payload>
) => instance.put<Response>(props.url, props.payload, getRequestOptions(props));

const deleteReq = <Response = unknown>(props: DeleteRequest) =>
  instance.delete<Response>(props.url, getRequestOptions(props));

export default { get, post, put, delete: deleteReq, instance };
