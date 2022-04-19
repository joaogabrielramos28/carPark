import type { NextFetchEvent, NextRequest } from "next/server";
import { NextResponse } from "next/server";
const BASE_URL = process.env.NEXT_BASE_URL;
export async function middleware(req: NextRequest, ev: NextFetchEvent) {
  const { "@carPark:token": tokenCookies } = req.cookies;
  const response = await fetch(`${BASE_URL}/api`, {
    method: "POST",
    body: JSON.stringify({ token: tokenCookies }),
  });

  if (response.status === 201) {
    return NextResponse.next();
  } else if (response.status === 401 || response.status === 400) {
    return NextResponse.redirect(`${BASE_URL}/404`);
  }
}
