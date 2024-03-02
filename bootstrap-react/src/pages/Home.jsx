import React from 'react'
import Navigation from '../components/Navigation.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import Shoe from '../assets/render/MainRender.png'
import TrendCard from '../components/TrendCard.jsx'
import Footer from '../components/Footer.jsx'

import { Container, Row, Col } from 'react-bootstrap'

export default function Home() {
    return (
        <div>
            <Navigation />
            <Container id="spacer"></Container>
            <Container fluid id="presentingsquare" className='bg-secondary shadow-lg w-100 mx-0 px-0 d-flex flex-row overflow-x-hidden'>
                <Row className='ps-5'>
                    <Col xs={12} md={6}>
                        <img src={Shoe} width="75%" className='mw-80'></img>
                        <div className='text-light fw-bolder ps-2 mt-3'>
                            DER NEUE COOLE SCHUH
                        </div>
                        <div className='text-primary ps-2 text-uppercase fw-bold pb-5 display-5'>Zum Shop</div>
                    </Col>
                    <Col md={6} className='d-none d-md-flex flex-column '>
                        <Row className=' gy-5'>
                            <Col md={12} className=''><div className='text-light'>Komfort und Stil <div className='text-primary d-inline'>neu definiert</div></div></Col>
                            <Col md={12} className=''><div className='text-light'>Bahnbrechende <div className='text-primary d-inline'>ergonomische</div> Sohlentechnologie</div></Col>
                            <Col md={12} className=''><div className='text-light'>Atmungsaktives Design für den <div className='text-primary d-inline'>ganzen Tag</div></div></Col>
                            <Col md={12} className=''><div className='text-light'>Balance zwischen <div className='text-primary d-inline'>Flexibilität</div> und <div className='text-primary d-inline'>Strapazierfähigkeit</div></div></Col>
                        </Row>



                    </Col>
                </Row>

            </Container >
            <Container id="spacer"></Container>
            <Container className="text-uppercase fw-bold  mb-3 ps-2 display-3">
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
            <Container id="spacer"></Container>
            <Footer />
        </div >
    )
}
