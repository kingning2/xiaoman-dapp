# Web3 Dapp with RainbowKit

这是一个基于 [Next.js](https://nextjs.org) 构建的 Web3 Dapp 项目，使用 [RainbowKit](https://www.rainbowkit.com/) 实现钱包连接功能。

## 技术栈

- [Next.js](https://nextjs.org) - React 框架
- [RainbowKit](https://www.rainbowkit.com/) - 钱包连接解决方案
- [Wagmi](https://wagmi.sh/) - Web3 React Hooks 库
- [Viem](https://viem.sh/) - 以太坊交互库
- [TailwindCSS](https://tailwindcss.com/) - CSS 框架

## 开始使用

### 环境配置

1. 复制环境变量文件：

```bash
cp env.example .env.local
```

2. 在 `.env.local` 中配置你的 WalletConnect Project ID：

```env
NEXT_PUBLIC_PROJECT_ID=YOUR-PROJECT-ID
```

> 注意：你可以在 [WalletConnect Cloud](https://cloud.walletconnect.com/) 获取 Project ID

### 安装依赖

```bash
# 使用 pnpm（推荐）
pnpm install

# 或使用 npm
npm install

# 或使用 yarn
yarn install
```

### 运行开发服务器

```bash
# 使用 pnpm
pnpm dev

# 或使用 npm
npm run dev

# 或使用 yarn
yarn dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看运行结果。

## 主要功能

- 🌈 支持多钱包连接（MetaMask、WalletConnect、Coinbase Wallet 等）
- 🔒 安全的钱包连接管理
- ⚡ 使用 Turbopack 实现快速开发体验
- 🎨 使用 TailwindCSS 实现响应式设计

## 项目结构
