import Head from "next/head";
import Image from "next/image";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import MoreInfoModal from "../components/MoreInfoModal";
import MoreInfo from "../components/MoreInfoModal";
import Navbar from "../components/Navbar";
import Student from "../components/Student";
import Teacher from "../components/Teachers";
import Values from "../components/Values";
import Card from '../components/Card'
import Information from '../components/Information'
import Circle from '../components/Circle'
import Stats from '../components/Stats'
import SingleBanner from '../components/SingleBanner'

import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal,useWeb3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, polygon } from 'wagmi/chains'



const chains = [arbitrum, mainnet, polygon]
const projectId = '65c029cfde1ef3f088f3ce1d8d56f20c'

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)


export default function Home() {
   const { open, close } = useWeb3Modal()
  return (
    <div>
      <WagmiConfig config={wagmiConfig}>
          <Head>
            <title>Airdoge</title>
            <meta name="description" content="ai crypto shit" />
            <link
              href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap"
              rel="stylesheet"
            ></link>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          
          <Hero open={open} close={close}/>
          <Card/>
          <SingleBanner/>
          <Information/>
          <Circle/>
          <Stats/>
          {/* <Values/> */}
          {/* <Teacher/> */}
          {/* <Student/> */}
          <MoreInfoModal/>
          {/* <Cta/> */}
          <Footer/>
        </WagmiConfig>
        <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </div>
  );
}
