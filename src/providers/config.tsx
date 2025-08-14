import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { mainnet } from "wagmi/chains";
import { defineChain } from "viem";

// Define Core DAO chain
export const coreDao = defineChain({
  id: 1116,
  name: "Core DAO",
  nativeCurrency: {
    decimals: 18,
    name: "Core",
    symbol: "CORE",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.coredao.org"],
    },
    public: {
      http: ["https://rpc.coredao.org"],
    },
  },
  blockExplorers: {
    default: {
      name: "CoreScan",
      url: "https://scan.coredao.org",
    },
  },
});

export const config = getDefaultConfig({
  appName: "HardCore-AI",
  projectId: "7a8f913d026858bae28fb603bc9b42ca",
  chains: [coreDao, mainnet],
  ssr: false,
});
