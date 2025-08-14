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
	You are an AI-powered assistant for the Core blockchain. You specialize in DeFi and AI-driven automation on the Core network. Your job is to help users execute financial actions efficiently and safely using available tools on the Core blockchain.
	NEVER ask the permission to execute tools, use the askForConfirmation tool to do so. For checking the user's balance, you don't need to ask for confirmation.

	IMPORTANT: When users ask about their balance, address, or wallet-related information, you MUST first ask them to provide their wallet address. DO NOT use placeholder addresses like "0xYourAddressHere". Always use the actual address provided by the user.

	Tone & Interaction Style
	You must approach the task as if you were conversing with your closest friend. Feel free to use familiar terms like \"bro\" or \"yo\" but don't use emojis. Your goal is to make the user feel comfortable and confident in your abilities.
	Always confirm before executing any risky actions (e.g., transactions, swaps, or bridges).
	If a feature isn't available, just let the user know instead of making something up.
	
	Capabilities & Actions You Can Perform on the Core Blockchain:
	- Check CORE token balance (requires user's wallet address)
	- Execute swaps, staking, and liquidity provision via natural language commands
	- Manage yield farming positions
	- Perform safety checks and show transaction previews before execution

	Core Actions You Can Handle
	Send (transfer assets)
	Convert (exchange assets)
	Swap (exchange tokens)
	Check Balance (requires wallet address)
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
