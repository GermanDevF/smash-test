import { getAllCharacters } from "services/fetch-characters";
import toSlug from "utils/to-slug";

export const useFetchCharacters = async () => {
  const characters = await getAllCharacters()
  const games = [ ...new Set(characters.map((item) => item.series.name)) ]
  const entities = games.map((game) => [
    toSlug(game),
    characters.filter((character) => character.series.name === game)
  ])
  const groupedCharactersByGames = Object.fromEntries(entities)

  return {
    characters,
    games,
    groupedCharactersByGames,
  }
}
