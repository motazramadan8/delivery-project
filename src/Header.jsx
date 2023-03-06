import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Header = () => {
  return (
    <div>
        <Container>
            <Row>
                <Col style={{marginTop: '150px'}}>
                    <div className='mmgii'>
                        <h1 className='hero_title' style={{fontWeight: '700'}}>
                            Order Products Faster Easier
                        </h1>
                        <p className='hero_p'>
                            Order your favorite foods at any time and we will deliver them right to where you are.
                        </p>
                        <button className='Order_b'>
                            <b style={{fontWeight: '500'}}>Get Started</b>
                        </button>
                    </div>
                </Col>
                <Col>
                    <img className='mmgi' style={{marginTop: '100px'}} src="images/Screenshot 2023-01-28 000619.jpg" alt="" />
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Header