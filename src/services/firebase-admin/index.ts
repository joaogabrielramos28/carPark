import admin from "firebase-admin";
import fireConfig from "../../config/carpark-63baa-firebase-adminsdk-589pc-2396899626.json";

try {
  admin.initializeApp({
    credential: admin.credential.cert({
      clientEmail: fireConfig.client_email,
      privateKey: fireConfig.private_key,
      projectId: fireConfig.project_id,
    }),
  });
  console.log("Initialized.");
} catch (error) {
  /*
   * We skip the "already exists" message which is
   * not an actual error when we're hot-reloading.
   */
  if (!/already exists/u.test(error.message)) {
    console.error("Firebase admin initialization error", error.stack);
  }
}

export default admin;
