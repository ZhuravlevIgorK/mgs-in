import styles from "./buttonMenu.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function buttonMenu(props:any) {
        return (
        <div className={styles.linkBox}>   
            <Image id="div" className={styles.imegLink} src='/pinci.png' width={35} height={35} alt={"*"}/>
          
            <Link className={styles.styleLink} href = {`${props.addressLinK}`} >
                <div className={styles.styleText}>                    
                    {props.nameLink}          
                </div>                
            </Link>  
            
            <div className={styles.text}></div>           
      </div>
    )     

}