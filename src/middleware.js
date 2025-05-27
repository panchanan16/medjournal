import { NextResponse } from 'next/server'

// Configure your routes
const publicRoutes = [
  '/',
  '/login',
  '/register',
  '/forgot-password',
  '/about',
  '/contact'
]

const protectedRoutes = [
  '/dashboard',
  '/profile',
  '/settings',
  '/account'
]

const adminRoutes = [
  '/admin'
]

// Check if current path matches any route patterns
function isPublicRoute(pathname) {
  return publicRoutes.some(route =>
    pathname === route || pathname.startsWith(route + '/')
  )
}

function isProtectedRoute(pathname) {
  return protectedRoutes.some(route =>
    pathname === route || pathname.startsWith(route + '/')
  )
}

function isAdminRoute(pathname) {
  return adminRoutes.some(route =>
    pathname === route || pathname.startsWith(route + '/')
  )
}

// Verify user authentication with your backend
async function verifyAuth(token) {
  try {
    const response = await fetch(`${process.env.BACKEND_URL}/api/auth/verify`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })

    if (response.ok) {
      return await response.json()
    }
    return null
  } catch (error) {
    console.error('Auth verification failed:', error)
    return null
  }
}

export async function middleware(request) {
  const { pathname } = request.nextUrl

  // Skip for static files and Next.js internals
  // if (
  //   pathname.startsWith('/_next/') ||
  //   pathname.startsWith('/favicon.ico') ||
  //   pathname.includes('.') ||
  //   pathname.startsWith('/api/')
  // ) {
  //   return NextResponse.next()
  // }

  // Allow public routes
  // if (isPublicRoute(pathname)) {
  //   return NextResponse.next()
  // }

  // Get token from cookies
  const token = request.cookies.get('token')
  const userRole = request.cookies.get('role')

  if (token && userRole && userRole.value === 'admin') {
    return NextResponse.next()
  }

  const loginUrl = new URL('/login', request.url)
  return NextResponse.redirect(loginUrl)



  // If no token and trying to access protected route
  // if (!token && (isProtectedRoute(pathname) || isAdminRoute(pathname))) {
  //   const loginUrl = new URL('/login', request.url)
  //   loginUrl.searchParams.set('redirect', pathname)
  //   return NextResponse.redirect(loginUrl)
  // }

  // If token exists, verify it with your backend
  // if (token) {
  //   const user = await verifyAuth(token)

  //   // Invalid token - redirect to login
  //   if (!user) {
  //     const response = NextResponse.redirect(new URL('/login', request.url))
  //     // Clear the invalid token
  //     response.cookies.delete('token')
  //     return response
  //   }

  // Check admin routes
  // if (isAdminRoute(pathname) && user.role !== 'admin') {
  //   return NextResponse.redirect(new URL('/unauthorized', request.url))
  // }

  // User is authenticated, continue
  //   return NextResponse.next()
  // }
}

// Configure which paths trigger the middleware
export const config = {
  matcher: [
    // '/auth/:path*',
    '/admin/:path*'
  ]
}