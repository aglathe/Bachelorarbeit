import React from 'react'
import { NavLink } from 'react-router-dom'
import Shoe from "../../../assets/shoe renders/MainRender.png"

export default function ShopCarouselCard(position) {
    return (
        <>
            <img src={Shoe} />
            <div className='"absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
                <a href={`slide${position == 0 ? 4 : position - 1}`} className='btn btn-circle'>◀</a>
                <a href={`slide${position == 4 ? 0 : position + 1}`} className='btn btn-circle'>▶</a>
            </div>

        </>
    )
}
