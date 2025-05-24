import { useEffect, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import styles from "./Collapsible.module.css";

interface Props {
  icon: string;
  title: string;
  text: string;
}
const Collapsible = ({ icon, title, text }: Props) => {
  const windowWidth = useWindowSize();
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    if (windowWidth < 1023) setExpand(true);
    else setExpand(false);
  }, [windowWidth]);

  return (
    <div
      onMouseEnter={() => windowWidth > 1023 && setExpand(true)}
      onMouseLeave={() => windowWidth > 1023 && setExpand(false)}
      className={[
        styles.collapsible,
        expand ? styles.collapsibleExpanded : "",
      ].join(" ")}
    >
      <img src={icon} alt="" className={styles.collapsibleIcon} />
      <h2 className={['subtitle-l ',styles.collapsibleTitle].join(' ')}>{title}</h2>
       
      <div className={styles.collapsibleContent}>
        <p className={['body-l',styles.collapsibleText].join(' ')}>{text}</p>
      </div>
    </div>
  );
};

export default Collapsible;
