import { useEffect, useState } from "react";
import { throttle } from "lodash";
import "./BurgerMenuDesktopTablet.css";

export const BurgerMenuDesktopTablet: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState<number>(0);

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
          scrollY < 398 ? "burger-button-menu-red" : "burger-button-menu-black"
        }  ${isOpen ? "burger-button-open" : ""}`}
        onClick={toogleMenu}
      >
        {isOpen ? "CLOSE" : "MENU"}
      </button>
      <ul
        className={`${scrollY < 398 ? "list-red" : "list-black"} ${
          isOpen ? "list-open" : "list-closed"
        }`}
      >
        <li className="list-item">
          <a
            href="#about"
            className={`${
              scrollY < 398 ? "list-item-link-red" : "list-item-link-black"
            }`}
          >
            ABOUT
          </a>
        </li>
        <li className="list-item">
          <a
            href="#mind-map"
            className={`${
              scrollY < 398 ? "list-item-link-red" : "list-item-link-black"
            }`}
          >
            M-MAP
          </a>
        </li>
        <li className="list-item">
          <a
            href="#faq"
            className={`${
              scrollY < 398 ? "list-item-link-red" : "list-item-link-black"
            }`}
          >
            FAQ
          </a>
        </li>
        <li className="list-item">
          <a
            href="#arts"
            className={`${
              scrollY < 398 ? "list-item-link-red" : "list-item-link-black"
            }`}
          >
            ARTS
          </a>
        </li>
        <li className="list-item">
          <a
            href="#mint"
            className={`${
              scrollY < 398 ? "list-item-link-red" : "list-item-link-black"
            }`}
          >
            MINT
          </a>
        </li>
      </ul>
    </div>
  );
};
