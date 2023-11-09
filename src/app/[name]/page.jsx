import { Chip, Image } from "@nextui-org/react";
import AlsoAppearsIn from "components/also-appears-in";
import Link from "next/link";
import { getCharacter } from "services/fetch-characters";
import { colorsAvailabilityEnum } from "utils/enums";

const Character = async ({ params: { name } }) => {
  const character = await getCharacter(name.replaceAll('-', ' '))
  return (
    <>
      <Link href="/" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 absolute top-12 right-12 opacity-40">
        <span class="sr-only">Close menu</span>
        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </Link>
      <div className="flex flex-col justify-center h-screen items-center sm:flex-row">
        <Image
          alt={`${name}-icon`}
          src={character.series.icon}
          className="contrast-0 fixed object-cover top-[25%] rounded-none"
          width={500}
        />
        <Image
          class="object-cover w-full rounded-t-lg"
          src={character.images.portrait}
          alt={name}
          width={500}
        />
        <div class="flex flex-col justify-between p-4 leading-normal gap-4">
          <h5 class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            {character.name}
          </h5>
          <Image
            alt={`${name}-icon`}
            className="object-cover rounded-xl self-end"
            src={character.images.icon}
            width={50}
          />
          <Chip variant="faded" color={colorsAvailabilityEnum[ character.availability ]}>{character.availability}</Chip>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {character.series.name}
          </p>
          <div className="flex flex-row w-full gap-1 relative bottom-2">
            <AlsoAppearsIn games={character.alsoAppearsIn} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Character