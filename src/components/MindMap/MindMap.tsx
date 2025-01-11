import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";

import "./MindMap.css";
import { Icon } from "../Icon";

interface MindMapProps {
  widthScreen: number;
}

export const MindMap: React.FC<MindMapProps> = ({ widthScreen }) => {
  return (
    <>
      {widthScreen < 768 ? (
        <section className="mind-map-section">
          <h2 className="mind-map-title">MIND MAP</h2>
          <Swiper modules={[Navigation]} navigation={true} slidesPerView={1}>
            <SwiperSlide>
              {" "}
              <div className="mind-map-item">
                <p className="mind-map-item-text">
                  All owners of APE NFTs and all future collections will receive
                  a percentage of sales based on the number of NFTs they own
                </p>
                <h3 className="mind-map-item-title">YAPE DROP</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mind-map-item">
                <p className="mind-map-item-text">
                  Launch of the 2nd YACHT Collection Releasing the first version
                  of the Ape Slam Game
                </p>
                <h3 className="mind-map-item-title">NEW COLLECTION</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mind-map-item">
                <p className="mind-map-item-text">
                  Launch your own token, the proceeds of which will go to a
                  global fund to LAUNCH YACHT CLUB AND PROMOTE it
                </p>
                <h3 className="mind-map-item-title">TOKEN</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <a href="/" className="mind-map-item link">
                <Icon
                  name="icon-up-left-arrow"
                  size={48}
                  className="mind-map-item-icon"
                  color="#ffffff"
                />
                <h3 className="mind-map-item-title">
                  LEARN <br />
                  MORE <br />
                  IN MIND MAP
                </h3>
              </a>
            </SwiperSlide>
          </Swiper>
        </section>
      ) : (
        <section className="mind-map-section">
          <h2 className="mind-map-title">MIND MAP</h2>
          <div>
            <div className="mind-map-item">
              <p className="mind-map-item-text">
                All owners of APE NFTs and all future collections will receive a
                percentage of sales based on the number of NFTs they own
              </p>
              <h3 className="mind-map-item-title">YAPE DROP</h3>
            </div>
            <div className="mind-map-item">
              <p className="mind-map-item-text">
                Launch of the 2nd YACHT Collection Releasing the first version
                of the Ape Slam Game
              </p>
              <h3 className="mind-map-item-title">NEW COLLECTION</h3>
            </div>
            <div className="mind-map-item">
              <p className="mind-map-item-text">
                Launch your own token, the proceeds of which will go to a global
                fund to LAUNCH YACHT CLUB AND PROMOTE it
              </p>
              <h3 className="mind-map-item-title">TOKEN</h3>
            </div>
            <a href="/" className="mind-map-item link">
              <Icon
                name="icon-up-left-arrow"
                size={48}
                className="mind-map-item-icon"
                color="#ffffff"
              />
              <h3 className="mind-map-item-title">
                LEARN <br />
                MORE <br />
                IN MIND MAP
              </h3>
            </a>
          </div>
          <div className="btn-section">
            <button type="button" className="btn-slider">
              Prev
            </button>
            <button type="button" className="btn-slider">
              Next
            </button>
          </div>
        </section>
      )}
    </>
  );
};
