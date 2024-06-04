import { QueryClient } from "@tanstack/react-query";

export const homeLoader = (client: QueryClient) => async () => {
  await client.fetchQuery({
    queryKey: ["test"],
    queryFn: () => Promise.resolve({ data: "test" }),
  });
  return null;
};
