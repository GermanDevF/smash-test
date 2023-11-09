import { Characters } from "components/list-of-characters"
import { useFetchCharacters } from "hooks/use-fetch-characters"

export default async function Home() {
  const { characters } = await useFetchCharacters()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 sm:p-12">
      <section>
        <Characters characters={characters} />
      </section>
    </main>
  )
}
