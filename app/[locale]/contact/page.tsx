"use client"
import { getDictionary } from "@/app/dictionaries/dictionary";
import { useParams } from "next/navigation";


export default function Contact() {
  const params = useParams<{ locale: string; }>()
  const dictionary = getDictionary(params.locale);
  return (
    <main className="bg-white flex min-h-screen flex-col items-center justify-between p-2">
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-green-600">{dictionary.contact.supertitle}</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{dictionary.contact.title}</p>
                    <p className="mt-6 text-lg leading-3 text-gray-600">{dictionary.contact.line_1}</p>
                    <p className="mt-6 text-lg leading-3 text-gray-600">{dictionary.contact.line_2}</p>
                    <p className="mt-6 text-lg leading-3 text-gray-600">{dictionary.contact.line_3}</p>
                    <p className="mt-6 text-lg leading-3 text-gray-600">{dictionary.contact.line_4}</p>
                    <p className="mt-6 text-lg leading-3 text-gray-600">{dictionary.contact.line_5}</p>
                    <p className="mt-6 text-lg leading-3 text-gray-600">{dictionary.contact.line_6}</p>
                    <p className="mt-6 text-lg leading-3 text-gray-600">{dictionary.contact.line_7}</p>
                    <div className="py-6">
                        <a href="https://calendar.app.google/zmKwpbNh8THvjiMu7">
                            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                            {dictionary.contact.video}
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}