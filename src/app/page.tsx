import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';

export default function Home() { 
  return (
    <main className={styles.main}>
      <div>        
            <video id='bgvideo' className={styles.video} loop autoPlay muted>
              <source src="/myWorkSp.mp4" type="video/mp4"></source>
              <source src="/myWorkSpWEBm.webm" type="video/webm"></source>
              Your browser does not support the video tag.              
            </video>           
      </div>

      <div className={styles.titleMainPage}>       
          <div className={styles.textNameCompany}>            
            <h2>Проектное бюро &laquo;МГС Инжиниринг&raquo;</h2> 
            <p>Создаем иновационные решения</p>            
          </div>
          {/* <div className={styles.emptyDiv}></div>           */}
      </div>

      <nav className={styles.navMenu}>
        <Link className={styles.styleLink} href = {`calculation`} >
          <div className={styles.styleText}>                    
              Расчет стоимости проектирования        
          </div>                
        </Link>     

        <Link className={styles.styleLink} href = {`aboutUs`} >
          <div className={styles.styleText}>                    
              Команда     
          </div>                
        </Link>  

        <Link className={styles.styleLink} href = {`contacts`} >
          <div className={styles.styleText}>                    
              Наши контакты       
          </div>                
        </Link> 

      </nav> 

      <div>
      ТУТ БУДЕТ СЛАЙДЕР
      </div>
      
      
      <footer className={styles.footer}>          
          ТУТ БУДЕТ ПОДВАЛ
        </footer>   

    </main>
  )
}
