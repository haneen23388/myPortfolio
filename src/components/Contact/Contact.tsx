import styles from "./Contact.module.css";
import { getRightContent } from "../../assets/ts/util";
import useAppStore from "../../store";
import contect from "../../assets/content/content";
import Scoial from "../Scoial/Scoial";
import Title from "../Title/Title";
import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";
const Contact = () => {
  const { rtlLanguage } = useAppStore();
  return (
    <div>
      <Title title={getRightContent(rtlLanguage, contect.contact.bigTitle)} />
      <div className="container horizontal-padding">
        <div className="spacer-40 "></div>
        <div className={styles.contact}>
          <InView triggerOnce={false} threshold={0.3}>
            {({ inView, ref }) => (
              <motion.p
                className="h3"
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8 }}
              >
                {getRightContent(rtlLanguage, contect.contact.title)}
              </motion.p>
            )}
          </InView>

          <div className="spacer-32"></div>
          <Scoial />
          <div className="spacer-120"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
