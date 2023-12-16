import { NavLink } from 'react-router-dom'
import Shoe from '../assets/render/MainRender.png'

import TrendCard from '../components/TrendCard.jsx'
import Navigation from '../components/Navigation.jsx'
import Footer from '../components/Footer.jsx'

function App() {
  return (
    <>
      <Navigation />
      <div className='dark:bg-slate-900'>
        <div className='h-20'></div>
        <NavLink to='/shop'>
          <div className='rounded-m bg-sky-700 dark:bg-opacity-25 shadow-2xl pb-10'>
            <div className='md:grid md:grid-cols-2 gap-x-20'>
              <img src={Shoe} className='max-w-[80%] sm:max-h-[30rem] py-10 relative left-[10%] sm:left-[20%] inline' />
              <div className='hidden md:flex flex-nowrap left-2/3 mt-10 pl-10 font-oswald text-2xl flex-col justify-between border-l-2'>
                <div>
                  <div className='text-white'>Komfort und Stil <div className='text-orange-500 inline'>neu definiert</div></div>
                  <div className='mb-5 ml-5 hidden lg:inline text-base text-white'>um die Erwartungen von Schuhliebhabern zu übertreffen</div>
                </div>
                <div>
                  <div className='text-white'>Bahnbrechende <div className='text-orange-500 inline'>ergonomische</div> Sohlentechnologie</div>
                  <div className='mb-5 ml-5 hidden lg:inline text-base text-white'> optimale Dämpfung und Unterstützung</div>
                </div>
                <div>
                  <div className='text-white'>Atmungsaktives Design für den <div className='text-orange-500 inline'>ganzen Tag</div></div>
                  <div className='mb-5 ml-5 hidden lg:inline text-base text-white'>ideale Belüftung, um Hitze und Feuchtigkeit zu reduzieren</div>
                </div>
                <div>
                  <div className='text-white'>Balance zwischen <div className='text-orange-500 inline'>Flexibilität</div> und <div className='text-orange-500 inline'>Strapazierfähigkeit</div></div>
                  <div className='mb-5 ml-5 hidden lg:inline text-base text-white'>Langlebigkeit bei gleichzeitiger Bewegungsfreiheit</div>
                </div>
              </div>
            </div>
            <div className='text-white uppercase font-oswald font-semibold text-4xl ml-5'>Der neue coole Schuh</div>
            <button className='text-orange-400 ml-5 uppercase font-oswald font-bold text-2xl '>{`Zum Shop ▶`}</button>
          </div>
        </NavLink>
        <div className='h-32'></div>
        <p className='ml-5 font-oswald font-bold text-4xl mb-2 dark:text-gray-300 '>Unsere Empfehlungen</p>
        <div className='h-4'></div>
        <div className='overflow-x-scroll pb-3 pointer-events-auto whitespace-nowrap pl-5 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:" none"] [scrollbar-width:"none"] '>
          <TrendCard title='Doballo X Pro' category='Herrenschuh' price='59,99€' />
          <TrendCard title='Doballo X Pro' category='Frauenschuh' price='99,99€' originalprice='129,99€' />
          <TrendCard title='Doballo X Pro' category='Kinderschuh' price='45,99€' />
          <TrendCard title='Doballo X Pro' category='Handschuh' price='27,99€' originalprice='39,99€' />
          <TrendCard title='Doballo X Pro' category='Schuh des Manitu' price='199,99€' />
          <TrendCard title='Doballo X Pro' category='Schlittschuh' price='257,99€' originalprice='299,99€' />
        </div>
        <div className='h-32'></div>
        <Footer />
      </div >
    </>
  )
}

export default App
