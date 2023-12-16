import React from 'react'

export default function Footer() {
    return (
        <div className=' font-oswald pl-5 border-t-2 border-solid border-sky-700 grid-cols-1 grid md:grid-cols-2'>
            <div className='inline'>
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
            </div>
            <div className='hidden md:inline'>
                <ul>
                    <li className='py-2'>
                        Anderer Geschenkgutschein
                    </li>
                    <li className='py-2'>
                        Über dich
                    </li>
                    <li className='py-2'>
                        Cookies
                    </li>
                    <li className='py-2'>
                        Kontakt zu unseren teuren Anwälten
                    </li>
                </ul>
            </div>
        </div>
    )
}
