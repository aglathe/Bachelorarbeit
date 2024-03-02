import React from 'react'
import Shoe from '../assets/render/MainRender.png'
import { LinkContainer } from 'react-router-bootstrap'

import { Card } from 'react-bootstrap'

export default function TrendCard({ title, category, price, originalprice }) {
    return (

        <Card style={{
            maxWidth: '18rem',
            minWidth: '14rem',
            minHeight: '22rem',
        }} className='shadow border-0 rounded bg-info me-3'>

            <LinkContainer to="/shop">
                <div className='h-100 rounded-xl'>
                    <Card.Img variant="top" width="100%" className=' px-3 pt-3' src={Shoe} />
                    <Card.Body className='px-6 py-4 h-100'>
                        <Card.Title className='fw-bold text-secondary'>{title}</Card.Title>
                        <Card.Subtitle className='text-muted text-base'>{category}</Card.Subtitle>
                        <div className='d-inline-flex flex-row fw-bold' width='auto' >
                            <div id="discount" className={'text-decoration-line-through inline  ' + (originalprice != undefined ? 'me-2' : '')}>{originalprice}  </div>
                            <div className='text-base inline'> {price}</div>
                        </div>
                    </Card.Body>
                </div >
            </LinkContainer>
        </Card>
    )
}
