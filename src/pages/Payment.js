import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../stripe/CheckoutForm";

const stripePromise = loadStripe("pk_test_51OxxxxxReplaceWithYourKey");

const Payment = () => (
  <div className="container mt-5">
    <h2>Stripe Payment</h2>
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  </div>
);

export default Payment;
