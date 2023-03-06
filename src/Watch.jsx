import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BsApple  } from "react-icons/bs";
import { FaAppStoreIos } from "react-icons/fa" 



const Watch = () => {
  return (
    <div>
        <Container>
            <Row>
                <Col>
                    <img width="450" style={{marginTop: '100px'}} src="images/Screenshot 2023-01-28 011811.jpg" alt="" />
                </Col>
                <Col style={{marginTop: '150px'}}>
                    <div className='mmgii'>
                        <h2 style={{fontWeight: '600' , width: '350px'}}>
                        Watch Your Delivery At Any Time
                        </h2>
                        <p className='about_p'>
                            With our app you can view the route of your order, from our local headquarters to the place where you are. Look for the app now!
                        </p>
                        <div className='d-flex'>
                            <button className='Order_b'>
                                <b style={{fontWeight: '500'}}><BsApple /> App Store</b>
                            </button>
                            <button className='Order_b' style={{marginLeft: '10px'}}>
                                <b style={{fontWeight: '500'}}><FaAppStoreIos /> Google Play</b>
                            </button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Watch