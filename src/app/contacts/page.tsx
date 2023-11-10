import ButtonGoHome from "@/components/buttonGoHome/buttonGoHome";
import styles from "./contacts.module.scss";

export default function contacts() {
    return (
        <div className={styles.contact}> 
            <div className={styles.head}>  
               <ButtonGoHome/>    
               <div></div>                
            </div>    
            <h1>КОНТАКТЫ</h1>

            <div className={styles.ourMapAndTel}>
                <div className={styles.ourContact}>
                    <div className={styles.ourOffice}>Наш офис:</div>
                    <div  className={styles.contactText}>
                        Московская область
                        <br/>г.Королев
                        <br/>ул.Нестеренко д.25
                        <br/>tel +7 (926)567-93-30
                        <br/>fax +7 (499)849-71-21   
                    </div>             
                </div>
                <div className={styles.map1}>                   
                ТУТ БУДЕТ КАРТА
                </div>
            </div> 

            <footer className={styles.footer}>                
                ПОДВАЛ САЙТА
            </footer>  
        </div>       
    )
}