import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const regex = new RegExp("\\b" + "dashboard" + "\\b", "i");

  if (!token && regex.test(request.url)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (token && !regex.test(request.url)) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/"],
};
