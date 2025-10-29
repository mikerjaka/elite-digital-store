import Header from '../../components/Header'
import products from '../../data/products.json'
import categories from '../../data/categories.json'
import {useState} from 'react'

export default function Admin(){
  const [items, setItems] = useState(products)
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState(categories[0])
  const [cover, setCover] = useState('https://picsum.photos/seed/new/640/400')

  function add(){
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'')
    const next = [{
      id: 'p' + (items.length+1), slug, title, category,
      price: Number(price||0), oldPrice: null, stock: 100, featured: true, discount: 0, badge: null,
      cover, short: 'Descripción breve...', type: 'manual',
      content: [{label:'¿Qué incluye?', value:'Contenido editable desde admin (demo).'}]
    }, ...items]
    setItems(next)
    alert('Producto agregado (demo). Para guardar, edita data/products.json en tu repo.')
  }

  return (<div>
    <Header/>
    <section style={{maxWidth:1100,margin:'0 auto',padding:'12px 16px'}}>
      <h2>Panel oculto (demo)</h2>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12,marginTop:12}}>
        <input placeholder="Título" value={title} onChange={e=>setTitle(e.target.value)} />
        <input placeholder="Precio" value={price} onChange={e=>setPrice(e.target.value)} />
        <select value={category} onChange={e=>setCategory(e.target.value)}>
          {categories.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
        <input placeholder="URL de portada" value={cover} onChange={e=>setCover(e.target.value)} />
      </div>
      <div style={{marginTop:12}}>
        <button onClick={add} style={{background:'#0c8b57',color:'#fff',padding:'10px 12px',borderRadius:10,fontWeight:700}}>Agregar (demo)</button>
      </div>
      <div style={{fontSize:12,opacity:.8,marginTop:12}}>Para persistir permanentemente, edita <code>data/products.json</code>.</div>
    </section>
  </div>)
}
