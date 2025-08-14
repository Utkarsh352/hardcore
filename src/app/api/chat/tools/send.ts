import { tool } from "ai";
import { z } from "zod";
import { parseUnits } from "viem";
import { getAccount, writeContract } from "wagmi/actions";


export const send = tool({
	description: "send CORE from your connected wallet to another address on the Core blockchain network. ASK FOR CONFIRMATION BEFORE USING THIS TOOL.",
	parameters: z.object({
		to: z.string().min(42).max(42).describe("Recipient Core address."),
		amount: z.number().positive().describe("Amount of CORE to send."),
	}),
});