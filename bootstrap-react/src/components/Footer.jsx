import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'

export default function Footer() {
    return (
        <Container fluid className='d-grid ps-4 border-top border-secondary border-5'>
            <Row xs={1} md={2}>
                <Col>
                    <div className='py-2'>
                        Geschenkgutschein
                    </div>
                    <div className='py-2'>
                        Über uns
                    </div>
                    <div className='py-2'>
                        Nutzungsbedingungen
                    </div>
                    <div className='py-2'>
                        Datenschutzerklärung
                    </div>
                </Col>
                <Col>
                    <div className='py-2'>
                        Anderer Geschenkgutschein
                    </div>
                    <div className='py-2'>
                        Über dich
                    </div>
                    <div className='py-2'>
                        Cookies
                    </div>
                    <div className='py-2'>
                        Kontakt zu unseren teuren Anwälten
                    </div>
                </Col>
            </Row>



        </Container>
    )
}
