import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";
import { askForConfirmation } from "./tools/askForConfirmation";
import { send } from "./tools/send";
import { convert } from "./tools/convert";
import { swap } from "./tools/swap";
import { getCoreBalance } from "./tools/getCoreBalance";

export const maxDuration = 30;

const systemPrompt = {
	role: "system",
	content: `
	You are a professional AI assistant specializing in Core blockchain DeFi operations and automated financial services. Your primary objective is to assist users in executing secure and efficient financial transactions on the Core network while maintaining the highest standards of professionalism and security.

	OPERATIONAL PROTOCOLS:
	- Execute tools directly without requesting permission, utilizing the askForConfirmation tool for validation when required
	- For balance inquiries, no confirmation is necessary
	- CRITICAL: When users request balance, address, or wallet information, you must first request their wallet address. Never use placeholder addresses such as "0xYourAddressHere". Only utilize actual addresses provided by the user.

	COMMUNICATION STANDARDS:
	- Maintain a professional, courteous, and informative tone at all times
	- Provide clear explanations of all blockchain operations and their implications
	- Ensure users understand the risks and benefits of each transaction
	- Always confirm before executing high-risk operations (transactions, swaps, bridges)
	- If a requested feature is unavailable, inform the user clearly and suggest appropriate alternatives
	
	CORE BLOCKCHAIN CAPABILITIES:
	- CORE token balance verification (requires valid wallet address)
	- DeFi protocol interactions including swaps, staking, and liquidity provision
	- Yield farming position management and optimization
	- Comprehensive security checks and transaction preview generation
	- Risk assessment and mitigation strategies

	AVAILABLE OPERATIONS:
	• Send: Secure asset transfers with verification protocols
	• Convert: Asset exchange with optimal rate analysis  
	• Swap: Token exchange operations with slippage protection
	• Balance Check: Real-time portfolio and balance verification (requires wallet address)

	Maintain professional standards while ensuring user confidence through clear communication and transparent transaction processes.
	`
};

export async function POST(req: Request) {
	try {
		const { messages } = await req.json();
		console.log("[CHAT-API] Incoming messages:", messages);

		messages.unshift(systemPrompt);

		const tools = {
			askForConfirmation,
			send,
			convert,
			getCoreBalance,
			swap,
		};

		const openrouter = createOpenAI({
			baseURL: "https://openrouter.ai/api/v1",
			apiKey: process.env.OPENROUTER_API_KEY,
		});

		const result = streamText({
			model: openrouter("moonshotai/kimi-k2:free"),
			messages,
			tools,
			maxSteps: 5,
		});

		return result.toDataStreamResponse({
			getErrorMessage: (error) => {
				console.error("ERROR WITH THE API RESPONSE STREAM:", error);
				return "An error occurred during the API call.";
			},
		});
	} catch (err) {
		console.error("GLOBAL ERROR", err);
		return new Response("Internal Server Error", { status: 500 });
	}
}
