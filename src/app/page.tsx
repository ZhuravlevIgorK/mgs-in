import Image from 'next/image'
import styles from './page.module.css'

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
          <Image src="/МГС Инж.png" alt="МГС" width={160} height={180}/>
          <div className={styles.textNameCompany}>            
            <h2>Проектное бюро &laquo;МГС Инжиниринг&raquo;</h2> 
            <p>Создаем иновационные решения</p>            
          </div>
          <div className={styles.emptyDiv}></div>          
        </div>
      
            
    </main>
  )
}
