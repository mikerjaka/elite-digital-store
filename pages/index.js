import Header from '../components/Header'
import products from '../data/products.json'
import ProductCard from '../components/ProductCard'
import Link from 'next/link'

export default function Home(){
  const featured = products.filter(p=>p.featured).slice(0,18)
  return (<div>
    <Header/>
    <section style={{maxWidth:1100,margin:'0 auto',padding:'14px 16px'}}>
      <div style={{display:'grid',gap:12}}>
        <img src="/slider-1.txt" alt="Sube tu banner 1" style={{width:'100%',height:220,objectFit:'cover',borderRadius:18,border:'1px solid #1b1c1f'}}/>
        <img src="/slider-2.txt" alt="Sube tu banner 2" style={{width:'100%',height:220,objectFit:'cover',borderRadius:18,border:'1px solid #1b1c1f'}}/>
        <img src="/slider-3.txt" alt="Sube tu banner 3" style={{width:'100%',height:220,objectFit:'cover',borderRadius:18,border:'1px solid #1b1c1f'}}/>
        <div style={{fontSize:12,opacity:.8}}>💡 Reemplaza los archivos de /public/slider-*.txt por tus imágenes (mismo nombre).</div>
      </div>
    </section>
    <section style={{maxWidth:1100,margin:'0 auto',padding:'12px 16px'}}>
      <h2 style={{fontSize:16,letterSpacing:.6}}>PRODUCTOS DESTACADOS</h2>
      <div style={{display:'grid',gap:12,gridTemplateColumns:'repeat(2,1fr)'}}>
        {featured.map(p => <ProductCard key={p.id} p={p}/>)}
      </div>
      <div style={{display:'flex',justifyContent:'center',marginTop:12}}>
        <Link href="/tienda" style={{border:'1px solid #a3ffce44',padding:'10px 12px',borderRadius:10}}>VER CATÁLOGO</Link>
      </div>
    </section>
  </div>)
}
