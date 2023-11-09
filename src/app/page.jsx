import Filters from "components/filters"
import { Characters } from "components/list-of-characters"
import { useFetchCharacters } from "hooks/use-fetch-characters"

export default async function Home() {
  const {
    games,
    characters,
    groupedCharactersByGames,
  } = await useFetchCharacters()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section>
        <Characters characters={characters} />
      </section>
    </main>
  )
}