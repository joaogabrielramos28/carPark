import type { NextFetchEvent, NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
  const { "@carPark:token": tokenCookies } = req.cookies;
  const response = await fetch("http://localhost:3000/api", {
    method: "POST",
    body: JSON.stringify({ token: tokenCookies }),
  });

  if (response.status === 201) {
    return NextResponse.next();
  }

  return NextResponse.redirect("http://localhost:3000/");
}
