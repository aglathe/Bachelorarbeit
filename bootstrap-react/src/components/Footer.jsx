import React from 'react'
import { Col, Row, ListGroup } from 'react-bootstrap'

export default function Footer() {
    return (
        <div className='d-grid ps-4' style={{ borderTopWidth: '10px', borderTop: 'solid rgb(3 105 161)', overflow: 'hidden' }}>

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


        </div>
    )
}
