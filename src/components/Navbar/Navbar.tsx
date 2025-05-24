import MenuIcon from "../MenuIcon/MenuIcon";
import styles from "./Navbar.module.css";
import logo from "../../assets/images/logo1.png";
import useAppStore from "../../store";
const Navbar = () => {
  const { rtlLanguage, toggleLanguage } = useAppStore();
    const changePage = useAppStore((state) => state.changePage);

  const handleLogoClick = () => {
    changePage({ mainPage: 0 });
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.menu}>
        <MenuIcon />
      </div>
      <div className={styles.logo}>
        <img onClick={handleLogoClick} className={styles.img} src={logo} alt="logo" />
      </div>
      <div
        className={[styles.languageToggler, "body-m"].join(" ")}
        onClick={() => toggleLanguage()}
      >
        {rtlLanguage ? "English" : "العربية"}
      </div>
    </div>
  );
};

export default Navbar;
