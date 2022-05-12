import { NextApiRequest, NextApiResponse } from "next";
import admin from "services/firebase-admin";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { uid } = req.body;

  try {
    await admin.auth().setCustomUserClaims(uid, {
      admin: true,
    });
    res.status(204).json({ message: "User promoted to admin" });
  } catch (error) {
    res.status(400).json({ error: "Error on change permission" });
  }
}
