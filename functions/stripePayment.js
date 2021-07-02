// require('dotenv').config()

// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

// const headers = {
//   'Access-Control-Allow-Origin': '*',
//   'Access-Control-Allow-Headers': 'Content-Type'
// }

// exports.handler = async (event, context) => {
//   if (!event.body || event.httpMethod !== 'POST') {
//     return {
//       statusCode: 400,
//       headers,
//       body: JSON.stringify({
//         status: 'invalid http method'
//       })
//     }
//   }

//   const data = JSON.parse(event.body)

//   if (!data.stripeToken || !data.stripeAmt || !data.stripeIdempotency) {
//     console.error('Required information is missing.')

//     return {
//       statusCode: 400,
//       headers,
//       body: JSON.stringify({
//         status: 'missing information'
//       })
//     }
//   }

//   // stripe payment processing begins here
//   try {
//     await stripe.customers
//       .create({
//         email: data.stripeEmail,
//         source: data.stripeToken
//       })
//       .then((customer) => {
//         console.log(
//           `starting the charges, amt: ${data.stripeAmt}, email: ${data.stripeEmail}`
//         )
//         return stripe.charges
//           .create(
//             {
//               currency: 'usd',
//               amount: data.stripeAmt,
//               receipt_email: data.stripeEmail,
//               customer: customer.id,
//               description: 'Sample Charge'
//             },
//             {
//               idempotency_key: data.stripeIdempotency
//             }
//           )
//           .then((result) => {
//             console.log(`Charge created: ${result}`)
//           })
//       })
//   } catch { }
// }

// https://stripe.com/docs/payments/accept-a-payment?platform=web&ui=checkout
'use strict'
const express = require('express')
const serverless = require('serverless-http')
const app = express()
// const bodyParser = require('body-parser')
// const stripe = require('stripe')('sk_test_51J7VkUDhp3PAG4PDItlRihBc9gAKkTGkbe2P3f8fmyWLlww9rH12iRp6zZo5XyFefwITBa51QUzWlvMh5e8adAvY00oEwnbWD0')
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'T-shirt'
          },
          unit_amount: 500
        },
        quantity: 1
      }
    ],
    mode: 'payment',
    success_url: 'https://willettonprimarypandc.netlify.app/success',
    cancel_url: 'https://willettonprimarypandc.netlify.app/cancel'
  })

  res.redirect(303, session.url)
})

app.listen(4242, () => console.log(`Listening on port ${4242}!`))

module.exports.handler = serverless(app)
