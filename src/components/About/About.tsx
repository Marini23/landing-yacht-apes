import { useWindowSize } from "react-use";
import { Banner } from "../About/Banner";

export const About: React.FC = () => {
  const { width } = useWindowSize();
  console.log(width);
  return <Banner widthScreen={width} />;
};
