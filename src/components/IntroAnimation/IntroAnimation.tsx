// components/IntroAnimation/IntroAnimation.tsx
import { useEffect } from 'react';
import styles from './IntroAnimation.module.css';
import { getRightContent } from '../../assets/ts/util';
import useAppStore from '../../store';
import content from '../../assets/content/content';

type IntroAnimationProps = {
  logoSrc: string;
  onFinish: () => void;
};

const IntroAnimation: React.FC<IntroAnimationProps> = ({ logoSrc, onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(onFinish, 2500); // مدة الأنيميشن
    return () => clearTimeout(timer);
  }, [onFinish]);
  const {rtlLanguage} = useAppStore()
  return (
    <div className={styles.introContainer}>
      <img src={logoSrc} alt="Logo" className={styles.logo} />
      <h1 className={styles.welcome}>{getRightContent(rtlLanguage,content.introAnimation.title)}</h1>
    </div>
  );
};

export default IntroAnimation;



