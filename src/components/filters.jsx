'use client'
import { Chip } from "@nextui-org/react"
import Image from "next/image"
import Link from "next/link"
import { useParams, usePathname } from "next/navigation"
import toSlug from "utils/to-slug"

const Filters = ({ games }) => {
  const { name } = useParams()
  const pathname = usePathname()

  if (!pathname.includes('game') && pathname !== '/') {
    return null
  }

  return (
    <>
      <Image
        src="/logo.webp"
        width={400}
        height={400}
        className=""
      />
      <div className="flex gap-x-2 gap-y-1 items-center py-14 px-10 flex-wrap">
        {games.map((game) => (
          <Link href={`/game/${toSlug(game)}`} key={game}>
            <Chip
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
        {name && (
          <Link href="/">
            <Chip variant="shadow">
              Clear Filter
            </Chip>
          </Link>
        )}
      </div >
    </>
  )
}

export default Filters