import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Footer() {
    return (
        <div className=' font-oswald pl-5 border-t-2 border-solid border-sky-700'>
            <NavLink to="/about">
                <ul>
                    <li className='py-2'>
                        Geschenkgutschein
                    </li>
                    <li className='py-2'>
                        Über uns
                    </li>
                    <li className='py-2'>
                        Nutzungsbedingungen
                    </li>
                    <li className='py-2'>
                        Datenschutzerklärung
                    </li>
                </ul>
            </NavLink>
        </div>
    )
}
