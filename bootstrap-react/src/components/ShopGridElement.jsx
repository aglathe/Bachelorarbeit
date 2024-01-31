import React from 'react'
import Shoe from '../assets/render/MainRender.png'
import { Card } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default function ShopGridElement({ title, category, numofcol, price, oldprice }) {
    return (
        <Card style={{
            maxWidth: '16rem',
            width: 'auto',
            borderRadius: '0.75rem',
            overflow: 'hidden',
            display: 'inline-block',
            marginLeft: "auto",
            marginBottom: "1.25rem",
            backgroundColor: 'rgb(226 232 240)',
        }} className='shadow border-0'>
            <LinkContainer to="/shop">
                <div>
                    <div className='d-flex justify-content-center'><Card.Img src={Shoe} className='ShopImages ' /></div>
                    <Card.Body className='px-6 py-4' style={{ height: '100%' }}>
                        <Card.Title className='fw-bold' style={{
                            fontSize: '1.25rem',
                            lineHeight: '1.75rem',
                            color: 'rgb(3 105 161)'
                        }}>{title}</Card.Title>
                        <Card.Subtitle className='text-muted text-base'>{category}</Card.Subtitle>
                        <div className='d-inline-flex flex-row fw-bold' width='auto' >
                            <div id="discount" className={'inline ' + (oldprice != undefined ? 'me-2' : '')}>{oldprice}  </div>
                            <div className='text-base inline dark:text-white'> {price}</div>
                        </div>
                    </Card.Body>
                </div >
            </LinkContainer>

        </Card>
    )
}
