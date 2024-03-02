import React from 'react'
import Shoe from '../assets/render/MainRender.png'
import { Card } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default function ShopGridElement({ title, category, price, oldprice }) {
    return (
        <Card style={{
            maxWidth: '16rem',
        }} className='shadow border-0 w-auto rounded mb-3 ms-auto overflow-hidden d-inline-block bg-info'>
            <LinkContainer to="/shop">
                <div>
                    <div className='d-flex justify-content-center'><Card.Img src={Shoe} className='ShopImages ' /></div>
                    <Card.Body className='px-6 py-4 h-100'>
                        <Card.Title className='fw-bold text-secondary'>{title}</Card.Title>
                        <Card.Subtitle className='text-muted text-base'>{category}</Card.Subtitle>
                        <div className='d-inline-flex flex-row fw-bold' width='auto' >
                            <div id="discount" className={'text-decoration-line-through inline ' + (oldprice != undefined ? 'me-2' : '')}>{oldprice}  </div>
                            <div className='text-base inline'> {price}</div>
                        </div>
                    </Card.Body>
                </div >
            </LinkContainer>

        </Card>
    )
}
