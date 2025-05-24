import { InView } from "react-intersection-observer";
import styles from "./Title.module.css";
import { motion } from "framer-motion";
interface Props {
  title: string;
}

const Title = ({ title }: Props) => {
  return (
    <div className={styles.title}>
      <div className={styles.background}>
        <InView triggerOnce={false} threshold={0.2}>
          {({ inView, ref }) => (
            <motion.p
              ref={ref}
              className={["h1", styles.bigTitle].join(" ")}
              initial={{ y: "140%", rotate: 10, opacity: 0 }}
              animate={
                inView
                  ? { y: 0, rotate: 0, opacity: 1 }
                  : { y: "140%", rotate: 10, opacity: 0 }
              }
              transition={{ duration: 0.3, delay: 0.5, ease: "easeOut" }}
            >
              {title}
            </motion.p>
          )}
        </InView>
      </div>
    </div>
  );
};

export default Title;
