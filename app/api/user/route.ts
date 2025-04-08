// app/api/user/route.js
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function GET() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return new Response(JSON.stringify({ username: "@guest" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

// Use full name if available, otherwise fall back to alternatives
const username = `@${(
    (user.given_name && user.family_name) 
        ? `${user.given_name}${user.family_name}` 
        : user.given_name ||
            user.email?.split('@')[0] ||
            user.id ||
            'guest'
).toLowerCase().replace(/\s+/g, '')}`;

  return new Response(JSON.stringify({ username }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}