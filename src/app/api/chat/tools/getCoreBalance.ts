import { tool } from "ai";
import { z } from "zod";
import { createPublicClient, http, formatEther, defineChain } from "viem";

// Define Core DAO chain for API usage
const coreDao = defineChain({
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

const publicClient = createPublicClient({
	chain: coreDao,
	transport: http("https://rpc.coredao.org"),
});

export const getCoreBalance = tool({
	description:
		"Get the balance of CORE in your wallet. You don't need any confirmation to execute this tool.",
	parameters: z.object({
		address: z.string().describe("The wallet address to check balance for"),
	}),
	execute: async ({ address }) => {
		try {
			const balance = await publicClient.getBalance({
				address: address as `0x${string}`,
			});
			
			const formattedBalance = formatEther(balance);
			return {
				address,
				balance: formattedBalance,
				symbol: "CORE",
				chain: "Core DAO",
			};
		} catch (error) {
			console.error("Error getting CORE balance:", error);
			return {
				error: "Failed to get CORE balance",
				address,
			};
		}
	},
});