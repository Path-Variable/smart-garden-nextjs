import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

export const runtime = 'experimental-edge' // 'nodejs' (default) | 'edge'

const i18n = { locales : ['en', 'hr'], defaultLocale : 'hr' }

function getLocale(request: NextRequest, i18n : {locales : string[], defaultLocale : string}): string {
  const { locales, defaultLocale } = i18n;

  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales
  );

  console.log("languages are " + languages)

  return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
  let response;
  let nextLocale;


  const { locales, defaultLocale } = i18n;

  const pathname = request.nextUrl.pathname;

  const pathLocale = locales.find(
    (locale : string) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  console.log("path locale is " + pathLocale)

  if (pathLocale) {


    nextLocale = pathLocale;
  } else {
    const isFirstVisit = !request.cookies.has("NEXT_LOCALE");

    const locale = isFirstVisit ? getLocale(request, i18n) : request.cookies.get("NEXT_LOCALE")?.value || defaultLocale;

    let newPath = `${locale}${pathname}`;
    if (request.nextUrl.search) newPath += request.nextUrl.search;

    response =
      locale === defaultLocale
        ? NextResponse.rewrite(new URL(newPath, request.url))
        : NextResponse.redirect(new URL(newPath, request.url));
    nextLocale = locale;
  }

  if (!response) response = NextResponse.next();

  if (nextLocale) response.cookies.set("NEXT_LOCALE", nextLocale);

  return response;
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|img/|favicon.ico).*)",
};
