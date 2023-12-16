import React, { useState } from 'react'
import Navigation from '../components/Navigation.jsx'
import CartItem from '../components/CartItem.jsx'
import Footer from '../components/Footer.jsx'
import toast, { Toaster } from 'react-hot-toast';



export default function Warenkorb() {
    const notify = () => toast.custom((t) => (
        <div
            className={`bg-red-700 text-slate-100 font-oswald px-6 py-4 shadow-md rounded-full ${t.visible ? 'animate-enter' : 'animate-leave'
                }`}
        >
            Bestellung nicht möglich - nicht implementiert 😞
        </div>
    ))

    return (
        <>
            <Navigation />
            <div className='font-oswald'>
                <div className='h-20'></div>
                <p className='ml-5 font-bold text-4xl mb-2'>Warenkorb</p>
                <p className='ml-5 font-semibold text-sky-700'>3 Produkte</p>
                <div className='h-5'></div>
                <hr className='w-[90%] relative left-[5%]'></hr>
                <div className='h-5'></div>
                <div className='md:grid md:grid-cols-2  flex flex-col'>
                    <div className='md:justify-self-end md:w-4/5 md:max-w-lg'>
                        <div className='h-5'></div>
                        <div id='CartContainer' className='flex flex-col justify-center mx-5'>
                            <CartItem title='Velocity' size='46' price='59,99€' amount='1' category='Herrenschuh' />
                            <CartItem title='Quantum Soar' size='42' price='257,99€' amount='2' category='Schlittschuh' />
                            <CartItem title='Echo Mirage' size='38' price='99,99€' amount='2' category='Frauenschuh' />
                        </div>
                    </div>
                    <div id='moneycontainer' className='md:justify-self-start w-full flex flex-col content-center flex-wrap'>
                        <div className='w-3/4 max-w-lg md:justify-self-start'>
                            <div className='h-5'></div>
                            <p className='ml-5 font-bold text-2xl mb-5 dark:text-white'>Bestellübersicht</p>
                            <div className='grid grid-cols-2 ml-5 '>
                                <div>Produktkosten</div><div className='ml-auto mr-5'>417,97€</div>
                                <div>Lieferkosten</div><div className='ml-auto mr-5'>Kostenlos</div>
                            </div>
                            <div className='h-3'></div>
                            <hr className='w-[90%] relative left-[5%]'></hr>
                            <div className='h-3'></div>
                            <div className='grid grid-cols-2 ml-5 '>
                                <div className='text-orange-500'>Gesamtkosten</div><div className='ml-auto mr-5 inline text-orange-500'>417,97€</div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='h-16'></div>
                <div className='flex justify-center'>
                    <button className='btn w-3/4 max-w-lg relative text-white bg-sky-700' onClick={notify}>Bestellen</button>
                </div>


                <Toaster />
            </div>
            <div className='h-36'></div>
            <Footer />
        </>)
}
