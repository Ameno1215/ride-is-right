import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]/route";
import { NextResponse } from "next/server";

// get the session information server side

export async function GET(request: Request) {
    const session = await getServerSession(authOptions)

    console.log('GET API', session)
    return NextResponse.json({ authenticated: !!session}) // savoir si on est authentifié dans le terminal
}