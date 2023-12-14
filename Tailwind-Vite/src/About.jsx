import React from 'react'
import Navigation from './components/Navigation'
import Logo from "./assets/logo/LogoV3.png"
import Shoe from "../../assets/shoe renders/MainRender.png"

export default function About() {
    return (
        <>
            <Navigation />
            <div className='font-oswald ml-5' >
                <div className='h-10'></div>
                <p className='font-bold text-xl'>Bachelorarbeit von Adrian Glathe</p>
                <p className='text-l font-semibold'>Assets</p>
                <div>
                    <img src={Logo} className='w-[20%] inline' />
                    <div className='inline'> Logo einer erfundenen Marke - selbst erstellt</div>
                </div>
                <div>
                    <img src={Shoe} className='w-[25%] inline' />
                    <div className='inline'> 3D - Modell eines Schuhs - erstellt </div>
                    <div className='inline'> mit Hilfe des Youtube-Tutorials von <a href="https://www.youtube.com/watch?v=DncP3mKJB2M" className="text-sky-700">Derek Elliot</a></div>
                </div>
                <div className='h-10'></div>
                <p className='text-l font-semibold mb-5'>Benutzter Tech-Stack</p>
                <div>
                    <img src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg" className="w-[10%] inline"></img>
                    <p className="inline"> <a href="">Tailwind CSS</a> zum Stylen</p>
                </div>
                <div>
                    <img src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" className="w-[10%] inline"></img>
                    <p className="inline"><a href=""> ReactJS</a> mit <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/410px-Vitejs-logo.svg.png" className="w-[10%] inline"></img><a href="">Vite.js</a></p>
                </div>
                <div>
                    <img src="https://raw.githubusercontent.com/saadeghi/daisyui/master/src/docs/static/images/daisyui-logo/favicon-192.png" className="w-[10%] inline"></img>
                    <p className="inline"><a href=""> daisyui</a> als Component Library</p>
                </div>
            </div>
        </>
    )
}
