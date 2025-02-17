import { useEffect, useState } from "react";
import { throttle } from "lodash";
import "./BurgerMenuDesktopTablet.css";

interface BurgerMenuDesktopTabletProps {
  widthScreen: number;
}

export const BurgerMenuDesktopTablet: React.FC<
  BurgerMenuDesktopTabletProps
> = ({ widthScreen }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState<number>(0);
  const [colorPoint, setColorPoint] = useState<number>(0);

  useEffect(() => {
    setColorPoint(widthScreen < 1440 ? 398 : 620);
  }, [widthScreen]);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setScrollY(window.scrollY);
    }, 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toogleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        type="button"
        className={` ${
          scrollY < colorPoint
            ? "burger-button-menu-red"
            : "burger-button-menu-black"
        }  ${isOpen ? "burger-button-open" : ""}`}
        onClick={toogleMenu}
      >
        {isOpen ? "CLOSE" : "MENU"}
      </button>
      <ul
        className={`${scrollY < colorPoint ? "list-red" : "list-black"} ${
          isOpen ? "list-open" : "list-closed"
        }`}
      >
        <li
          className={` ${
            scrollY < colorPoint ? "list-item-red" : "list-item-black"
          }`}
        >
          <a
            href="#about"
            className={`${
              scrollY < colorPoint
                ? "list-item-link-red"
                : "list-item-link-black"
            }`}
          >
            ABOUT
          </a>
        </li>
        <li
          className={` ${
            scrollY < colorPoint ? "list-item-red" : "list-item-black"
          }`}
        >
          <a
            href="#mind-map"
            className={`${
              scrollY < colorPoint
                ? "list-item-link-red"
                : "list-item-link-black"
            }`}
          >
            M-MAP
          </a>
        </li>
        <li
          className={` ${
            scrollY < colorPoint ? "list-item-red" : "list-item-black"
          }`}
        >
          <a
            href="#faq"
            className={`${
              scrollY < colorPoint
                ? "list-item-link-red"
                : "list-item-link-black"
            }`}
          >
            FAQ
          </a>
        </li>
        <li
          className={` ${
            scrollY < colorPoint ? "list-item-red" : "list-item-black"
          }`}
        >
          <a
            href="#arts"
            className={`${
              scrollY < colorPoint
                ? "list-item-link-red"
                : "list-item-link-black"
            }`}
          >
            ARTS
          </a>
        </li>
        <li
          className={` ${
            scrollY < colorPoint ? "list-item-red" : "list-item-black"
          }`}
        >
          <a
            href="#mint"
            className={`${
              scrollY < colorPoint
                ? "list-item-link-red"
                : "list-item-link-black"
            }`}
          >
            MINT
          </a>
        </li>
      </ul>
    </div>
  );
};
