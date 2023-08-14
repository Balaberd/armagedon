import Image from "next/image";
import { FC } from "react";

interface Props {
  size: "S" | "L";
}

interface IIconSizeMap {
  S: number;
  L: number;
}

const ICON_SIZE_MAP: IIconSizeMap = {
  S: 24,
  L: 40,
};

export const AsteroidImage: FC<Props> = ({ size }) => {
  return (
    <Image
      src={"/asteroid.png"}
      alt="asteroin icon"
      height={ICON_SIZE_MAP[size]}
      width={ICON_SIZE_MAP[size] * 0.916}
    />
  );
};
