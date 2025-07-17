import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { mainnet, sepolia, anvil } from 'wagmi/chains'

export const config = getDefaultConfig({
  appName: "My RainbowKit App",
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID!,
  chains: [mainnet, sepolia, anvil],
  ssr: true, // If your dApp uses server side rendering (SSR)
});