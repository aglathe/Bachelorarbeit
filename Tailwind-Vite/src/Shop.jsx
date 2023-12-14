import React from 'react'
import Navigation from './components/Navigation'
import Shoe from '../../assets/shoe renders/MainRender.png'
import ShopCarouselCard from './components/ShopCarouselCard'
import ShopGridElement from "./components/ShopGridElement.jsx"
import Footer from './components/Footer.jsx'


export default function Shop() {
    return (
        <>
            <Navigation />
            <div>
                <div className='h-20'></div>
                <p className='ml-5 font-oswald font-bold text-4xl mb-2'>Die Besten der Besten</p>
                <div className='h-10'></div>
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={Shoe} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle bg-sky-700 text-white">❮</a>
                            <a href="#slide2" className="btn btn-circle bg-sky-700 text-white">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={Shoe} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle bg-sky-700 text-white">❮</a>
                            <a href="#slide3" className="btn btn-circle bg-sky-700 text-white">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={Shoe} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle bg-sky-700 text-white">❮</a>
                            <a href="#slide4" className="btn btn-circle bg-sky-700 text-white">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src={Shoe} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle bg-sky-700 text-white">❮</a>
                            <a href="#slide1" className="btn btn-circle bg-sky-700 text-white">❯</a>
                        </div>
                    </div>
                </div>
                <div className='h-20'></div>
                <p className='ml-5 font-oswald font-bold text-4xl mb-2'>Kategorien</p>
                <div className='overflow-x-auto pb-3 whitespace-nowrap pl-5'>
                    <ul>
                        <li className='inline pr-2'>
                            Herren
                        </li>
                        <li className='inline pr-2'>
                            Damen
                        </li>
                        <li className='inline pr-2'>
                            Kinder
                        </li>
                        <li className='inline pr-2'>
                            Wanderschuhe
                        </li>
                    </ul>
                </div>
                <div className='h-10 border-t-4 border-solid border-sky-700'></div>
                <div className="grid grid-cols-2 place-items-center gap-3 pl-4 pr-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    <ShopGridElement title="Velocity" category="Herrenschuhe" numofcol="4" price="89.99€" oldprice="" />
                    <ShopGridElement title="Quantum Soar" category="Wanderschuhe" numofcol="3" price="109.99€" oldprice="" />
                    <ShopGridElement title="Echo Mirage" category="Frauenschuhe" numofcol="5" price="94.99€" oldprice="114.99€" />
                    <ShopGridElement title="Velocity" category="Kinderschuhe" numofcol="6" price="49.99€" oldprice="59.99€" />
                    <ShopGridElement title="Quantum Soar" category="Kinderschuhe" numofcol="6" price="64.99€" oldprice="74.99€" />
                    <ShopGridElement title="Echo Mirage" category="Kinderschuhe" numofcol="6" price="54.99€" oldprice="" />
                    <ShopGridElement title="Velocity" category="Herrenschuhe" numofcol="4" price="99.99€" oldprice="" />
                    <ShopGridElement title="Quantum Soar" category="Frauenschuhe" numofcol="5" price="79.99€" oldprice="99.99€" />
                    <ShopGridElement title="Echo Mirage" category="Frauenschuhe" numofcol="5" price="89.99€" oldprice="" />
                    <ShopGridElement title="Velocity" category="Kinderschuhe" numofcol="6" price="59.99€" oldprice="69.99€" />
                    <ShopGridElement title="Quantum Soar" category="Herrenschuhe" numofcol="4" price="104.99€" oldprice="" />
                    <ShopGridElement title="Echo Mirage" category="Wanderschuhe" numofcol="3" price="124.99€" oldprice="" />
                    <ShopGridElement title="Velocity" category="Herrenschuhe" numofcol="4" price="109.99€" oldprice="" />
                    <ShopGridElement title="Quantum Soar" category="Herrenschuhe" numofcol="4" price="119.99€" oldprice="139.99€" />
                    <ShopGridElement title="Echo Mirage" category="Frauenschuhe" numofcol="5" price="99.99€" oldprice="119.99€" />
                    <ShopGridElement title="Velocity" category="Herrenschuhe" numofcol="4" price="94.99€" oldprice="" />
                    <ShopGridElement title="Quantum Soar" category="Wanderschuhe" numofcol="3" price="119.99€" oldprice="" />
                    <ShopGridElement title="Echo Mirage" category="Frauenschuhe" numofcol="5" price="84.99€" oldprice="104.99€" />
                    <ShopGridElement title="Velocity" category="Wanderschuhe" numofcol="3" price="114.99€" oldprice="134.99€" />
                    <ShopGridElement title="Quantum Soar" category="Wanderschuhe" numofcol="3" price="134.99€" oldprice="" />
                    <ShopGridElement title="Echo Mirage" category="Kinderschuhe" numofcol="6" price="74.99€" oldprice="" />
                    <ShopGridElement title="Velocity" category="Wanderschuhe" numofcol="3" price="129.99€" oldprice="" />
                    <ShopGridElement title="Quantum Soar" category="Kinderschuhe" numofcol="6" price="69.99€" oldprice="" />
                    <ShopGridElement title="Echo Mirage" category="Herrenschuhe" numofcol="4" price="114.99€" oldprice="" />
                    <ShopGridElement title="Velocity" category="Frauenschuhe" numofcol="5" price="104.99€" oldprice="124.99€" />
                </div>
                <div className='h-32'></div>
                <Footer />



            </div>
        </>
    )
}
