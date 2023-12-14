import React, { useState } from 'react'
import Navigation from './components/Navigation'
import Shoe from "../../assets/shoe renders/MainRender.png"
import CartItem from "./components/CartItem.jsx"
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
            <div className="font-oswald">
                <div className='h-20'></div>
                <p className='ml-5 font-bold text-4xl mb-2'>Warenkorb</p>
                <p className='ml-5 font-semibold text-sky-700'>3 Produkte</p>
                <div className='h-5'></div>
                <hr className='w-[90%] relative left-[5%]'></hr>
                <div className='h-5'></div>
                <div id="CartContainer" className="flex flex-col justify-center mx-10">
                    <CartItem title="Velocity" size="42" price="68,99€" />
                    <CartItem title="Quantum Soar" size="39" price="68,99€" />
                    <CartItem title="Echo Mirage" size="46" price="68,99€" />
                </div>
                <button className="btn  mx-20 relative text-white bg-sky-700" onClick={notify}>Bestellen</button>
                <Toaster />
            </div>
        </>
    )
}
