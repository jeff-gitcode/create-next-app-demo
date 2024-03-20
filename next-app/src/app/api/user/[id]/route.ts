'use server';

import type { NextApiRequest, NextApiResponse } from 'next'
import { NextRequest, NextResponse } from 'next/server';


export async function GET(req: Request, res: NextApiResponse) {
    const { id } = res.params;

    const res1 = await fetch(process.env.PATH_URL_BACKEND + `/users/${id}`, {
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const result = await res1.json()
    return NextResponse.json({ result })
}

export async function PUT(req: Request, res: NextApiResponse) {
    const { id } = res.params;
    // const requestHeaders = new Headers(req.headers);
    const body = await req.json();
    console.log(body);
    // const body = await req.body()
    const result = await fetch(process.env.PATH_URL_BACKEND + `/users/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })

    const data = await result.json();
    return NextResponse.json(data);
}

export async function DELETE(req: NextRequest, res: NextApiResponse) {
    const { id } = res.params;

    const res1 = await fetch(process.env.PATH_URL_BACKEND + `/users/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const result = await res1.json()
    return NextResponse.json({ result })

}