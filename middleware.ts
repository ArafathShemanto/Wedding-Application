import authConfig from '@/auth.config';
import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  apiUploadPrefix,
  authRoutes,
  publicRoutes,
} from '@/routes';
import NextAuth from 'next-auth';

const { auth } = NextAuth(authConfig);

const locales = ['en-US', 'af', 'bd', 'bt', 'in', 'lk', 'mv', 'np', 'pk'];

async function getLocale(req: Request): Promise<string> {
  try {
    // Fetch user's IP data
    const ipData = await fetch('https://ipapi.co/json/');
    const { country_code } = await ipData.json();
    // Check if the country code is in the list of supported locales
    if (locales.includes(country_code.toLowerCase())) {
      return country_code.toLowerCase();
    }
  } catch (error) {
    console.error('Error fetching location:', error);
  }
  // If no supported locale is found, default to 'en-US'
  return 'en-US';
}

export default auth(async(req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const { pathname } = nextUrl;

  const isAPIAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isAPIUploadRoute = nextUrl.pathname.startsWith(apiUploadPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isAPIAuthRoute || isAPIUploadRoute || authRoutes.includes(pathname)) {
    return null;
  }

   const pathnameHasLocale = locales.some(
     (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
   );

   if (!pathnameHasLocale) {
     try {
       const locale = await getLocale(req); // Fetch the locale asynchronously
       nextUrl.pathname = `/${locale}${pathname}`;
       return Response.redirect(nextUrl.href);
     } catch (error) {
       console.error('Error determining locale:', error);
     }
   }

if (!isLoggedIn && !isPublicRoute) {
  let callbackUrl = nextUrl.pathname;
  if (nextUrl.search) {
    callbackUrl += nextUrl.search;
  }

  const encodedCallbackUrl = encodeURIComponent(callbackUrl);

  return Response.redirect(
    new URL(`/auth/login?callbackUrl=${encodedCallbackUrl}`, nextUrl).href
  );
}

  return null;
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
