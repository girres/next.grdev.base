/* eslint-disable react/prop-types */
import React from 'react'
import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'

// Context Provider
import { Provider as ContextProvider } from '@/context'

export default function App({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  )
}