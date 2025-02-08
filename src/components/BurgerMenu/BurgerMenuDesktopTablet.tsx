import { useEffect, useState } from "react";
import { throttle } from "lodash";
import "./BurgerMenuDesktopTablet.css";

export const BurgerMenuDesktopTablet: React.FC = () => {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setScrollY(window.scrollY);
    }, 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <button
        type="button"
        className={` ${
          scrollY < 398 ? "burger-button-menu-red" : "burger-button-menu-black"
        }`}
      >
        MENU
      </button>
    </div>
  );
};
