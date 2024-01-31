import React, { useState } from 'react'
import Navigation from '../components/Navigation.jsx'
import Footer from '../components/Footer.jsx'
import { Toast, Button, Container } from 'react-bootstrap'

export default function Warenkorb() {
    const [show, setShow] = useState(false);

    return (
        <div>
            <Navigation />
            <Toast bg='danger' onClose={() => setShow(false)} show={show} delay={3000} autohide style={{ position: 'absolute', top: '10', zIndex: '10' }}>
                <Toast.Header>
                    <strong>Benachrichtungssystem</strong>
                </Toast.Header>
                <Toast.Body>Ein Kauf wurde nicht implementiert.</Toast.Body>
            </Toast>
            <Container style={{ height: '12rem' }}></Container>
            <Button onClick={() => setShow(true)}>
                Kaufen
            </Button>
            <Container style={{ height: '12rem' }}></Container>
            <Footer />
        </div>
    )
}
