import { Chip } from "@nextui-org/react";

/**
 * 
 * @param {Array} games 
 * @returns JSX Component
 */
const AlsoAppearsIn = ({ games = [] }) => {
  if (!games.length) {
    return <Chip color="secondary">SSB4</Chip>
  }

  return (
    <>
      {games.map((item) => (
        <Chip color="secondary" key={item}>{item}</Chip>
      ))}
    </>
  )

}

export default AlsoAppearsIn