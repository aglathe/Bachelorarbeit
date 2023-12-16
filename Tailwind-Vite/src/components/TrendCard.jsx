import React from 'react'
import Shoe from '../../../assets/shoe renders/MainRender.png'
import { NavLink } from 'react-router-dom'

export default function TrendCard({ title, category, price, originalprice }) {
    return (
        <NavLink to='/shop' >
            <div className='max-w-[16rem] rounded-xl overflow-hidden shadow-lg font-oswald inline-block bg-slate-200 dark:bg-cyan-950 mr-5'>
                <div className='dark:bg-slate-600 pb-5'><img className='w-[90%] pl-5 pt-5' src={Shoe} /></div>

                <div className='px-6 py-4'>
                    <div className='font-bold text-xl text-sky-700 dark:text-sky-500'>{title}</div>
                    <p className='text-gray-400 text-base'>{category}</p>
                    <div>
                        <div className={'text-base line-through inline decoration-orange-400 decoration-2 ' + (originalprice != undefined ? 'mr-2' : '')}>{originalprice}  </div>
                        <div className='text-base inline dark:text-white'> {price}</div>
                    </div>
                </div>
            </div >
        </NavLink>
    )
}
