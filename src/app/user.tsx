'use client'

import { useSession } from "next-auth/react"



// get the session information server side

export const User = () => {
    const {data:session} = useSession()

    return <pre>{JSON.stringify(session)}</pre>
}