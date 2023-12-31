import './globals.css'
import Filters from 'components/filters'
import { Providers } from './provider'
import { useFetchCharacters } from 'hooks/use-fetch-characters'


export const metadata = {
  title: 'Super Smash Bros Characters',
  description: 'Mini project by GermanDevF',
}

export default async function RootLayout({ children }) {
  const { games } = await useFetchCharacters()
  return (
    <html lang="en" className='dark'>
      <body className="bg-zinc-800">
        <Providers>
          <main className="flex min-h-screen flex-col items-center justify-between ">
            <Filters games={games} />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
