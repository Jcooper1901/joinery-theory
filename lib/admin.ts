export const ADMIN_EMAIL =
  process.env.NEXT_PUBLIC_ADMIN_EMAIL ?? "cooperjackp@gmail.com";

export function isAdminEmail(email: string | null | undefined) {
  return typeof email === "string" && email.toLowerCase() === ADMIN_EMAIL.toLowerCase();
}
