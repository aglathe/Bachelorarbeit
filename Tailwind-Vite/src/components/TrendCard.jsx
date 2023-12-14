import React from 'react'
import Shoe from '../../../assets/shoe renders/MainRender.png'
import { NavLink } from 'react-router-dom'

export default function TrendCard({ title, category, price, originalprice }) {
    return (
        <NavLink to="/shop" >
            <div className="max-w-[16rem] rounded overflow-hidden shadow-lg font-oswald inline-block bg-slate-200 mr-5">
                <img className="w-[90%] pl-5 pt-5" src={Shoe} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl text-sky-700">{title}</div>
                    <p className="text-gray-400 text-base">{category}</p>
                    <div className='' >
                        <div className="text-base line-through inline decoration-orange-400 decoration-2">{originalprice}  </div>
                        <div className="text-base inline">{price}</div>
                    </div>
                </div>
            </div >
        </NavLink>
    )
}
