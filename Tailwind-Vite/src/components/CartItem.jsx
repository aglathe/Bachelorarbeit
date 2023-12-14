import React from 'react'
import Shoe from "../../../assets/shoe renders/MainRender.png"

export default function CartItem({ title, size, price }) {
    return (
        <div className=' shadow-xl rounded-lg mb-5 p-2  bg-slate-300 flex'>
            <img src={Shoe} className='w-32' />
            <div className='ml-2 pt-1 flex-grow'>
                <div className='text-sky-700'>{title}</div>
                <div className='text-orange-500'>{size}</div>
            </div>
            <div className='top-1/2 flex align-middle justify-center flex-col text-orange-500'>{price}</div>

        </div>
    )
}
