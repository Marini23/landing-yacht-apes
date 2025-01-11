import { Banner } from "../About/Banner";
import { Info } from "./Info";
import { RunningLine } from "./RunningLine";

interface AboutProps {
  widthScreen: number;
}

export const About: React.FC<AboutProps> = ({ widthScreen }) => {
  return (
    <>
      <Banner />
      <Info widthScreen={widthScreen} />
      <RunningLine />
    </>
  );
};
