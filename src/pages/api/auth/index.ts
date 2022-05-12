import { NextApiRequest, NextApiResponse } from "next";
import admin from "services/firebase-admin";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = JSON.parse(req.body).token;

  if (token) {
    const verifiedToken = await admin.auth().verifyIdToken(token);

    if (verifiedToken) {
      res.status(201).json({ verifiedToken });
      return new Response("You are logged in", {
        status: 201,
      });
    } else {
      res.status(401).json({ error: "Unauthorized" });
      throw new Error("Token is not valid");
    }
  } else {
    return res.status(400).json({ error: "No token" });
  }
}
