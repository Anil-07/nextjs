// pages/api/hello.js

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: `Hello from the API route! ${process.env.TEST_ENV}`,
  });
}
