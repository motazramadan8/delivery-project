import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'


const Contact = () => {
  return (
    <div>
        <Container>
            <Row>
                <Col lg={6} md={6} sm={12}>
                    <h1 style={{width: '350px'}}>Contact Us From Here</h1>
                    <p  className='about_p'>
                        You can contact us from here,
                         you can write to us, call us
                          or visit our service center,
                           we will gladly assist you.
                    </p>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <h6 className='d-flex'>
                        Telephone:    <span style={{fontSize: '15px'}} className='about_p'>+201153802977</span>
                    </h6>
                    <br />
                    <h6 className='d-flex'>
                        Email:     <span style={{fontSize: '15px'}} className='about_p'>motazramadan198@gmail.com</span>
                    </h6>
                    <br />
                    <h6 className='d-flex'>
                        Location:    <span style={{fontSize: '15px'}} className='about_p'>Cairo - Egypt</span>
                    </h6>
                </Col>
                <Col lg={2} md={6} sm={12}>
                    <button className='Order_b' style={{marginLeft: '10px' , marginTop: '45px'}}>
                        <b style={{fontWeight: '500'}}>Contact Us</b>
                    </button>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Contact