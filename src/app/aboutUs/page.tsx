import styles from "./aboutUs.module.scss";
import ButtonGoHome from "@/components/buttonGoHome/buttonGoHome";
import Image from "next/image";

interface typeStaff {name: string, src: string, post: string};
const staff: [typeStaff, typeStaff, typeStaff, typeStaff, typeStaff] = [
    {name: "Igor Zhuravlev", src: "/staff/IgorZ.jfif", post: "HVAC design engineer"},
    {name: "Vadim Minakov", src: "/staff/VadimM.jpg", post: "Electrical design engineer"},
    {name: "Igor Mikhalev", src: "/staff/IgorM2.png", post: "Engineer designer of low-current networks"},
    {name: "Ilya Korol", src: "/staff/IlyaK.PNG", post: "Engineer designer of water supply and sewerage"},
    {name: "Sergey Berezhnoy", src: "/staff/SergeyB.PNG", post: "HVAC design engineer"},  
]

export default function aboutUs() {
    return (
        <div className={styles.aboutUs}>

            <ButtonGoHome/>         

            <h1 className={styles.brendy1}>
                 НАША
            </h1>
            <h1 className={styles.brendy2}>
                КОМАНДА
            </h1>          

            <div className={styles.letters}>
                <span className={styles.letters2}>МГС</span>
                <span className={styles.letters3}>инжиниринг</span>
            </div>

            <div className={styles.ourStaffImages}>
                {staff.map((e:typeStaff) => { 
                    return (               
                        <figure key="ourFigure" className={styles.figureStaff}>        
                            <Image className={styles.img} src={e.src} width={250} height={260} alt="фото"/>
                            <figcaption className={styles.figcaptionImg}> {e.name} <br/>{e.post} </figcaption>
                        </figure>
                    )})
                }                
            </div>    
        </div>

    )
}