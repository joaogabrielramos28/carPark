import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "services/stripe/stripe";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, price, id, images } = req.body;

    try {
      const product = await stripe.products.create({
        name,
        id,
        default_price_data: {
          currency: "brl",
          unit_amount: price * 100,
        },
        images: [images],
      });
      res
        .status(200)
        .json({ message: "Product created successfully", product });
    } catch (err) {
      res.status(404).json({ message: "Error creating product" });
    }
  } else {
    res.status(404).end();
  }
}
