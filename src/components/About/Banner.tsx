import "./About.css";
import ApeMobile from "../../assets/main-ape-1-mobile.svg";
import ApeTablet from "../../assets/main-ape-1-tablet.svg";
import ApeDesktop from "../../assets/main-ape-1-desktop.svg";

interface BannerProps {
  widthScreen: number;
}

export const Banner: React.FC<BannerProps> = ({ widthScreen }) => {
  let apeImage: string = ApeMobile;

  if (widthScreen >= 768 && widthScreen < 1439) {
    apeImage = ApeTablet;
  } else if (widthScreen >= 1440) {
    apeImage = ApeDesktop;
  }

  return (
    <section className="banner-container">
      <p className="text-question">diD yOu seE iT ?</p>
      <h1 className="title">
        <span>YACHT</span> <span>APES</span>
      </h1>
      <p className="text-info">Apes aRe eveRywhere</p>
      <img src={apeImage} alt="ape" className="image-ape" />
      <button type="button" className="btn-mint">
        MEET APES
      </button>
      <p className="text-description">
        Yacht Ape is a collection of unique digital apes that you can own in NFT
        format
      </p>
    </section>
  );
};
