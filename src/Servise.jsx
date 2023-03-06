import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';

const Servise = () => {
  return (
    <> 
    <br />
    <br />
        <div style={{textAlign: 'center'}}>
            <h1 style={{color: 'black'}}>
                Some Services We Offer
            </h1>
        </div>
        <br />
        <br />
        <br />

        <div style={{textAlign: 'center'}}>
            <Container>
                <Row>
                    <Col lg={4} md={6} sm={12}>
                        <Card className='caardd' style={{ width: '15rem' , border: 'none' }}>
                            <h5 style={{textAlign: 'center'}}>Payment Done</h5>
                            <Card.Img variant="top" src="images/money.jpg" />
                            <Card.Body>
                                <Card.Text>
                                    Pay with a Visa or PayPal card and without much ado.
                                </Card.Text>
                                <Card.Title>Learn More</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <br />
                    <br />
                    <br />

                    <Col lg={4} md={6} sm={12}>
                        <Card className='caardd' style={{ width: '15rem' , border: 'none' }}>
                            <h5 style={{textAlign: 'center'}}>Find Your Product</h5>
                            <Card.Img variant="top" src="images/tablet.jpg" />
                            <Card.Body>
                                <Card.Text>
                                    We offer sale of products through the Internet.
                                </Card.Text>
                                <Card.Title>Learn More</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <br />
                    <br />
                    <br />

                    <Col lg={4} md={6} sm={12}>
                        <Card className='caardd' style={{ width: '15rem' , border: 'none' }}>
                            <h5 style={{textAlign: 'center'}}>Product Received</h5>
                            <Card.Img variant="top" src="images/walk.jpg" />
                            <Card.Body>
                                <Card.Text>
                                    In our app you can see the delay time of your order.
                                </Card.Text>
                                <Card.Title>Learn More</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
  )
}

export default Servise