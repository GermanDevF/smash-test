import CharacterCard from "./character-card";

export const Characters = async ({ characters }) => {
  return (
    <div className="m-3">
      <div className="grid grid-cols-3 gap-3">
        {characters.map((item) => (
          <CharacterCard
            key={item.order}
            name={item.name}
            image={item.images.portrait}
            icon={item.images.icon}
          />
        ))}
      </div>
    </div>
  )
}
