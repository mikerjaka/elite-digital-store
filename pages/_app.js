import '../styles/globals.css'
import Head from 'next/head'
export default function App({Component, pageProps}){
  return (<>
    <Head><title>Elite Digital – Tienda Oficial</title><link rel="icon" href="/favicon.svg"/></Head>
    <Component {...pageProps}/>
    <a className="whatsapp-fab" href="https://wa.me/51946335004" target="_blank" rel="noreferrer" style={{position:'fixed',right:16,bottom:16,width:56,height:56,borderRadius:999,background:'#25d366',display:'grid',placeItems:'center',color:'#042b13'}}>W</a>
  </>)
}
