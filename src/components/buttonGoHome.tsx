import styles from "./buttonGoHome.module.scss";
import Link from "next/link";

export default function buttonGoHome() {
    return (
        <div className={styles.buttonGoHome}>            
            <Link className={styles.buttonGoHomeText} href="/">
                <div >
                     &lArr; НАЗАД
                </div>                
            </Link>            
        </div>
    )
};