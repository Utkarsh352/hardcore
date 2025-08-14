"use client";
import { useRouter } from "next/navigation";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useEffect, useState } from "react";
import { useAccount, useChainId, useSwitchChain } from "wagmi";
import { coreDao } from "@/providers/config";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";
import { Textarea } from "../ui/textarea";
import Image from "next/image";
import { Loader2, Plus } from "lucide-react";

export default function LandingPage() {
	const chainId = useChainId();
	const { switchChain } = useSwitchChain();
	const { address, isConnected } = useAccount();
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);
	const [hasLoaded, setHasLoaded] = useState(false);

	useEffect(() => {
		setHasLoaded(true);
	}, []);

	useEffect(() => {
		if (isConnected && chainId !== coreDao.id) {
			switchChain?.({ chainId: coreDao.id });
		}
	}, [chainId, isConnected, switchChain]);

	return (
		<div className="container min-h-screen flex flex-col items-center text-foreground">
			<LampContainer className="px-6 pt-48">
				<motion.h1
					initial={{ opacity: 0, y: 50 }}
					animate={hasLoaded ? { opacity: 1, y: 0 } : {}}
					transition={{
						delay: 0.3,
						duration: 0.8,
						ease: "easeInOut",
					}}
					className="bg-gradient-to-t pb-4 z-40 font-bold from-neutral-400 to-neutral-100  bg-clip-text text-transparent text-4xl tracking-tight md:text-7xl text-center leading-[1.2]"
				>
					Talk with your assets
				</motion.h1>

				<p className="font-normal text-lg text-muted-foreground tracking-normal mt-1 mb-8 max-w-xl mx-auto text-center">
					Execute trades, swaps, and portfolio management using AI. <br /> Next-generation DeFi interface powered by Core Blockchain
				</p>

				{/* Action Buttons */}

				{/* Connect or Start Button */}
				<div className="mt-8">
					{isConnected ? (
						<Button
							onClick={() => {
								setIsLoading(true);
								router.push("/home");
							}}
							disabled={isLoading}
							className="rounded-full"
						>
							Start
							{isLoading && <Loader2 className="animate-spin ml-2 w-4 h-4"/>}
						</Button>
					) : (
						<ConnectButton chainStatus="icon" showBalance={false} label="Connect Wallet" />
					)}
				</div>

				{/* Example Chat Prompt */}
				<div className="mt-12 w-full mx-auto">
					<div className="flex items-center gap-4 mb-4">
						<Image
							src="/red_logo.svg"
							alt="HardCore-AI Logo"
							width={32}
							height={32}
							className="h-8 w-8 object-contain"
						/>
						<p className="text-lg text-muted-foreground">
							What can I assist you with on the Core network today?
						</p>
					</div>
					<Textarea
						autoComplete="off"
						name="message"
						className="pointer-events-none shadow-2xl bg-accent resize-none text-orange-500 text-bold text-xl px-4 py-6 placeholder:text-zinc-100 disabled:opacity-50 w-full rounded-md"
						placeholder="Exchange 100 USDC for CORE tokens..."
					/>
				</div>



				<div className="grid grid-cols-2 pt-12 gap-4 w-full mx-auto">
					<Button variant="outline" disabled={true}>SEND</Button>
					<Button variant="outline" disabled={true}>SWAP</Button>
					<Button variant="outline" disabled={true}>SHOW BALANCE</Button>
					<Button variant="outline" disabled={true}>CONVERT</Button>
					<Button variant="outline" className="col-span-2" disabled={true}>AND MORE...</Button>
				</div>
			</LampContainer>

			<div className="container items-center max-w-lg text-center flex flex-col w-full mt-24 mb-48">
				<p className="relative -mb-2 z-20 bg-gradient-to-b text-orange-500 bg-clip-text py-8 text-4xl font-thin sm:text-7xl">HardCore-AI</p>
				<p className="text-lg font-light text-foreground">
					<span className="text-orange-500 font-semibold">Hard</span>core <span className="text-orange-500 font-semibold">Core</span> blockchain <span className="text-orange-500 font-semibold">A</span>rtificial <span className="text-orange-500 font-semibold">I</span>ntelligence
				</p>
			</div>


			<div className="justify-center mb-36 container w-full px-24 items-center flex flex-col">
				{/*<div className="w-full h-0.5 bg-accent my-8 z-40"></div>*/}
				{/* We limit the width here for a cleaner, centered look */}
				<Accordion type="single" collapsible className="w-full max-w-3xl mx-auto space-y-2">
					<AccordionItem value="what">
						<AccordionTrigger className="text-3xl font-medium">
							What?
						</AccordionTrigger>
						<AccordionContent>
							<p className="text-base text-muted-foreground mt-2">
								We develop intelligent AI assistants that simplify <strong>decentralized finance operations and blockchain interactions</strong> through intuitive conversational interfaces on <strong>Core Blockchain</strong>. Rather than navigating
								complex protocol interfaces manually, our AI agent enables you to execute trades, swaps, and financial operations using plain language commands.
							</p>
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="how">
						<AccordionTrigger className="text-3xl font-medium">
							How?
						</AccordionTrigger>
						<AccordionContent>
							<p className="text-base text-muted-foreground mt-2">
								Link your digital wallet and describe your desired actions in everyday language.
								Our AI system will determine the optimal execution path for your requests on Core,
								whether you&apos;re exchanging tokens, transferring assets across chains, or discovering innovative protocols.
							</p>
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="why">
						<AccordionTrigger className="text-3xl font-medium">
							Why?
						</AccordionTrigger>
						<AccordionContent>
							<p className="text-base text-muted-foreground mt-2">
								Decentralized finance presents numerous challenges with its diverse toolsets and intricate procedures.
								We&apos;re committed to making blockchain finance accessible to <strong>all users</strong>.
								By empowering AI to manage the technical complexity, you can concentrate on your investment strategy
								rather than mastering countless protocol interfaces.
							</p>
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>



			{/* Footer */}


			<footer className="m-8 text-sm opacity-70 pb-8">
				Engineered for Core DAO • Enhanced by Core Blockchain & Artificial Intelligence
			</footer>
		</div>
	);
}