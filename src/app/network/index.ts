import "@tanstack/react-query";
import { QueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

declare module "@tanstack/react-query" {
  interface Register {
    defaultError: AxiosError;
  }
}

export * from "./axiosClient";
export * from "./endpoints";

export const queryClient = new QueryClient();
