import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Button } from "semantic-ui-react";
import { getMyorders } from "../../JS/actions/order";

const OrderItem = ({ order }) => {
    const dispatch = useDispatch()


  return (
    <div id="order-item" className="card cyan darken-4">
      <div className="card-content white-text">
        <div className="flow-text center">Rs. {order.numItem}</div>
        <blockquote>
          <p style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>
            {order.isAccepted}
          </p>
          <p>{order.isDelivered}</p>
        </blockquote>
      </div>
      <div className="card-action">
        <span
          style={{ width: "100%" }}
          className="activator btn center"
          data-target={order._id}
        >
          View Order
        </span>
        <Button basic color='green'onClick={()=>dispatch(getMyorders())}>
            edit
          </Button>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          Your Order<i className="material-icons right">close</i>
        </span>
     
      </div>
    </div>
  );
};



export default OrderItem;