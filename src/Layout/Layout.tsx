// import ArrowNavigator from "../components/ArrowNavigator/ArrowNavigator";
import { InView } from "react-intersection-observer";
import Contact from "../components/Contact/Contact";
import MenuSlider from "../components/MenuSlider/MenuSlider";
import Navbar from "../components/Navbar/Navbar";
import HomePage from "../pages/HomePage";
import IntroAnimationPage from "../pages/IntroAnimationPage";
import ServisePage from "../pages/ServisePage";
import useAppStore from "../store";
import styles from "./Layout.module.css";
import ArrowNavigator from "../components/ArrowNavigator/ArrowNavigator";


const pages =[
  <IntroAnimationPage/>,
  <HomePage/>,
  <ServisePage/>,
  <Contact/>
]
const Layout = () => {
  const { menuOpen , currentPage} = useAppStore();
  return (
    <div className={styles.wrapper}>
      {currentPage.mainPage !== 0 && (
        <InView triggerOnce={true} threshold={0.2}>
          {({inView,ref})=>(

          <div ref={ref}
              className={[
                styles.navBarContainer,
                menuOpen ? styles.showMenu : "",
                inView ? 'navbarAnimation': ''
              ].join(" ")}
            >
              <Navbar />
            </div>
          )}
        </InView>
          )}
      <div
        className={[
          styles.menuSliderContainer,
          menuOpen ? styles.showMenu : "",
        ].join(" ")}
      >
        <MenuSlider/>
      </div>
      <main className="main">
        <div className={styles.pageWrapper}>{pages[currentPage.mainPage]}</div>
        <ArrowNavigator/>
      </main>
    </div>
  );
};

export default Layout;
