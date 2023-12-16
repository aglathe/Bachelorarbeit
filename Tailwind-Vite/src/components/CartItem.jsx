import React from 'react'
import Shoe from '../../../assets/shoe renders/MainRender.png'

export default function CartItem({ title, size, price, category, amount }) {
    return (
        <div className=' shadow-xl rounded-lg mb-5 p-2  bg-slate-300 dark:bg-sky-950 flex'>
            <img src={Shoe} className='w-32 mb-2' />
            <div className='ml-2 pt-1 flex-grow mb-5 pr-2'>
                <div className='text-sky-700'>{title}</div>
                <div className=''>{'Größe '}{size}</div>
                <div className='text-gray-400 text-base'>{category}</div>
                <div className='top-1/4 relative flex justify-between mb-2'>
                    <div className=' text-orange-500'>{price}</div>
                    <div className=''>{'Menge ' + amount}</div>
                </div>

            </div>


        </div>
    )
}
