import styles from "./ArrowNavigator.module.css";

import useScrollYNavbarChecker from "../../hooks/useScrollYNavbarChecker";
import useAppStore, { PagesStructure } from "../../store";
import SingleNavigator from "./Navigator/SingleNavigator.module";
const ArrowNavigator = () => {
  const { currentPage, changePage, menuOpen } = useAppStore();
  const showNavigator = useScrollYNavbarChecker(300);

  const handleGoToTop = () => {
    window.scrollTo({ top:0,behavior:'smooth' });
  };

  const arrowPageSelector = (
    currentPage: PagesStructure,
    direction: "left" | "right"
  ) => {
    const { mainPage } = currentPage;
    if (mainPage === 1) {
      if (direction === "right")
        return changePage({
          mainPage: 2,
        });
    }
    if (mainPage === 2) {
      if (direction === "left") {
        return changePage({
          mainPage: 1,
        });
      } else {
        return changePage({
          mainPage: 3,
        });
      }
    }
    if (mainPage === 3) {
      if (direction === "left") {
        return changePage({
          mainPage: 2,
        });
      } else {
        return changePage({
          mainPage: 4,
        });
      }
    }
  };

  const handleGoToPrev = () => {
    arrowPageSelector(currentPage, "left");
  };

  const handleGoToNext = () => {
    arrowPageSelector(currentPage, "right");
  };

  if (!showNavigator || menuOpen) return null;

  return (
    <div className={styles.wrapper}>
      {(
        currentPage.mainPage > 1) && (
        <SingleNavigator handleClick={handleGoToPrev} direction="left" />
      )}
      <div className={styles.middle}>
        <SingleNavigator handleClick={handleGoToTop} />
      </div>
      {currentPage.mainPage <= 2 && (
        <SingleNavigator handleClick={handleGoToNext} direction="right" />
      )}
    </div>
  );
};

export default ArrowNavigator;
