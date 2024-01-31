import React from 'react'
import Navigation from '../components/Navigation.jsx'
import ShopGridElement from '../components/ShopGridElement.jsx'
import Shoe from '../assets/render/MainRender.png'
import Footer from '../components/Footer.jsx'
import { Carousel, Row, Col, Container } from 'react-bootstrap'

export default function Shop() {
    return (
        <>
            <Navigation />
            <div>
                <div style={{ height: '40px' }}></div>
                <p className='ms-5 mb-5' style={{
                    fontSize: '2.25rem',
                    lineHeight: '2.5rem',
                    fontWeight: '700'
                }}>Die Besten der Besten</p>
                <div className='h-10'></div>
                <div className='d-flex justify-content-center'>
                    <Carousel data-bs-theme="dark" style={{ width: '75%' }} className=''>
                        <Carousel.Item >
                            <img src={Shoe} width="65%" style={{ marginLeft: '8rem' }} />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={Shoe} width="65%" style={{ marginLeft: '8rem' }} />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={Shoe} width="65%" style={{ marginLeft: '8rem' }} />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={Shoe} width="65%" style={{ marginLeft: '8rem' }} />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div style={{ height: '5rem' }}></div>
                <p className='ms-4' style={{
                    fontSize: '2.25rem',
                    fontWeight: '500',
                    marginBottom: '0px'
                }}>Kategorien</p>
                <div className='ms-4 d-flex flex-row pb-3'>
                    <div className='me-3'>Herren</div>
                    <div className='me-3'>Damen</div>
                    <div className='me-3'>Kinder</div>
                    <div className='me-3'>Wanderschuhe</div>
                </div>

                <div className='border-t-4 border-solid border-sky-700' style={{ height: '2.5rem', borderWidth: '0px', borderTopWidth: '5px', borderStyle: 'solid', borderColor: '#0369a1' }}></div>
                <div className='d-flex justify-content-center'>
                    <div style={{ width: '90%', }}>
                        <Row>
                            <ShopGridElement title='Velocity' category='Herrenschuhe' numofcol='4' price='89.99€' />
                            <ShopGridElement title='Quantum Soar' category='Wanderschuhe' numofcol='3' price='109.99€' />
                            <ShopGridElement title='Echo Mirage' category='Frauenschuhe' numofcol='5' price='94.99€' oldprice='114.99€' />
                            <ShopGridElement title='Velocity' category='Kinderschuhe' numofcol='6' price='49.99€' oldprice='59.99€' />
                            <ShopGridElement title='Quantum Soar' category='Kinderschuhe' numofcol='6' price='64.99€' oldprice='74.99€' />
                            <ShopGridElement title='Echo Mirage' category='Kinderschuhe' numofcol='6' price='54.99€' />
                            <ShopGridElement title='Velocity' category='Herrenschuhe' numofcol='4' price='99.99€' />
                            <ShopGridElement title='Quantum Soar' category='Frauenschuhe' numofcol='5' price='79.99€' oldprice='99.99€' />
                            <ShopGridElement title='Echo Mirage' category='Frauenschuhe' numofcol='5' price='89.99€' />
                            <ShopGridElement title='Velocity' category='Kinderschuhe' numofcol='6' price='59.99€' oldprice='69.99€' />
                            <ShopGridElement title='Quantum Soar' category='Herrenschuhe' numofcol='4' price='104.99€' />
                            <ShopGridElement title='Echo Mirage' category='Wanderschuhe' numofcol='3' price='124.99€' />
                            <ShopGridElement title='Velocity' category='Herrenschuhe' numofcol='4' price='109.99€' />
                            <ShopGridElement title='Quantum Soar' category='Herrenschuhe' numofcol='4' price='119.99€' oldprice='139.99€' />
                            <ShopGridElement title='Echo Mirage' category='Frauenschuhe' numofcol='5' price='99.99€' oldprice='119.99€' />
                            <ShopGridElement title='Velocity' category='Herrenschuhe' numofcol='4' price='94.99€' />
                            <ShopGridElement title='Quantum Soar' category='Wanderschuhe' numofcol='3' price='119.99€' />
                            <ShopGridElement title='Echo Mirage' category='Frauenschuhe' numofcol='5' price='84.99€' oldprice='104.99€' />
                            <ShopGridElement title='Velocity' category='Wanderschuhe' numofcol='3' price='114.99€' oldprice='134.99€' />
                            <ShopGridElement title='Quantum Soar' category='Wanderschuhe' numofcol='3' price='134.99€' />
                            <ShopGridElement title='Echo Mirage' category='Kinderschuhe' numofcol='6' price='74.99€' />
                            <ShopGridElement title='Velocity' category='Wanderschuhe' numofcol='3' price='129.99€' />
                            <ShopGridElement title='Quantum Soar' category='Kinderschuhe' numofcol='6' price='69.99€' />
                            <ShopGridElement title='Echo Mirage' category='Herrenschuhe' numofcol='4' price='114.99€' />
                            <ShopGridElement title='Velocity' category='Frauenschuhe' numofcol='5' price='104.99€' oldprice='124.99€' />
                        </Row>
                    </div>
                </div>
                <div className='h-32'></div>
                <Footer />



            </div>
        </>
    )
}
