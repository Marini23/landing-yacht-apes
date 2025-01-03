import { useWindowSize } from "react-use";
import { Banner } from "../About/Banner";
import { Info } from "./Info";

export const About: React.FC = () => {
  const { width } = useWindowSize();
  return (
    <>
      <Banner widthScreen={width} />
      <Info widthScreen={width} />
    </>
  );
};
