'use server';

import type { NextApiRequest, NextApiResponse } from 'next'
import { useRouter } from 'next/navigation';
import { NextRequest, NextResponse } from 'next/server';


export async function GET(req: NextApiRequest, res: NextApiResponse) {
    const { id } = res.params;

    const res1 = await fetch(process.env.PATH_URL_BACKEND + `/users/${id}`, {
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const result = await res1.json()
    return NextResponse.json({ result })
}

export async function PUT(req: NextApiRequest, res: NextApiResponse) {
    const { id } = res.params;
    debugger;
    // const body = await req.body()
    // const res = await fetch(process.env.PATH_URL_BACKEND + `/users/${params.id}`, {
    //     method: 'PUT',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(body),
    // })
    // const data = await res.json();
    // return NextResponse.json(data)
    return NextResponse.json({ result: req });
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