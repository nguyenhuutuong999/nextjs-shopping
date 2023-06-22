import { getSession } from "next-auth/react";

// export default async function authorize(req, res, next) {
//   const session = await getSession({ req });

//   if (!session) {
//     res.statusCode = 401;
//     res?.end("Unauthorized");
//     return;
//   }

//   const isAdmin = session.user
//   console.log('isAdmin:______________________', isAdmin)

//   if (isAdmin === "huutuong999") {
//     res.statusCode = 403;
//     res?.end("Forbidden");
//     return;
//   }

//   next();
// }

import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server";

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    console.log(req.nextauth.token)
    return NextResponse.rewrite(new URL("/admin",req.url))
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        console.log('token:', token)
        return token?.role === "admin"
      },
    },
  }
)

export const config = { matcher: ["/admin"] }

// export {default} from "next-auth/middleware";

// export const config = { matcher: ["/admin"] }