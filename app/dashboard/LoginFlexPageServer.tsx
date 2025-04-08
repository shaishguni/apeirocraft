// LoginFlexPageServer.jsx (Server Component, no "use client")
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import LoginFlexPageClient from "./page";

export default async function LoginFlexPageServer() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const username = user
    ? `@${(
        user.given_name ||
        user.email?.split('@')[0] ||
        user.id ||
        'guest'
      ).toLowerCase().replace(/\s+/g, '')}`
    : '@guest';

  return <LoginFlexPageClient username={username} />;
}