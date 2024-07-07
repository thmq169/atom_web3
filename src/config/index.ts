import {
    arbitrum,
    arbitrumGoerli,
    avalanche,
    avalancheFuji,
    base,
    baseGoerli,
    baseSepolia,
    bsc,
    bscTestnet,
    celo,
    celoAlfajores,
    fantom,
    fantomTestnet,
    filecoin,
    filecoinCalibration,
    filecoinHyperspace,
    goerli,
    linea,
    lineaTestnet,
    mantle,
    mantleTestnet,
    moonbaseAlpha,
    moonbeam,
    optimism,
    optimismGoerli,
    optimismSepolia,
    polygon,
    polygonMumbai,
    scroll,
    scrollSepolia,
    // scrollTestnet,
  } from 'viem/chains'
import { mainnet, sepolia } from 'wagmi/chains'
  
const configChains = [
    mainnet,
    goerli,
    sepolia,
    arbitrum,
    arbitrumGoerli,
    optimism,
    optimismGoerli,
    optimismSepolia,
    linea,
    lineaTestnet,
    base,
    baseGoerli,
    baseSepolia,
    avalanche,
    avalancheFuji,
    polygon,
    polygonMumbai,
    bsc,
    bscTestnet,
    fantom,
    fantomTestnet,
    moonbeam,
    moonbaseAlpha,
    mantle,
    mantleTestnet,
    scroll,
    // scrollTestnet,
    scrollSepolia,
    celo,
    celoAlfajores,
    filecoin,
    filecoinCalibration,
    filecoinHyperspace,
  ] as const
  
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import { cookieStorage, createStorage } from 'wagmi'

// Get projectId from https://cloud.walletconnect.com
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID ?? "ef9a783dee182464d7666a919d921edf"

if (!projectId) throw new Error('Project ID is not defined')

const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const config = defaultWagmiConfig({
  chains: configChains,
  projectId,
  metadata,
  // ssr: true,
  // storage: createStorage({
  //   storage: cookieStorage
  // }),
})

export { configChains, config, projectId }
  