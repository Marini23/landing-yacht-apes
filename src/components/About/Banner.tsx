import "./About.css";
import ApeMobile_1x from "../../assets/main-ape-1-mobile-1x.png";
import ApeMobile_2x from "../../assets/main-ape-1-mobile-2x.png";
import ApeTablet_1x from "../../assets/main-ape-1-tablet-1x.png";
import ApeTablet_2x from "../../assets/main-ape-1-tablet-2x.png";
import ApeDesktop_1x from "../../assets/main-ape-1-desktop-1x.png";
import ApeDesktop_2x from "../../assets/main-ape-1-desktop-2x.png";
import { Icon } from "../Icon";
import {
  BannerContainer,
  BannerWrap,
  BtnMint,
  ImageApe,
  LogoContainer,
  TextDescription,
  TextInfo,
  TextQuestion,
  Title,
} from "./Banner.styled";

export const Banner: React.FC = () => {
  return (
    <BannerWrap id="about">
      <BannerContainer>
        <TextQuestion>diD yOu seE iT ?</TextQuestion>
        <Title>
          <span>YACHT</span> <span>APES</span>
        </Title>
        <TextInfo>Apes aRe eveRywhere</TextInfo>
        <ImageApe>
          <source
            srcSet={`${ApeMobile_1x}, ${ApeMobile_2x} 2x`}
            media="(max-width: 743px)"
          />
          <source
            srcSet={`${ApeTablet_1x}, ${ApeTablet_2x} 2x `}
            media="(min-width: 744px) and (max-width: 1439px)"
          />
          <source
            media="(min-width: 1440px)"
            srcSet={`${ApeDesktop_1x}, ${ApeDesktop_2x} 2x`}
          />
          <img src={ApeMobile_1x} alt="illustration ape" />
        </ImageApe>
        <a href="#mint">
          <BtnMint type="button">MEET APES</BtnMint>
        </a>
        <TextDescription>
          Yacht Ape is a collection of unique digital apes that you can own in
          NFT format
        </TextDescription>
        <LogoContainer href="/" className="logo-container">
          {" "}
          <Icon
            name="icon-icon-logo-black"
            className="logo-icon"
            color="#1E1E1E"
          />
        </LogoContainer>
      </BannerContainer>
    </BannerWrap>
  );
};
