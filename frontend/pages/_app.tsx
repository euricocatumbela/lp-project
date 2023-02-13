import Layout from '@/src/layouts/layout/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {DataContextProvider} from "../context/StateContext"
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <DataContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </DataContextProvider>
    </>
   
  )
}
