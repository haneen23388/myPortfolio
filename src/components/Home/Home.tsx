import contect from "../../assets/content/content";
import { getRightContent } from "../../assets/ts/util";
import useAppStore from "../../store";
import styles from "./Home.module.css";
import girl from "./images/girl coding.jpg";
import project1 from "./images/process.png";
import project2 from "./images/SBS.png";
import project3 from "./images/COVER-BLOG.png";
import Card from "../Card/Card";
import { InView } from "react-intersection-observer";
import content from "../../assets/content/content";
import Title from "../Title/Title";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const images =[project1,project2,project3];
const Link = ['https://process-dev.com/','https://website.sbslftz.com/','https://venusng.shop/']
const Home = () => {
  const { rtlLanguage, changePage } = useAppStore();
    const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { amount: 0.2, once: false }); 
  const goToContact = () => {
    changePage({ mainPage: 3 });
  };
  return (
    <div>
      <Title title={getRightContent(rtlLanguage,content.home.bigTitle)}/>
      <div className="container horizontal-padding">
        <div className="spacer-40 "></div>
        <div className={styles.imagPargraph}>
          <div>
            <InView triggerOnce={false} threshold={0.2}>
                {({ inView, ref }) => (
                  <motion.p
                    ref={ref}
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="body-l"
                  >
                    {getRightContent(rtlLanguage, contect.home.pargraph)}
                  </motion.p>
                )}
            </InView>
            <div className="spacer-16"></div>
             <InView triggerOnce={false} threshold={0.2}>
              {({inView,ref})=>(
                <div ref={ref} className={[styles.pargraphButton, inView ? "scaleFromCenter" : ""].join(' ')} onClick={goToContact}>
                  <p className={["subtitle-s ", styles.button].join(" ")}>
                    {getRightContent(rtlLanguage, contect.home.buttom)}
                  </p>
                </div>
              )}
             </InView>

          </div>
          <InView triggerOnce={false} threshold={0.2}>
            {({ inView, ref }) => (
                 <motion.img
      ref={ref}
      src={girl}
      alt="girl"
      className={styles.img}
      initial={{ scale: 0, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    />
            )}
          </InView>
        </div>
        <div className="spacer-80"></div>
        <div className={styles.myProjectTitle}>
          <InView triggerOnce={false} threshold={0.2}>
            {({inView,ref})=>(
          <h1 ref={ref} className={["h1", styles.title,inView?'scaleFromCenter':""].join(" ")}>
            {getRightContent(rtlLanguage, contect.home.title)}
          </h1>
            )}
          </InView>
          <div className="spacer-16"></div>
          <div className={styles.myProject}>
            {content.home.cardTitle.map((item,index)=>(
            <Card
                img={images[index]}
                title={getRightContent(rtlLanguage,item.title)}
                link={Link[index]}
                index={index}             
              />

            ))}
          </div>
        </div>
        <div className="spacer-32"></div>
        <motion.p ref={ref}
          className="subtitle-m"
          initial={{opacity:0, y:40}}
          animate={inView?{opacity:1,y:0}:{}}
           transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {getRightContent(rtlLanguage, contect.home.privateTitle)}
        </motion.p>
        {/* <InView triggerOnce={false} threshold={0.2}>
          {({ inView, ref }) => (
            <p
              ref={ref}
              className={["subtitle-m", inView ? "fadeInText" : ""].join(" ")}
            >
              {getRightContent(rtlLanguage, contect.home.privateTitle)}
            </p>
          )}
        </InView> */}

        <div className="spacer-8"></div>
        <InView triggerOnce={false} threshold={0.4}>
          {({ inView, ref }) => (
            <motion.p
              ref={ref}
              className="body-l"
                    initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
            >
              {getRightContent(rtlLanguage, contect.home.pargraph1)}
            </motion.p>
          )}
        </InView>
        <div className="spacer-32"></div>
      </div>
    </div>
  );
};

export default Home;
