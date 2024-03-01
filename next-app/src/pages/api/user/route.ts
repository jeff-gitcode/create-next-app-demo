import { NextRequest, NextResponse } from 'next/server'

export async function GETLIST() {
    const res = await fetch(process.env.PATH_URL_BACKEND + '/users', {
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const result = await res.json()
    return NextResponse.json({ result })
}

export async function GETBYID(id: string) {
    const res = await fetch(process.env.PATH_URL_BACKEND + `/users/${id}`, {
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const result = await res.json()
    return NextResponse.json({ result })
}

export async function POST(request: NextRequest) {
    const body = await request.json()
    const res = await fetch(process.env.PATH_URL_BACKEND + '/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
    const data = await res.json();
    return NextResponse.json(data)

}

export async function PUT(request: NextRequest, { params }: { params: { id: number } }) {
    const body = await request.json()
    const res = await fetch(process.env.PATH_URL_BACKEND + `/api/posts/${params.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
    const data = await res.json();
    return NextResponse.json(data)

}

export async function DELETE(request: NextRequest, { params }: { params: { id: number } }) {
    const res = await fetch(process.env.PATH_URL_BACKEND + `/api/posts/${params.id}`, {
        next: { revalidate: 10 },
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const data = await res.json();
    return NextResponse.json(data)

}