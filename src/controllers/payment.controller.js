
const stripe = require('stripe')(
  'sk_test_51INFpPIfqLEQ1vOsk8NTO9YsaJMg6gUd0O3PMBQy9O5jKG46OyaIsZ7llTNxz3Qm3m1iyod93CZAS4mgauyezAlS005Kdftaof'
)

const createPaymentIntent = async ({ body: { amount }}, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'czk',
      payment_method_types: ['card'],
    })
    return res.status(200).send(paymentIntent)
  } catch (err) {
    res.status(500).send(err)
  }
}

const stripeWebHook = async ({ body }, res) => {
  try {

  } catch (err) {

  }
}

module.exports = {
  createPaymentIntent
}