import React from 'react'
import Logo from '../../../assets/logo/LogoV2.png'
import { NavLink } from 'react-router-dom'
import { button } from '@material-tailwind/react'

export default function Membership({ title, description, buttontitle }) {
    return (
        <NavLink to="/about">
            <div className="max-w-[16rem] rounded-lg overflow-hidden shadow-lg font-oswald inline-block bg-slate-200 mr-5">
                <div className="">
                    <img className="w-max" src={Logo} />
                    <div className='ml-5'>
                        <div className="font-bold text-xl text-sky-700">{title}</div>
                        <p className="text-gray-400 text-base">{description}</p>
                        <p>{buttontitle}</p>
                    </div>
                </div>
            </div >
        </NavLink>
    )
}
