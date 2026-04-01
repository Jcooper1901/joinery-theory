// print-firebase-env.js
import("node:fs")
  .then(({ readFileSync }) => {
    const raw = readFileSync("./serviceAccountKey.json", "utf8");
    const k = JSON.parse(raw);
    console.log("FIREBASE_PROJECT_ID=" + k.project_id);
    console.log("FIREBASE_CLIENT_EMAIL=" + k.client_email);
    console.log(
      'FIREBASE_SERVICE_ACCOUNT_KEY="' +
        String(k.private_key ?? "").replace(/\n/g, "\\n") +
        '"'
    );
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
