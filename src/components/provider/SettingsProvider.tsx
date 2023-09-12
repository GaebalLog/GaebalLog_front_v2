"use client";
import "../../styles/reset.css";
import "../../styles/ckeditor.css";
import "../../styles/globals.css";
import React from "react";
import type { MutableSnapshot } from "recoil";
import { RecoilRoot } from "recoil";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "@/config/query_config";

interface props {
  children: React.ReactNode;
  initializeState?: (mutableSnapshot: MutableSnapshot) => void;
}

const SettingProvider: React.FC<props> = ({ children, initializeState }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot initializeState={initializeState}>
        <section className="flex min-h-[850px] flex-col items-center justify-center text-gray-600 body-font">
          {children}
        </section>
        <div id="portal" />
      </RecoilRoot>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default SettingProvider;
