import { NextResponse } from 'next/server'
import { auth } from './lib/auth'
import { headers } from 'next/headers'
import { redirect } from 'next/dist/server/api-utils'

// This function can be marked `async` if using `await` inside
export async function proxy(request) {

    const session = await auth.api.getSession({
        headers: await headers()
    })

    if (!session) {
        return NextResponse.redirect(new URL('/signin', request.url))

    }



    // return 
}

export const config = {
    matcher: ['/profile', "/allBooks/:path"],
}