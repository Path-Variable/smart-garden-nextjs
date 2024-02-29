"use client"
import { getDictionary } from "@/app/dictionaries/dictionary";
import { useParams } from "next/navigation";


export default function Team() {
    const params = useParams<{ locale: string; }>()
    const dictionary = getDictionary(params.locale);
  return (
    <main className="bg-white flex min-h-screen flex-col items-center justify-between p-2">
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-2xl">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{dictionary.team.title}</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">{dictionary.team.subtitle}</p>
                </div>
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                <li>
                    <a href="https://www.linkedin.com/in/isaric-cro">
                    <div className="flex items-center gap-x-6">
                        <img className="h-16 w-16 rounded-full" src="https://media.licdn.com/dms/image/D4D03AQF7q68hxdRkOA/profile-displayphoto-shrink_100_100/0/1707125658575?e=1714003200&v=beta&t=SdTOKZLTL8BltsBL7JNhs4842PS80S0nL6beWaIoUck" alt=""/>
                        <div>
                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Ivan Šarić</h3>
                        <p className="text-sm font-semibold leading-6 text-green-600">{dictionary.team.ivan.role}</p>
                        </div>
                    </div>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/lukaszdec/">
                    <div className="flex items-center gap-x-6">
                        <img className="h-16 w-16 rounded-full" src="https://media.licdn.com/dms/image/D4D35AQGIUQfE1Dd2Yg/profile-framedphoto-shrink_200_200/0/1673597583885?e=1709830800&v=beta&t=pOVrHePDWwa6h53VQziJrgLi0715h0qmPlUXYG3-8_o" alt=""/>
                        <div>
                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Lukasz Dec</h3>
                        <p className="text-sm font-semibold leading-6 text-green-600">{dictionary.team.lukasz.role}</p>
                        </div>
                    </div>
                    </a>
                </li>
                </ul>
            </div>
            </div>
    </main>
    )
}