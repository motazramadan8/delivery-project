import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'


const Safety = () => {
  return (
    <div>
        <Container>
            <Row> 
                <Col style={{marginTop: '150px'}}>
                    <div className='mmgii'>
                        <h2 style={{fontWeight: '600' , width: '300px'}}>
                            Your Safety Is Important
                        </h2>
                        <p className='about_p'>
                            When your order reaches you,
                            we have the health safety
                            protocols, so that you are
                            protected from any disease.
                            Watch the video of how the delivery is made.
                        </p>
                    </div>
                </Col>

                <Col>
                    <img width="450" style={{marginTop: '100px'}} src="images/saftely.jpg" alt="" />
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Safety