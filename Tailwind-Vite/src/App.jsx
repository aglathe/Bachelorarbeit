import { NavLink } from 'react-router-dom'
import shoemain from "../../assets/shoe renders/MainRender.png"

import TrendCard from './components/TrendCard.jsx'
import Navigation from './components/Navigation'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <Navigation />
      <div>
        <div className='h-20'></div>
        <NavLink to="/shop">
          <div className='rounded-m border-solid border-slate-400 border-y bg-sky-700 shadow-2xl pb-10'>
            <img src={shoemain} className='max-w-[80%] py-10 relative left-[10%]' />
            <div className='text-white uppercase font-oswald font-semibold text-4xl ml-5'>Der neue coole Schuh</div>
            <button className='text-orange-400 ml-5 uppercase font-oswald font-bold text-2xl '>{`Zum Shop ▶`}</button>
          </div>
        </NavLink>
        <div className='h-32'></div>
        <p className='ml-5 font-oswald font-bold text-4xl mb-2'>Unsere Empfehlungen</p>
        <div className='overflow-x-auto pb-3 whitespace-nowrap pl-5 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:"none"] [scrollbar-width:"none"]'>
          <TrendCard title="Doballo X Pro" category="Herrenschuh" price="59,99€" />
          <TrendCard title="Doballo X Pro" category="Frauenschuh" price="99,99€" originalprice="129,99€" />
          <TrendCard title="Doballo X Pro" category="Kinderschuh" price="45,99€" />
          <TrendCard title="Doballo X Pro" category="Handschuh" price="27,99€" originalprice="39,99€" />
          <TrendCard title="Doballo X Pro" category="Schuh des Manitu" price="199,99€" />
          <TrendCard title="Doballo X Pro" category="Schlittschuh" price="257,99€" originalprice="299,99€" />
        </div>
        <div className='h-32'></div>
        <Footer />
      </div>
    </>
  )
}

export default App
