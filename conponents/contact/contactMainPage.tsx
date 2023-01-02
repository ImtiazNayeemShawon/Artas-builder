import dynamic from 'next/dynamic'
import { FormConact } from './formContact'
import styles from './style.module.scss'

const Map = dynamic(() => import('./map'), {
    ssr: false,
  })
const ContactMainPage = () => {

  return (
    <div className={styles.maxWidth}>
        <div className={styles.container}>
             <div className={styles.item}>
                <FormConact/>
             </div>
             <div className={styles.item}>
                <Map/>
             </div>
        </div>
    </div>
  )
}

export {ContactMainPage}

