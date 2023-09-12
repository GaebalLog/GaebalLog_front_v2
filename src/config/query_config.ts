import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export const QUERY_KEYS = {
  KEYWORDLIST: "keywordList",
  POSTLIST: "postlist",
};
