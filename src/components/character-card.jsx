import {
  Card,
  CardHeader,
  CardBody,
  Image,
} from "@nextui-org/react";
import Link from "next/link";
import toSlug from "utils/to-slug";

const CharacterCard = ({
  image,
  name,
  icon,
}) => {
  return (
    <Card isPressable className="py-4 h-auto">
      <Link href={toSlug(`/${name}`)} className="w-full">
        <CardHeader className="pb-0 pt-2 px-6 flex-col items-start">
          <div className="flex space-x-2 space-x-reverse w-full justify-between">
            <h4 className="font-bold text-large self-center">
              <span>{name}</span>
            </h4>
            <Image
              alt={`${name}-icon`}
              className="object-cover rounded-xl self-end"
              src={icon}
              width={50}
            />
          </div>
        </CardHeader>
        <CardBody className="overflow-visible py-2 items-center">
          <Image
            alt={name}
            className="object-cover rounded-xl"
            src={image}
            width={270}
          />
        </CardBody>
      </Link>
    </Card>
  );
}

export default CharacterCard