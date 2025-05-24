import content from "../../assets/content/content"
import useAppStore from "../../store";
import { getRightContent } from "../../assets/ts/util";
import styles from "./MenuIcon.module.css";
const MenuIcon = () => {
  const { menuOpen, toggleMenu, rtlLanguage } = useAppStore();
  const handleMenuClick = () => {
    toggleMenu();
  };

  return (
    <div
      onClick={handleMenuClick}
      className={[styles.wrapper, menuOpen ? styles.open : ""].join(" ")}
    >
      <div className={styles.menu}>
        <span></span>
        <span></span>
      </div>
      <div className={[styles.label, "label-l"].join(" ")}>
        {getRightContent(
          rtlLanguage,
          content.general[menuOpen ? "close" : "menu"]
        )}
      </div>
    </div>
  );
};

export default MenuIcon;
