import { useState } from "react";
import "./FAQ.css";
import ApeOne_1x from "../../assets/faq-image-1-1x.jpg";
import ApeOne_2x from "../../assets/faq-image-1-2x.jpg";
import ApeTwo_1x from "../../assets/faq-image-2-1x.jpg";
import ApeTwo_2x from "../../assets/faq-image-2-2x.jpg";
import ApeThree_1x from "../../assets/faq-image-3-1x.jpg";
import ApeThree_2x from "../../assets/faq-image-3-2x.jpg";
import ApeFour_1x from "../../assets/faq-image-4-1x.jpg";
import ApeFour_2x from "../../assets/faq-image-4-2x.jpg";

interface FAQItemInfo {
  title: string;
  text: string;
  image_1x: string;
  image_2x: string;
}

interface FAQProps {
  widthScreen: number;
}

const faqItems: FAQItemInfo[] = [
  {
    title: "WHAT IS AN NFT COLLECTION?",
    text: "An NFT collection is a group of unique digital assets, each represented by a non-fungible token, typically created around a specific theme or style.",
    image_1x: ApeOne_1x,
    image_2x: ApeOne_2x,
  },
  {
    title: "HOW DO I PURCHASE NFTS FROM A COLLECTION?",
    text: "To purchase NFTs from a collection, you typically need to use cryptocurrency on a blockchain-based marketplace.",
    image_1x: ApeTwo_1x,
    image_2x: ApeTwo_2x,
  },
  {
    title: "CAN I SELL OR TRADE NFTS FROM A COLLECTION?",
    text: "Yes, you can sell or trade NFTs from a collection like you would other digital assets.",
    image_1x: ApeThree_1x,
    image_2x: ApeThree_2x,
  },
  {
    title: "WHAT RIGHTS DO I HAVE AS AN OWNER OF AN NFT?",
    text: "As an NFT owner, you can own, transfer, potentially access exclusive content, resell, but don't automatically get copyright or intellectual property rights.",
    image_1x: ApeFour_1x,
    image_2x: ApeFour_2x,
  },
];

export const FAQ: React.FC<FAQProps> = ({ widthScreen }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="faq-section" id="faq">
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
                <>
                  <p className="faq-item-text">{item.text}</p>
                  {widthScreen >= 768 && (
                    <img
                      srcSet={`${item.image_1x} 1x, ${item.image_2x} 2x`}
                      src={item.image_1x}
                      alt={item.title}
                      className="faq-item-image"
                    />
                  )}
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
