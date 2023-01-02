import { Button } from "antd";
import styles from "./style.module.scss";
import { useRouter } from 'next/router' 


const Slider = () => {

    const router = useRouter();

    return <div className={styles.Slider}>
        <div className={styles.content}>
            <div className={styles.header}>Realization</div>
            <Button className={styles.buttonRealization} onClick={()=>{ router.push({ pathname: '/referenser' })}}>show more</Button>
        </div>
    </div>
}

export default Slider;