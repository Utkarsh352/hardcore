# Hardcore-AI

> **Next-generation DeFi interface powered by AI and Core Blockchain**

Hardcore-AI is an intelligent DeFi assistant that transforms complex blockchain operations into simple, conversational interactions. Built specifically for the Core blockchain ecosystem, it enables users to execute trades, manage portfolios, and interact with DeFi protocols through natural language commands.

## 🎯 Vision

**Democratize DeFi by making blockchain finance accessible through conversational AI.**

### Key Features

- **🤖 Conversational DeFi**: Execute trades, swaps, and portfolio management using natural language
- **⚡ Core Blockchain Integration**: Optimized for Core network's speed and security
- **🛡️ Safety First**: Built-in confirmation systems and transaction previews
- **📱 Intuitive Interface**: Chat-based interactions that require no technical expertise
- **🔗 Multi-Protocol Support**: Interact with various DeFi protocols through a unified interface

### Supported Operations

- Token swaps and exchanges
- Portfolio balance checking
- Asset transfers and payments
- Yield farming opportunities
- Cross-chain asset bridging
- DeFi protocol exploration

## 🚀 Quick Start

### Prerequisites

- **Node.js 18+** - [Download here](https://nodejs.org/en/download)
- **Package Manager** - npm, pnpm, or yarn
- **Core Wallet** - MetaMask or compatible wallet configured for Core network

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/hardcore-ai/hardcore-ai.git
   cd hardcore-ai
   ```

2. **Install dependencies**
   ```bash
   # Using pnpm (recommended)
   pnpm install
   
   # Or using npm
   npm install
   ```

3. **Configure environment**
   ```bash
   cp .env.example .env
   ```
   
   Update `.env` with your configuration:
   ```env
   OPENROUTER_API_KEY=your_openrouter_api_key
   NEXT_PUBLIC_PROJECT_ID=your_walletconnect_project_id
   ```

4. **Start development server**
   ```bash
   # Using pnpm
   pnpm dev
   
   # Or using npm
   npm run dev
   ```

5. **Access the application**
   
   Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Architecture

### Tech Stack

| Component | Technology | Purpose |
|-----------|------------|---------|
| **Frontend** | Next.js 14 | React framework with App Router |
| **Styling** | Tailwind CSS | Utility-first CSS framework |
| **UI Components** | shadcn/ui | Radix UI + Tailwind components |
| **Animations** | Framer Motion | Smooth interactions and transitions |
| **State Management** | Zustand | Lightweight state management |
| **Blockchain** | Wagmi + Viem | Ethereum-compatible blockchain interactions |
| **Wallet Connection** | RainbowKit | Multi-wallet connection support |
| **AI Integration** | Vercel AI SDK | Language model interactions |
| **Icons** | Lucide React | Consistent icon library |

### Core Blockchain Integration

- **Network**: Core DAO Mainnet (Chain ID: 1116)
- **RPC URL**: `https://rpc.coredao.org`
- **Explorer**: [CoreScan](https://scan.coredao.org)
- **Native Token**: CORE

## 🛠️ Development

### Project Structure

```
hardcore-ai/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── (landing)/         # Landing page group
│   │   ├── api/               # API routes
│   │   ├── home/              # Main application
│   │   └── layout.tsx         # Root layout
│   ├── components/            # React components
│   │   ├── chat/              # Chat interface components
│   │   ├── landing/           # Landing page components
│   │   └── ui/                # Reusable UI components
│   ├── constants/             # Application constants
│   ├── hooks/                 # Custom React hooks
│   ├── lib/                   # Utility libraries
│   ├── providers/             # Context providers
│   └── utils/                 # Helper functions
├── public/                    # Static assets
└── docs/                      # Documentation
```

### Available Scripts

```bash
# Development
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm type-check   # Run TypeScript check
```

### Environment Configuration

Create a `.env.local` file with the following variables:

```env
# AI Configuration
OPENROUTER_API_KEY=your_openrouter_api_key

# Wallet Configuration  
NEXT_PUBLIC_PROJECT_ID=your_walletconnect_project_id

# Optional: Local AI Model
OLLAMA_URL=http://localhost:11434  # If using Ollama locally
```

## 🔧 Configuration

### AI Model Setup

The application supports multiple AI providers:

1. **OpenRouter** (Recommended)
   - Create account at [OpenRouter](https://openrouter.ai)
   - Get API key and add to `.env`
   - Currently using: `moonshotai/kimi-k2:free`

2. **Ollama** (Local, Optional)
   - Install [Ollama](https://ollama.com)
   - Pull a compatible model: `ollama pull llama2`
   - Update configuration in API routes

### Wallet Configuration

1. **MetaMask Setup**
   - Install MetaMask extension
   - Add Core network manually or through [ChainList](https://chainlist.org)

2. **Network Details**
   ```
   Network Name: Core Blockchain
   RPC URL: https://rpc.coredao.org
   Chain ID: 1116
   Currency Symbol: CORE
   Block Explorer: https://scan.coredao.org
   ```

## 🌐 Deployment

### Vercel (Recommended)

1. **Connect Repository**
   ```bash
   npx vercel
   ```

2. **Configure Environment Variables**
   - Add all environment variables in Vercel dashboard
   - Ensure production API keys are properly set

3. **Deploy**
   ```bash
   vercel --prod
   ```

### Other Platforms

The application can be deployed to any platform supporting Next.js:
- Netlify
- Railway
- Render
- DigitalOcean App Platform

## 🔐 Security

### Best Practices

- **Never commit private keys** or sensitive data
- **Use environment variables** for all configuration
- **Validate all user inputs** before blockchain interactions
- **Implement proper error handling** for failed transactions
- **Use confirmation dialogs** for all financial operations

### Audit Considerations

- Smart contract interactions are limited to well-established protocols
- All transactions require explicit user confirmation
- Private keys never leave the user's wallet
- Application follows Web3 security best practices

## 🤝 Contributing

### Getting Started

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and commit: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines

- **Code Style**: Follow ESLint and Prettier configurations
- **Commits**: Use conventional commit messages
- **Testing**: Add tests for new features
- **Documentation**: Update relevant documentation

### Areas for Contribution

- Additional DeFi protocol integrations
- UI/UX improvements
- Performance optimizations
- Mobile responsiveness
- Accessibility enhancements
- Internationalization (i18n)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Resources

### Official Links
- **Core DAO**: [Official Website](https://coredao.org)
- **Core Scan**: [Block Explorer](https://scan.coredao.org)
- **Core Bridge**: [Asset Bridge](https://bridge.coredao.org)

### Developer Resources
- **Core Documentation**: [Developer Docs](https://docs.coredao.org)
- **Testnet Faucet**: [Get Test Tokens](https://scan.test.btcs.network/faucet)
- **Ecosystem**: [Core dApps](https://coredao.org/explore/ecosystem)

### AI & Blockchain
- **Vercel AI SDK**: [Documentation](https://sdk.vercel.ai)
- **Wagmi**: [React Hooks for Ethereum](https://wagmi.sh)
- **Viem**: [TypeScript Interface for Ethereum](https://viem.sh)

---

**Built with ❤️ for the Core blockchain ecosystem**

*Enabling the future of conversational DeFi*