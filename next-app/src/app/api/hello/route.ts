'use server';

import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ result: 'Hello World' });
}