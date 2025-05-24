
import { useInView } from 'react-intersection-observer';
import styles from './Card.module.css'

interface Props{
    img:string;
    title:string;
    link:string;
    index?:number
}
const Card = ({img,title,link,index=0}:Props) => {
    const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });
  return (
    <div 
      style={{ animationDelay: `${index * 0.2}s`}}
      ref={ref} className={[styles.card,inView ? 'halfRot' : ''].join(' ')}>
        <img className={styles.image} src={img} alt="" />
        <a className={styles.link} href={link} target='_blank'>
            <p className={['h2',styles.title].join(' ')}>{title}</p>
        </a>
    </div>
  )
}

export default Card