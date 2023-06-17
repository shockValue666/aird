// import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
// import { Web3Modal,useWeb3Modal } from '@web3modal/react'
// import { configureChains, createConfig, WagmiConfig } from 'wagmi'
// import { arbitrum, mainnet, polygon } from 'wagmi/chains'



// const chains = [arbitrum, mainnet, polygon]
// const projectId = 'YOUR_PROJECT_ID'

// const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
// const wagmiConfig = createConfig({
//   autoConnect: true,
//   connectors: w3mConnectors({ projectId, version: 1, chains }),
//   publicClient
// })
// const ethereumClient = new EthereumClient(wagmiConfig, chains)

function connect() {
    // const { open, close } = useWeb3Modal()
  return (
    <>
      {/* <WagmiConfig config={wagmiConfig}> */}
        <h1>poutsa</h1>
      {/* </WagmiConfig> */}
      {/* <button onClick={() => open()}>Connect</button> */}

      {/* <Web3Modal projectId={projectId} ethereumClient={ethereumClient} /> */}
    </>
  )
}


export default connect