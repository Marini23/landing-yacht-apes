import { useState } from "react";
import "./FAQ.css";

interface FAQItemInfo {
  title: string;
  text: string;
}

const faqItems: FAQItemInfo[] = [
  {
    title: "WHAT IS AN NFT COLLECTION?",
    text: "An NFT collection is a group of unique digital assets, each represented by a non-fungible token, typically created around a specific theme or style.",
  },
  {
    title: "HOW DO I PURCHASE NFTS FROM A COLLECTION?",
    text: "To purchase NFTs from a collection, you typically need to use cryptocurrency on a blockchain-based marketplace.",
  },
  {
    title: "CAN I SELL OR TRADE NFTS FROM A COLLECTION?",
    text: "Yes, you can sell or trade NFTs from a collection like you would other digital assets.",
  },
  {
    title: "WHAT RIGHTS DO I HAVE AS AN OWNER OF AN NFT?",
    text: "As an NFT owner, you can own, transfer, potentially access exclusive content, resell, but don't automatically get copyright or intellectual property rights.",
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="faq-section">
      <h2 className="faq-title">FAQ</h2>
      <ul className="faq-list">
        {faqItems.map((item, index) => (
          <li
            key={index}
            className={`faq-item ${openIndex === index ? "faq-item-open" : ""}`}
            onClick={() => toggleItem(index)}
          >
            <p
              className={`faq-item-number ${
                openIndex === index ? "faq-item-number-open" : ""
              }`}
            >
              [ {index + 1} ]{" "}
            </p>
            <div className="faq-item-content">
              <h4
                className={`faq-item-title ${
                  openIndex === index ? "faq-item-title-open" : ""
                }`}
              >
                {item.title}
              </h4>
              {openIndex === index && (
                <p className="faq-item-text">{item.text}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
      {/* <ul className="faq-list">
        <li className="faq-item">
          <p className="faq-item-number">[ 1 ]</p>
          <div className="faq-item-content">
            <h4 className="faq-item-title">WHAT IS AN NFT COLLECTION?</h4>
            <p className="faq-item-text">
              An NFT collection is a group of unique digital assets, each
              represented by a non-fungible token, typically created around a
              specific theme or style.
            </p>
          </div>
        </li>
        <li className="faq-item">
          <p className="faq-item-number">[ 2 ]</p>
          <div className="faq-item-content">
            <h4 className="faq-item-title">
              HOW DO I PURCHASE NFTS FROM A COLLECTION?
            </h4>
            <p className="faq-item-text">
              To purchase nfts from a collection, you typically need to use
              cryptocurrency on a blockchain0based marketplace.
            </p>
          </div>
        </li>
        <li className="faq-item">
          <p className="faq-item-number">[ 3 ]</p>
          <div className="faq-item-content">
            <h4 className="faq-item-title">
              CAN I SELL OR TRADE NFTS FROM A COLLECTION?
            </h4>
            <p className="faq-item-text">
              Yes, you can sell or trade NFTs from a collection like you would
              other digital assets.
            </p>
          </div>
        </li>
        <li className="faq-item">
          <p className="faq-item-number">[ 4 ]</p>
          <div className="faq-item-content">
            <h4 className="faq-item-title">
              WHAT RIGHTS DO I HAVE AS AN OWNER OF AN NFT?
            </h4>
            <p className="faq-item-text">
              As an NFT owner, you can own, transfer, potentially access
              exclusive content, resell, but don't automatically get copyright
              or intellectual property rights.
            </p>
          </div>
        </li>
      </ul> */}
    </section>
  );
};
