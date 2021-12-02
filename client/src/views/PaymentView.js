import React, { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import CheckoutSteps from '../Componenets/CheckoutSteps';
import FormContainer from '../Componenets/FormContainer';


import { savePaymentMethod } from '../JS/actions/cartAction';

const PaymentView = ({ history }) => {
  const cart = useSelector((state) => state.cart);
 

  const [paymentMethod, setPaymentMethod] = useState('PayPal');

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('payment method');
    dispatch(savePaymentMethod(paymentMethod));
    history.push('/placeorder');
  };

  return (
    <FormContainer>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="address">
          <Form.Group>
{/*            <Form.Label as="legend">Select Method</Form.Label>
*/}            <Col>
              <Form.Check
                type="radio"
                label="Paypal or Credit Card"
                id="PayPal"
                name="paymentMethod"
                value="PayPal"
                onChange={(e) => setPaymentMethod(e.target.value)}
                checked
              ></Form.Check>

              {/* <Form.Check
                type="radio"
                label="Stripe"
                id="Stripe"
                name="paymentMethod"
                value="stripe"
                onChange={(e) => setPaymentMethod(e.target.value)}
                checked
              ></Form.Check> */}
            </Col>
          </Form.Group>
        </Form.Group>

        <Button type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default PaymentView;