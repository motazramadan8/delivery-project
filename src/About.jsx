import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'


const About = () => {
  return (
    <div>
        <Container>
            <Row>
                <Col>
                    <img width="450" style={{marginTop: '100px'}} src="images/aboutimg.jpg" alt="" />
                </Col>
                <Col style={{marginTop: '150px'}}>
                    <div className='mmgii'>
                        <h2 style={{fontWeight: '600' , width: '350px'}}>
                            Find Out A Little More About Us
                        </h2>
                        <p className='about_p'>
                         We are a company dedicated to the distribution of products by delivery
                         to your home or to the place where you are, with the best
                         quality of delivery.
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default About