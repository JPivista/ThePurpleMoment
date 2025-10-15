import { NextResponse } from 'next/server'

export function middleware(request) {
    const url = request.nextUrl.clone()

    // Check if the request is coming from www.purplemovement.in
    if (url.hostname === 'www.purplemovement.in') {
        // Redirect to purplemovement.in (without www)
        url.hostname = 'purplemovement.in'
        return NextResponse.redirect(url, 301) // Permanent redirect
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}
