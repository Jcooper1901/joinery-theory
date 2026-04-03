import { NextResponse } from "next/server";
import { getAdminServices } from "@/lib/firebase-admin";
import { isAdminEmail } from "@/lib/admin";

export const runtime = "nodejs";

async function requireAdmin(request: Request) {
  const { auth: adminAuth, db: adminDb } = getAdminServices();
  const authHeader = request.headers.get("authorization");

  if (!authHeader?.startsWith("Bearer ")) {
    return { error: NextResponse.json({ error: "Unauthorized." }, { status: 401 }) };
  }

  const idToken = authHeader.slice("Bearer ".length);
  const decoded = await adminAuth.verifyIdToken(idToken);
  const email = decoded.email ?? null;

  if (!isAdminEmail(email)) {
    return { error: NextResponse.json({ error: "Forbidden." }, { status: 403 }) };
  }

  return { adminDb, adminAuth };
}

export async function GET(request: Request) {
  try {
    const guard = await requireAdmin(request);
    if ("error" in guard) {
      return guard.error;
    }

    const { adminAuth, adminDb } = guard;
    const authUsers = await adminAuth.listUsers(1000);
    const userDocs = await adminDb.collection("users").get();
    const firestoreByUid = new Map(
      userDocs.docs.map((docSnap) => [docSnap.id, docSnap.data() as Record<string, unknown>])
    );

    const users = authUsers.users
      .map((userRecord) => {
        const firestoreData = firestoreByUid.get(userRecord.uid);
        return {
          uid: userRecord.uid,
          email: userRecord.email ?? null,
          emailVerified: userRecord.emailVerified,
          disabled: userRecord.disabled,
          role: typeof firestoreData?.role === "string" ? firestoreData.role : "free",
          pro: Boolean(firestoreData?.pro),
          planStatus:
            typeof firestoreData?.planStatus === "string" ? firestoreData.planStatus : "none",
          createdAt: userRecord.metadata.creationTime ?? null,
          lastSignInAt: userRecord.metadata.lastSignInTime ?? null,
        };
      })
      .sort((a, b) => (a.email ?? "").localeCompare(b.email ?? ""));

    return NextResponse.json({ users });
  } catch (error) {
    console.error("Admin user email list error:", error);
    return NextResponse.json({ error: "Could not load user emails." }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const guard = await requireAdmin(request);
    if ("error" in guard) {
      return guard.error;
    }

    const { adminAuth, adminDb } = guard;
    const authUsers = await adminAuth.listUsers(1000);

    let updated = 0;
    const writes = authUsers.users
      .filter((userRecord) => Boolean(userRecord.email))
      .map(async (userRecord) => {
        const email = userRecord.email ?? null;
        if (!email) {
          return;
        }

        updated += 1;
        await adminDb.collection("users").doc(userRecord.uid).set(
          {
            email,
            emailLower: email.toLowerCase(),
            emailVerified: userRecord.emailVerified,
            authUpdatedAtMs: Date.now(),
          },
          { merge: true }
        );
      });

    await Promise.all(writes);

    return NextResponse.json({ ok: true, updated });
  } catch (error) {
    console.error("Admin user email backfill error:", error);
    return NextResponse.json({ error: "Could not backfill user emails." }, { status: 500 });
  }
}
