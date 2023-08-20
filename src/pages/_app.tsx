import type { AppProps } from 'next/app'
import { ContextProvider } from '@/context/ContextProvider'
import '@/main.css'

export default function App({Component, pageProps}: AppProps) {

    return (
        <ContextProvider>
            <Component {...pageProps} />
        </ContextProvider>
    )
}