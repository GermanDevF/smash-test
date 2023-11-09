import './globals.css'
import Filters from 'components/filters'
import { Providers } from './provider'
import { useFetchCharacters } from 'hooks/use-fetch-characters'
import Image from 'next/image'


export const metadata = {
  title: 'Super Smash Bros Characters',
  description: 'Mini project by GermanDevF',
}

export default async function RootLayout({ children }) {
  const { games } = await useFetchCharacters()
  return (
    <html lang="en" className='dark'>
      <body className="bg-slate-700">
        <Providers>
          <main className="flex min-h-screen flex-col items-center justify-between p-y-24">
            <Image src="/logo.webp" width={100} height={100} />
            <Filters games={games} />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
