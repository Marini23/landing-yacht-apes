import "./About.css";
import ApeMobile_1x from "../../assets/main-ape-1-mobile-1x.png";
import ApeMobile_2x from "../../assets/main-ape-1-mobile-2x.png";
import ApeTablet_1x from "../../assets/main-ape-1-tablet-1x.png";
import ApeTablet_2x from "../../assets/main-ape-1-tablet-2x.png";
import ApeDesktop_1x from "../../assets/main-ape-1-desktop-1x.png";
import ApeDesktop_2x from "../../assets/main-ape-1-desktop-2x.png";



export const Banner: React.FC = () => {


  return (
    <div className="banner-wrap">
      <section className="banner-container">
        <p className="text-question">diD yOu seE iT ?</p>
        <h1 className="title">
          <span>YACHT</span> <span>APES</span>
        </h1>
        <p className="text-info">Apes aRe eveRywhere</p>
        {/* <img src={apeImage} alt="ape" className="image-ape" /> */}
        <picture className="image-ape">
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
        </picture>
        <button type="button" className="btn-mint">
          MEET APES
        </button>
        <p className="text-description">
          Yacht Ape is a collection of unique digital apes that you can own in
          NFT format
        </p>
      </section>
    </div>
  );
};
