import { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import Layout from '../components/layout/Layout';
import '../styles/globals.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { sepolia } from 'wagmi/chains'

const chains = [sepolia]
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ chains, projectId }),
  publicClient,
});

// 3. Configure modal ethereum client
const ethereumClient = new EthereumClient(wagmiConfig, chains);

function MyApp({ Component, pageProps }) {
  const [isReady, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <>
      {isReady &&
        <>
          <WagmiConfig config={wagmiConfig}>
            <Provider store={store}>
              <Layout>
                <Component {...pageProps} />
                <ToastContainer />
              </Layout>
            </Provider>
          </WagmiConfig>
          <Web3Modal projectId={projectId} ethereumClient={ethereumClient} defaultChain={sepolia} />
        </>
      }
    </>
  )
}

export default MyApp
