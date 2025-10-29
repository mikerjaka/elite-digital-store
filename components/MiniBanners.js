// components/MiniBanners.js
export default function MiniBanners(){
  const MINI = [
    "https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg",
    "https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png",
    "https://upload.wikimedia.org/wikipedia/commons/8/87/Crunchyroll_Logo.svg",
  ]
  return (
    <div className="mini-wrap">
      <div className="mini-track">
        {[...MINI, ...MINI].map((src,i)=>(
          <div key={i} className="mini-card">
            <img src={src} alt={`mini-${i}`} />
          </div>
        ))}
      </div>
    </div>
  )
}
