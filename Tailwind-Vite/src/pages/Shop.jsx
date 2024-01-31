import React from 'react'
import Navigation from '../components/Navigation.jsx'
import Shoe from '../assets/render/MainRender.png'
import ShopGridElement from '../components/ShopGridElement.jsx'
import Footer from '../components/Footer.jsx'


export default function Shop() {
    return (
        <>
            <Navigation />
            <div className=''>
                <div className='h-10'></div>
                <p className='ml-5 font-oswald font-bold text-4xl mb-2 dark:text-slate-200'>Die Besten der Besten</p>
                <div className='h-10'></div>
                <div id='carousel' className='carousel w-3/4 left-[12.5%] relative mt-[-6rem]'>
                    <div id='slide1' className='carousel-item relative w-full'>
                        <img src={Shoe} className='w-1/2 h-auto left-1/4 relative pt-[-2.5rem] mt-20' />
                        <div className='absolute h-4 min-h-[1rem] flex justify-between transform -translate-y-1/4 left-0 right-0 top-[60%]'>
                            <a href='#slide4' className='btn btn-circle h-8 min-h-[2rem] w-8 min-w-[2rem] bg-sky-700 text-white dark:bg-sky-950'>❮</a>
                            <a href='#slide2' className='btn btn-circle h-8 min-h-[2rem] w-8 min-w-[2rem] bg-sky-700 text-white dark:bg-sky-950'>❯</a>
                        </div>
                    </div>
                    <div id='slide2' className='carousel-item relative w-full '>
                        <img src={Shoe} className='w-1/2  left-1/4 relative pt-[-2.5rem] mt-20' />
                        <div className='absolute h-4 min-h-[1rem] flex justify-between transform -translate-y-1/4 left-0 right-0 top-[60%]'>
                            <a href='#slide1' className='btn btn-circle h-8 min-h-[2rem] w-8 min-w-[2rem] bg-sky-700 text-white dark:bg-sky-950'>❮</a>
                            <a href='#slide3' className='btn btn-circle h-8 min-h-[2rem] w-8 min-w-[2rem] bg-sky-700 text-white dark:bg-sky-950'>❯</a>
                        </div>
                    </div>
                    <div id='slide3' className='carousel-item relative w-full'>
                        <img src={Shoe} className='w-1/2 left-1/4 relative pt-[-2.5rem] mt-20' />
                        <div className='absolute h-4 min-h-[1rem] flex justify-between transform -translate-y-1/4 left-0 right-0 top-[60%]'>
                            <a href='#slide2' className='btn btn-circle h-8 min-h-[2rem] w-8 min-w-[2rem] bg-sky-700 text-white dark:bg-sky-950'>❮</a>
                            <a href='#slide4' className='btn btn-circle h-8 min-h-[2rem] w-8 min-w-[2rem] bg-sky-700 text-white dark:bg-sky-950'>❯</a>
                        </div>
                    </div>
                    <div id='slide4' className='carousel-item relative w-full'>
                        <img src={Shoe} className='w-1/2 left-1/4 relative pt-[-2.5rem] mt-20' />
                        <div className='absolute h-4 min-h-[1rem] flex justify-between transform -translate-y-1/4 left-0 right-0 top-[60%]'>
                            <a href='#slide3' className='btn btn-circle h-8 min-h-[2rem] w-8 min-w-[2rem] bg-sky-700 text-white dark:bg-sky-950'>❮</a>
                            <a href='#slide1' className='btn btn-circle h-8 min-h-[2rem] w-8 min-w-[2rem] bg-sky-700 text-white dark:bg-sky-950'>❯</a>
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
                <div className='grid grid-cols-2 place-items-center gap-3 pl-4 pr-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
                    <ShopGridElement title='Velocity' category='Herrenschuhe' numofcol='4' price='89.99€' />
                    <ShopGridElement title='Quantum Soar' category='Wanderschuhe' numofcol='3' price='109.99€' />
                    <ShopGridElement title='Echo Mirage' category='Frauenschuhe' numofcol='5' price='94.99€' oldprice='114.99€' />
                    <ShopGridElement title='Velocity' category='Kinderschuhe' numofcol='6' price='49.99€' oldprice='59.99€' />
                    <ShopGridElement title='Quantum Soar' category='Kinderschuhe' numofcol='6' price='64.99€' oldprice='74.99€' />
                    <ShopGridElement title='Echo Mirage' category='Kinderschuhe' numofcol='6' price='54.99€' />
                    <ShopGridElement title='Velocity' category='Herrenschuhe' numofcol='4' price='99.99€' />
                    <ShopGridElement title='Quantum Soar' category='Frauenschuhe' numofcol='5' price='79.99€' oldprice='99.99€' />
                    <ShopGridElement title='Echo Mirage' category='Frauenschuhe' numofcol='5' price='89.99€' />
                    <ShopGridElement title='Velocity' category='Kinderschuhe' numofcol='6' price='59.99€' oldprice='69.99€' />
                    <ShopGridElement title='Quantum Soar' category='Herrenschuhe' numofcol='4' price='104.99€' />
                    <ShopGridElement title='Echo Mirage' category='Wanderschuhe' numofcol='3' price='124.99€' />
                    <ShopGridElement title='Velocity' category='Herrenschuhe' numofcol='4' price='109.99€' />
                    <ShopGridElement title='Quantum Soar' category='Herrenschuhe' numofcol='4' price='119.99€' oldprice='139.99€' />
                    <ShopGridElement title='Echo Mirage' category='Frauenschuhe' numofcol='5' price='99.99€' oldprice='119.99€' />
                    <ShopGridElement title='Velocity' category='Herrenschuhe' numofcol='4' price='94.99€' />
                    <ShopGridElement title='Quantum Soar' category='Wanderschuhe' numofcol='3' price='119.99€' />
                    <ShopGridElement title='Echo Mirage' category='Frauenschuhe' numofcol='5' price='84.99€' oldprice='104.99€' />
                    <ShopGridElement title='Velocity' category='Wanderschuhe' numofcol='3' price='114.99€' oldprice='134.99€' />
                    <ShopGridElement title='Quantum Soar' category='Wanderschuhe' numofcol='3' price='134.99€' />
                    <ShopGridElement title='Echo Mirage' category='Kinderschuhe' numofcol='6' price='74.99€' />
                    <ShopGridElement title='Velocity' category='Wanderschuhe' numofcol='3' price='129.99€' />
                    <ShopGridElement title='Quantum Soar' category='Kinderschuhe' numofcol='6' price='69.99€' />
                    <ShopGridElement title='Echo Mirage' category='Herrenschuhe' numofcol='4' price='114.99€' />
                    <ShopGridElement title='Velocity' category='Frauenschuhe' numofcol='5' price='104.99€' oldprice='124.99€' />
                </div>
                <div className='h-32'></div>
                <Footer />



            </div>
        </>
    )
}
