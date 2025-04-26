import middleware from 'next-auth/middleware'

export default middleware;

export const config = {
    // *: je 0 ili vise
    // +: je 1 ili vise
    // ?: je 0 ili 1
    matcher: ['/dashboard/:path*']
}
