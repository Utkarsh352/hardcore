import React from 'react';

const Page = () => {
  return (
    <div className="container p-6 max-w-3xl mx-auto h-screen">
      <h1 className="text-3xl font-bold mb-4">AI Agents for Decentralised Finance and Assets Management on Core</h1>

      <section className="mb-6 mt-8">
        <p className="mt-2">An AI agent that performs transactions and manages your assets on the Core blockchain.</p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold">Focus Areas</h3>
        <ul className="list-disc ml-6 mt-2 space-y-2">
          <li><strong>DeFi Position Management:</strong> Develop an AI agent to execute DeFi operations on the Core blockchain via natural language commands, managing yield farming, liquidity provision, and ensuring transaction safety.</li>
          <li><strong>Core-Specific Agent Framework:</strong> Build a toolkit for launching AI agents optimized for the Core blockchain, including abstractions for key DeFi protocols.</li>
          <li><strong>Airdrop Farming Agents:</strong> Develop AI-powered agents to farm airdrops on the Core blockchain.</li>
        </ul>
      </section>
    </div>
  );
};

export default Page;
