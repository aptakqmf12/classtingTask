"use client";

import { useState, ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnMount: true,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
            retry: false,
            staleTime: 60 * 1000,
            gcTime: 300 * 1000,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}

      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
