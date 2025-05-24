import styles from "./MenuSlider.module.css";
import { getRightContent } from "../../assets/ts/util";
import contect from "../../assets/content/content";
import useWindowSize from "../../hooks/useWindowSize";
import useAppStore from "../../store";

const MenuSlider = () => {
  const { rtlLanguage, menuOpen, changePage, toggleMenu, currentPage } =
    useAppStore();
  const windowWidth = useWindowSize();

  const handleMenuItemClick = (index: number) => {
    if (menuOpen) {
      toggleMenu();
    }
    changePage({ mainPage: index + 1 });
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.menuItemsContainer}>
        {contect.menuItems.map((menuItem, index) => (
          <div
            key={index}
            className={[styles.menuItem, windowWidth < 1024 ? "h4" : "h3"].join(
              " "
            )}
          >
            <div
              className={styles.menuItemWrapper}
              onClick={() => handleMenuItemClick(index)}
            >
              <div
                className={[
                  styles.menuItem,
                  index + 1 === currentPage.mainPage ? styles.active : "",
                ].join(" ")}
              >
                {getRightContent(rtlLanguage, menuItem.label)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuSlider;
