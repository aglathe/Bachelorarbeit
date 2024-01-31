import React from 'react'
import Shoe from '../assets/render/MainRender.png'
import { LinkContainer } from 'react-router-bootstrap'

import { Card } from 'react-bootstrap'

export default function TrendCard({ title, category, price, originalprice }) {
    return (

        <Card style={{
            maxWidth: '18rem',
            borderRadius: '0.75rem',
            minWidth: '14rem',
            marginRight: "1.25rem",
            backgroundColor: 'rgb(226 232 240)',
            minHeight: '22rem',
        }} className='shadow border-0'>

            <LinkContainer to="/shop">
                <div className='h-100 rounded-xl'>
                    <Card.Img variant="top" width="100%" className=' px-3 pt-3' src={Shoe} />
                    <Card.Body className='px-6 py-4' style={{ height: '100%' }}>
                        <Card.Title className='fw-bold' style={{
                            fontSize: '1.25rem',
                            lineHeight: '1.75rem',
                            color: 'rgb(3 105 161)'
                        }}>{title}</Card.Title>
                        <Card.Subtitle className='text-muted text-base'>{category}</Card.Subtitle>
                        <div className='d-inline-flex flex-row fw-bold' width='auto' >
                            <div id="discount" className={'inline ' + (originalprice != undefined ? 'me-2' : '')}>{originalprice}  </div>
                            <div className='text-base inline dark:text-white'> {price}</div>
                        </div>
                    </Card.Body>
                </div >
            </LinkContainer>
        </Card>
    )
}
