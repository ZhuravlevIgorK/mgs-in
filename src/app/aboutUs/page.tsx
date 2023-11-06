import styles from "./aboutUs.module.scss";
import ButtonGoHome from "@/components/buttonGoHome";

export default function aboutUs() {
    return (
        <div className={styles.aboutUs}>
            <ButtonGoHome/>
            <div>
                НАША КОМАНДА
            </div>     
        </div>

    )
}