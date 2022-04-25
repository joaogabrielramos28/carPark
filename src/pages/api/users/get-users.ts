import { NextApiRequest, NextApiResponse } from "next";
import admin from "../../../services/firebase-admin";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const users = await admin.auth().listUsers();

  if (users) {
    res.status(200).json({ users });
  } else {
    res.status(400).json({ error: "Error on catch users" });
  }
}
