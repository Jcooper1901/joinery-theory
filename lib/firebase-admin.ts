// lib/firebase-admin.ts
import admin from "firebase-admin";

let app: admin.app.App | null = null;

type ServiceAccountLike = {
  project_id?: string;
  client_email?: string;
  private_key?: string;
};

function parseServiceAccountKey(rawKey: string) {
  const trimmed = rawKey.trim();

  if (trimmed.startsWith("{")) {
    const parsed = JSON.parse(trimmed) as ServiceAccountLike;
    return {
      projectId: parsed.project_id,
      clientEmail: parsed.client_email,
      privateKey: parsed.private_key,
    };
  }

  return {
    projectId: undefined,
    clientEmail: undefined,
    privateKey: rawKey,
  };
}

export function getAdminApp(): admin.app.App {
  if (app) return app;
  if (admin.apps.length) {
    app = admin.app();
    return app;
  }

  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const rawKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;

  if (!projectId || !clientEmail || !rawKey) {
    throw new Error(
      "Missing Firebase Admin env vars: FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_SERVICE_ACCOUNT_KEY"
    );
  }

  const parsedKey = parseServiceAccountKey(rawKey);
  const resolvedProjectId = parsedKey.projectId ?? projectId;
  const resolvedClientEmail = parsedKey.clientEmail ?? clientEmail;
  const resolvedPrivateKey = parsedKey.privateKey;

  if (!resolvedProjectId || !resolvedClientEmail || !resolvedPrivateKey) {
    throw new Error(
      "Invalid FIREBASE_SERVICE_ACCOUNT_KEY. Provide either the raw private key or the full service account JSON."
    );
  }

  const privateKey = resolvedPrivateKey.includes("\\n")
    ? resolvedPrivateKey.replace(/\\n/g, "\n")
    : resolvedPrivateKey;

  app = admin.initializeApp({
    credential: admin.credential.cert({
      projectId: resolvedProjectId,
      clientEmail: resolvedClientEmail,
      privateKey,
    }),
    projectId: resolvedProjectId,
  });

  return app;
}

export function getAdminServices() {
  const app = getAdminApp();
  return {
    auth: admin.auth(app),
    db: admin.firestore(app),
  };
}
