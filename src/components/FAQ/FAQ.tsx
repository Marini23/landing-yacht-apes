import "./FAQ.css";

export const FAQ: React.FC = () => {
  return (
    <section>
      <h2>FAQ</h2>
      <ul>
        <li>
          <p>[ 1 ]</p>
          <div>
            <h4>WHAT IS AN NFT COLLECTION?</h4>
            <p>
              An NFT collection is a group of unique digital assets, each
              represented by a non-fungible token, typically created around a
              specific theme or style.
            </p>
          </div>
        </li>
        <li>
          <p>[ 2 ]</p>
          <div>
            <h4>HOW DO I PURCHASE NFTS FROM A COLLECTION?</h4>
            <p>
              To purchase nfts from a collection, you typically need to use
              cryptocurrency on a blockchain0based marketplace.
            </p>
          </div>
        </li>
        <li>
          <p>[ 3 ]</p>
          <div>
            <h4>CAN I SELL OR TRADE NFTS FROM A COLLECTION?</h4>
            <p>
              Yes, you can sell or trade NFTs from a collection like you would
              other digital assets.
            </p>
          </div>
        </li>
        <li>
          <p>[ 4 ]</p>
          <div>
            <h4>WHAT RIGHTS DO I HAVE AS AN OWNER OF AN NFT?</h4>
            <p>
              As an NFT owner, you can own, transfer, potentially access
              exclusive content, resell, but don't automatically get copyright
              or intellectual property rights.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};
