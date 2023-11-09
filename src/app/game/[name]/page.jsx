import { Characters } from 'components/list-of-characters';
import { useFetchCharacters } from 'hooks/use-fetch-characters';

const Grouped = async ({ params: { name } }) => {
  const { groupedCharactersByGames } = await useFetchCharacters()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section>
        <Characters characters={groupedCharactersByGames[ name ] || []} />
      </section>
    </main>
  )
}

export default Grouped