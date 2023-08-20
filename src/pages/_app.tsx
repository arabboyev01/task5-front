import type { AppProps } from 'next/app'
import '../global.css'
import { ContextProvider } from '@/context/ContextProvider'

export default function App({Component, pageProps}: AppProps) {

    return (
        <ContextProvider>
            <Component {...pageProps} />
        </ContextProvider>
    )
}