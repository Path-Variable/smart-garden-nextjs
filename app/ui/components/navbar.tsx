"use client"
import { getDictionary } from "@/app/dictionaries/dictionary";
import { useParams} from "next/navigation"
import { usePathname } from 'next/navigation'
import NavStyles from "@/app/styles/Nav.module.css"

function isButtonActive(page: string, button: string, isMobile: boolean) {
  return page === button ? isMobile ? NavStyles.activeMobile : NavStyles.active : isMobile ? NavStyles.inactiveMobile : NavStyles.inactive;
}

export default function Navbar() {
  const params = useParams<{ locale: string; }>()
    const dictionary = getDictionary(params.locale);
    const langLink = params.locale === "en" ? "/hr/" : "/en/";
    let paths = usePathname().split("/");
    const page = paths.length > 2 ? paths[2] : "/";
    
    return (
    <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <a href="/" className={isButtonActive(page, "/",false)}>{dictionary.navbar.project}</a>
                  <a href="/system" className={isButtonActive(page, "system", false)}>{dictionary.navbar.system}</a>
                  <a href="/team" className={isButtonActive(page, "team", false)}>{dictionary.navbar.team}</a>
                  <a href="/contact" className={isButtonActive(page, "contact", false)}>{dictionary.navbar.contact}</a>
                  <a href={langLink + page} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">{dictionary.otherLang}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a href="/" className={isButtonActive(page, "/", true)} aria-current="page">{dictionary.navbar.project}</a>
            <a href="/system" className={isButtonActive(page, "system", true)}>{dictionary.navbar.system}</a>
            <a href="/team" className={isButtonActive(page, "team", true)}>{dictionary.navbar.team}</a>
            <a href="/contact" className={isButtonActive(page, "contact", true)}>{dictionary.navbar.contact}</a>
            <a href={langLink + page} className="text-gray-300 block rounded-md px-3 py-2 text-base font-medium">{dictionary.otherLang}</a>
          </div>
        </div>
      </nav>
  )
}