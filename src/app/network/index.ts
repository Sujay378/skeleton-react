import "@tanstack/react-query";
import { QueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

declare module "@tanstack/react-query" {
  interface Register {
    defaultError: AxiosError;
  }
}
export const queryClient = new QueryClient();

export * from "./axiosClient";
export * from "./endpoints";
export * from "./loaders";
