import { NextRequest, NextResponse } from 'next/server'
import { NextApiRequest, NextApiResponse } from 'next/types';

export async function GET() {
    const res = await fetch(process.env.PATH_URL_BACKEND + '/users', {
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const result = await res.json()
    return NextResponse.json({ result })
}

export async function POST(req: NextRequest, res: NextApiResponse) {
    const body = await req.json()
    const res1 = await fetch(process.env.PATH_URL_BACKEND + '/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
    const data = await res1.json();
    return NextResponse.json(data)
}
