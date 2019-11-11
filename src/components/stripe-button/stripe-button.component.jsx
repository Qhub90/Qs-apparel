import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const pubishableKey = 'pk_test_604TBbt9NuC6GmvYm4WxUtmW00Qo8GmMDd';

const onToken = token => {
  console.log(token);
  alert('Payment Successful')
}

  return(
    <StripeCheckout
      label= 'Pay Now'
      name= 'Qs Apparel'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description ={`Your total value is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={pubishableKey}
    />
  )
}

export default StripeCheckoutButton;