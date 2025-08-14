import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    const result = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (result.error) {
      alert(result.error.message);
    } else {
      alert("Payment method created successfully!");
      // You can send result.paymentMethod.id to your server here
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement className="form-control mb-3" />
      <button type="submit" className="btn btn-primary" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
