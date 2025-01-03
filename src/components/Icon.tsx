import sprite from "../assets/symbol-defs.svg";

interface IconProps {
  name: string;
  size: number;
}

export const Icon: React.FC<IconProps> = ({ name, size }) => {
  return (
    <svg width={size} height={size}>
      <use xlinkHref={`${sprite}#${name}`} />
    </svg>
  );
};
