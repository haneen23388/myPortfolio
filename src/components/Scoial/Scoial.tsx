import styles from './Scoial.module.css'
import email from './images/emails.png'
import phone from './images/phone.png'
import linkedIn from './images/linkedin.png'
import { getRightContent } from '../../assets/ts/util'
import useAppStore from '../../store'
import content from '../../assets/content/content'
import { motion } from 'framer-motion'
import { InView } from 'react-intersection-observer'

const Scoial = () => {
  const { rtlLanguage } = useAppStore();
  
  const items = [
    {
      img: phone,
      link: "tel:+971558450359",
      text: content.contact.pargraph[0].text,
      span: content.contact.pargraph[0].span
    },
    {
      img: email,
      link: "mailto:haneenharb23@gmail.com",
      text: content.contact.pargraph[1].text,
       span: content.contact.pargraph[1].span
    },
    {
      img: linkedIn,
      link: "https://www.linkedin.com/in/haneen-hareb",
      text: content.contact.pargraph[2].text,
       span: content.contact.pargraph[2].span
    },
  ];

  return (
    // <div className={styles.scoial}>
    //   {items.map((item, index) => (
    //     <a
    //       href={item.link}
    //       key={index}
    //       className={styles.link}
    //       rel="noopener noreferrer"
    //       target="_blank"
    //     >
    //       <div className={styles.content}>
    //         <img className={styles.img} src={item.img} alt="" />
    //          <div className={styles.textWrapper}>
    //         <p className={['subtitle-l',styles.text].join(' ')}>{getRightContent(rtlLanguage, item.text)}</p>
    //         <p className={['body-l',styles.text].join(' ')}>{getRightContent(rtlLanguage, item.span)}</p>
    //       </div>
    //       </div>
    //     </a>
    //   ))}
    // </div>

    
<div className={styles.scoial}>
  {items.map((item, index) => (
    <InView triggerOnce={false} threshold={0.2} key={index}>
      {({ inView, ref }) => (
        <motion.a
          ref={ref}
          href={item.link}
          className={styles.link}
          rel="noopener noreferrer"
          target="_blank"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <div className={styles.content}>
            <img className={styles.img} src={item.img} alt="" />
            <div className={styles.textWrapper}>
              <p className={['subtitle-l', styles.text].join(' ')}>
                {getRightContent(rtlLanguage, item.text)}
              </p>
              <p className={['body-l', styles.text].join(' ')}>
                {getRightContent(rtlLanguage, item.span)}
              </p>
            </div>
          </div>
        </motion.a>
      )}
    </InView>
  ))}
</div>
  );
};

export default Scoial