import content from '../../assets/content/content'
import { getRightContent } from '../../assets/ts/util'
import useAppStore from '../../store'
import Collapsible from '../Collapsible/Collapsible'
import styles from './Services.module.css'
import { InView } from "react-intersection-observer";
import icon from './images/coding.png';
import icon1 from './images/responsiveDesign.png';
import icon2 from './images/repair.png';
import icon3 from './images/creation.png';
import Title from '../Title/Title'

const images = [icon,icon1,icon2,icon3]
const Services = () => {
    const {rtlLanguage} = useAppStore()
  return (
    <div className={styles.service}>
      <Title title={getRightContent(rtlLanguage,content.service.title)}/>
        <div className="spacer-32"></div>
        <div className="container horizontal-padding">
        <div className={styles.myService}>
          {content.service.collapsible.map((item,index)=>(
            <InView triggerOnce={true} threshold={0.2}>
               {({ inView, ref }) => (
                <div ref={ref} className={[styles.groupImg,inView? "fadeInText" : ''].join(' ')}>
                  <Collapsible
                   key={index}
                   title={getRightContent(rtlLanguage,item.title)}
                   text={getRightContent(rtlLanguage,item.text)}
                   icon={images[index]}
                  />
                </div>
            )}
            </InView>
          ))}
        </div>
        </div>
    </div>
  )
}

export default Services