import "./MindMap.css";
import { Icon } from "../Icon";

export const MindMap: React.FC = () => {
  return (
    <section>
      <h2>MIND MAP</h2>
      <div>
        <div>
          <p>
            All owners of APE NFTs and all future collections will receive a
            percentage of sales based on the number of NFTs they own
          </p>
          <h3>YAPE DROP</h3>
        </div>
        <div>
          <p>
            Launch of the 2nd YACHT Collection Releasing the first version of
            the Ape Slam Game
          </p>
          <h3>NEW COLLECTION</h3>
        </div>
        <div>
          <p>
            Launch your own token, the proceeds of which will go to a global
            fund to LAUNCH YACHT CLUB AND PROMOTE it
          </p>
          <h3>TOKEN</h3>
        </div>
        <div>
          <Icon name="icon-up-left-arrow" size={48} />
          <h3>LEARN MORE IN MIND MAP</h3>
        </div>
      </div>
    </section>
  );
};
