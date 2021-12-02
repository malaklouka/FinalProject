import React, { useEffect } from 'react';
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CheckoutSteps from '../Componenets/CheckoutSteps';
import { createOrder } from '../JS/actions/orderAction';
import Message from '../Componenets/custbag/Message';



const PlaceOrderView = ({ history }) => {
  const dispatch = useDispatch();
  const usr=useSelector(state=>state.userReducer.user)
  const dmnd=useSelector(state=>state.demandeReducer.demandes)




 

  return (
    <>
      <CheckoutSteps step1 step2 step3 step4 />
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2> Shipping </h2>
              <p>
                <strong>Address: </strong>
            {usr.adresse}
              </p>
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Payment Method</h2>
              <strong>Method: </strong>
              {dmnd.paymentMethod ? dmnd.paymentMethod : 'Paypal'}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Order Items</h2>
              {dmnd.quantity === 0 ? (
                <Message> Your cart is empty</Message>
              ) : (
                <ListGroup variant="flush">
                    <ListGroup.Item>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={dmnd.image}
                            alt={dmnd.namebag}
                            fluid
                            rounded
                          />
                        </Col>
                       
                        <Col md={4}>
                          {dmnd.quantity} X £{dmnd.price} = £
                          {dmnd.quantity * dmnd.price}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2> Order Summary</h2>
              </ListGroup.Item>




              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>£{dmnd.price}</Col>
                </Row>
              </ListGroup.Item>

             
              <ListGroup.Item>
                <Button
                  type="button"
                  className="btn-block"
                  style={{ width: '85%' }}
                >
                  Place Order
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default PlaceOrderView;