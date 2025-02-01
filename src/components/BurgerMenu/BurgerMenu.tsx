import { useState } from "react";
import "./BurgerMenu.css";

export const BurgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="burger-menu-container">
      <button
        type="button"
        className="burger-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "CLOSE" : "MENU"}
      </button>
      {isOpen && (
        <ul className="menu-list">
          <li className="menu-item">
            <a href="#about" className="menu-item-link">
              ABOUT
            </a>
          </li>
          <li className="menu-item">
            <a href="#mind-map" className="menu-item-link">
              M-MAP
            </a>
          </li>
          <li className="menu-item">
            <a href="#faq" className="menu-item-link">
              FAQ
            </a>
          </li>
          <li className="menu-item">
            <a href="#arts" className="menu-item-link">
              ARTS
            </a>
          </li>
          <li className="menu-item">
            <a href="#mint" className="menu-item-link">
              MINT
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};
