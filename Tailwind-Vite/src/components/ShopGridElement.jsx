import React from 'react'
import Shoe from '../../../assets/shoe renders/MainRender.png'

export default function ShopGridElement({ title, category, numofcol, price, oldprice }) {
    return (
        <div>
            <div className="max-w-[16rem] w-auto rounded-xl overflow-hidden shadow-lg font-oswald inline-block bg-slate-200 dark:bg-slate-800 h-auto">
                <div className='dark:bg-slate-600 pb-5'><img className="w-[90%] pl-5 pt-5" src={Shoe} /></div>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl text-sky-700 dark:text-sky-500">{title}</div>
                    <p className="text-gray-400 text-base">{category}</p>
                    <div className={"text-base line-through inline decoration-orange-400 decoration-2 " + (oldprice != undefined ? "mr-2" : "")}>{oldprice}  </div>
                    <div className="text-base inline dark:text-white">{price}</div>
                    <div className="h-max"></div>
                </div>
            </div>
        </div >
    )
}
