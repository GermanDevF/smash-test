'use client'
import { Chip } from "@nextui-org/react"
import Link from "next/link"
import { useParams } from "next/navigation"
import toSlug from "utils/to-slug"

const Filters = ({ games }) => {
  const { name } = useParams()

  if (!games.map((g) => toSlug(g)).includes(name) && name) {
    return null
  }

  return (
    <div className="flex gap-x-2 gap-y-1 items-center py-14 px-10 flex-wrap">
      {games.map((game) => (
        <Link href={`/game/${toSlug(game)}`}>
          <Chip
            key={game}
            variant="shadow"
            classNames={{
              base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30 hover:cursor-pointer",
              content: "drop-shadow shadow-black text-white",
            }}
          >
            {game}
          </Chip>
        </Link>
      ))
      }
      {name && (<Link href="/">
        <Chip variant="shadow">
          Clear Filter
        </Chip>
      </Link>)}
    </div >
  )
}

export default Filters