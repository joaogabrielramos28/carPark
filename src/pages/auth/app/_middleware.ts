import type { NextFetchEvent, NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { parseCookies } from "nookies";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  const { "carPark.token": tokenCookies, "carPark.user": userCookies } =
    req.cookies;

  if (tokenCookies && userCookies) {
    return NextResponse.next();
  }

  return NextResponse.redirect("http://localhost:3000/");
}
