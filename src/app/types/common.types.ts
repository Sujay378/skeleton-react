import { QueryClient } from "@tanstack/react-query";
import { LoaderFunction } from "react-router-dom";

export type QueryLoader = (client: QueryClient) => LoaderFunction;
