import { stripe } from "services/stripe/stripe";
import { NextApiResponse, NextApiRequest } from "next";
import admin from "services/firebase-admin";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { quantity, price, schedule_id } = req.body;
  const { "@carPark:token": token } = req.cookies;
  if (req.method === "POST" && token) {
    admin
      .auth()
      .verifyIdToken(token)
      .then(async (decodedToken) => {
        const { email, name } = decodedToken;
        try {
          const Hascostumer = await stripe.customers.search({
            query: `email:\"${email}"\ `,
          });
          let customerId = Hascostumer.data[0].id;

          if (!customerId) {
            const customer = await stripe.customers.create({
              email,
              name,
            });

            customerId = customer.id;
          }

          const session = await stripe.checkout.sessions.create({
            customer: customerId,
            payment_method_types: ["card", "boleto"],
            mode: "payment",
            line_items: [
              {
                name,
                quantity: quantity,
                currency: "brl",
                amount: price * 100,
              },
            ],
            metadata: {
              schedule_id,
            },
            success_url: `${req.headers.origin}/success=true`,
            cancel_url: `${req.headers.origin}/canceled=true`,
          });
          res.status(200).json({ sessionId: session.id });
        } catch (err: any) {
          res.status(404).send({ error: err.message });
        }
      });
  } else {
    res.status(404).end();
  }
}
