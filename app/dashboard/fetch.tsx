import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function fuser() {
     const { getUser } = getKindeServerSession();
      const user = await getUser();
    
      // Get user's name from Kinde, with fallbacks
      const username = user ? 
        `@${(user.given_name || 
          user.email?.split('@')[0] || 
          user.id || 
          'guest').toLowerCase().replace(/\s+/g, '')}` : 
        "@guest";
      
      return username;
    }   
