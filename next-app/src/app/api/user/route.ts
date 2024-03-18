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

export async function POST(req: NextApiRequest, res: NextApiResponse) {
    debugger;
    // const body = await req.body()
    // const res1 = await fetch(process.env.PATH_URL_BACKEND + '/users', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(body),
    // })
    // const data = await res1.json();
    // return NextResponse.json(data)  
    console.log(req);
    return NextResponse.json({ result:res });
}

// export async function Put(request: NextRequest, { params }: { params: { id: number } }) {
//     const body = await request.json()
//     const res = await fetch(process.env.PATH_URL_BACKEND + `/api/posts/${params.id}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(body),
//     })
//     const data = await res.json();
//     return NextResponse.json(data)

// }

// export async function Delete(request: NextRequest, { params }: { params: { id: number } }) {
//     const res = await fetch(process.env.PATH_URL_BACKEND + `/api/posts/${params.id}`, {
//         next: { revalidate: 10 },
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     })
//     const data = await res.json();
//     return NextResponse.json(data)

// }