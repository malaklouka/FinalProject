import React, { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import FormContainer from '../Componenets/FormContainer';


import { savePaymentMethod } from '../JS/actions/cartAction';

const PaymentView = ({ history }) => {
 

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
         <Col>
              <Form.Check
                type="radio"
                label="Paypal or Credit Card"
                id="PayPal"
                name="paymentMethod"
                value="PayPal"
                onChange={(e) => setPaymentMethod(e.target.value)}
                checked
              ></Form.Check>

        
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