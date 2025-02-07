import { useEffect, useState } from "react";
import "./BurgerMenuMobile.css";
import { Icon } from "../Icon";

export const BurgerMenuMobile: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  console.log(isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  const toogleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button
        type="button"
        className={` ${isOpen ? "burger-button-open" : "burger-button"}`}
        onClick={toogleMenu}
      >
        {isOpen ? "CLOSE" : "MENU"}
      </button>
      <div className={`menu-list-container ${isOpen ? "open" : ""}`}>
        <Icon name="icon-logo" className="logo-icon" color="#ffffff" />
        <ul className="menu-list">
          <li className="menu-item" onClick={toogleMenu}>
            <a href="#about" className="menu-item-link">
              ABOUT
            </a>
          </li>
          <li className="menu-item" onClick={toogleMenu}>
            <a href="#mind-map" className="menu-item-link">
              M-MAP
            </a>
          </li>
          <li className="menu-item" onClick={toogleMenu}>
            <a href="#faq" className="menu-item-link">
              FAQ
            </a>
          </li>
          <li className="menu-item" onClick={toogleMenu}>
            <a href="#arts" className="menu-item-link">
              ARTS
            </a>
          </li>
          <li className="menu-item" onClick={toogleMenu}>
            <a href="#mint" className="menu-item-link">
              MINT
            </a>
          </li>
        </ul>
        <div className="footer">© Yacht ape 2024 all rights reserved</div>
      </div>
    </>
  );
};
