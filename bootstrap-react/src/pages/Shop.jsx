import React from 'react'
import Navigation from '../components/Navigation.jsx'
import ShopGridElement from '../components/ShopGridElement.jsx'
import Shoe from '../assets/render/MainRender.png'
import Footer from '../components/Footer.jsx'
import { Carousel, Row, Container } from 'react-bootstrap'

export default function Shop() {
    return (
        <>
            <Navigation />
            <div>
                <Container id="spacer"></Container>
                <p className='ms-5 mb-5 display-3 fw-bolder'>Die Besten der Besten</p>
                <div className='h-10'></div>
                <div className='d-flex justify-content-center'>
                    <Carousel data-bs-theme="dark" className='w-75'>
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
                <Container id="spacer"></Container>
                <p className='ms-4 display-5 fw-bold'>Kategorien</p>
                <Container className='ms-4 d-flex flex-row pb-3 '>
                    <Container className='me-3'>Herren</Container>
                    <Container className='me-3'>Damen</Container>
                    <Container className='me-3'>Kinder</Container>
                    <Container className='me-3'>Wanderschuhe</Container>
                </Container>

                <Container fluid className='border-top border-secondary border-5 mb-5'></Container>
                <Container className='d-flex justify-content-center'>
                    <Container width="90%">
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
                    </Container>
                </Container>
                <Container id="spacer"></Container>
                <Footer />



            </div>
        </>
    )
}
