"use client";

import { config } from "@/wagmi.config";
import { WagmiProvider as WagmiProviderBase } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";

const queryClient = new QueryClient();

export default function WagmiProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <WagmiProviderBase config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProviderBase>
  );
}
