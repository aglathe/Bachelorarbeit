import React from 'react'
import Navigation from '../components/Navigation.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import Shoe from '../assets/render/MainRender.png'
import TrendCard from '../components/TrendCard.jsx'
import Footer from '../components/Footer.jsx'

import { Container, Button, CardBody } from 'react-bootstrap'

export default function Home() {
    return (
        <div>
            <Navigation />
            <Container style={{ height: '6rem' }}></Container>
            <div id="presentingsquare" width="100%" className='shadow-lg mx-0 px-0 d-flex flex-row'>
                <div className='d-flex flex-column justify-content-center ps-5'>
                    <img src={Shoe} width="75%" style={{ maxWidth: '80%' }}></img>
                    <div className='text-white fw-bolder ps-2 mt-3'
                        style={{
                            fontSize: '2.25rem',
                            lineHeight: '2.5rem'
                        }}>DER NEUE COOLE SCHUH</div>
                    <div className='text-warning ps-2 text-uppercase fw-bold pb-5' style={{
                        fontSize: '1.5rem',
                        lineHeight: '2rem'
                    }}>Zum Shop</div>
                </div>
                <div className='d-none d-md-flex'> Mehr Informationen </div>
            </div >
            <Container style={{ height: '8rem' }}></Container>
            <Container className="text-uppercase fw-bold  mb-3 ps-2" style={{
                fontSize: '2rem',
                lineHeight: '4rem'
            }}>
                Unsere Empfehlungen
            </Container>
            <Container id="CardContainer" fluid className="d-flex flex-row flex-nowrap overflow-y-hidden overflow-x-scroll" style={{ backgroundColor: 'rgba(0, 0, 0, 0)', marginBottom: '4rem', paddingBottom: '2rem' }}>
                <TrendCard title='Doballo X Pro' category='Herrenschuh' price='59,99€' />
                <TrendCard title='Doballo X Pro' category='Frauenschuh' price='99,99€' originalprice='129,99€' />
                <TrendCard title='Doballo X Pro' category='Kinderschuh' price='45,99€' />
                <TrendCard title='Doballo X Pro' category='Handschuh' price='27,99€' originalprice='39,99€' />
                <TrendCard title='Doballo X Pro' category='Schuh des Manitu' price='199,99€' />
                <TrendCard title='Doballo X Pro' category='Schlittschuh' price='257,99€' originalprice='299,99€' />
            </Container>
            <Container style={{ height: '8rem' }}></Container>
            <Footer />
        </div >
    )
}
