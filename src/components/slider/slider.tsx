import { useState } from "react";
import styles from "./slider.module.scss";
import Image from "next/image";

interface typeData {title: string, src: string, object: string, description: string};

const data :[typeData, typeData, typeData, typeData, typeData, typeData, typeData] = [
    {title: "Слайдер 1", src: "/object/TEVA.jpg", object: "Офис фармацевтической кампании “TEVA”", description: "Проектирование внутренних инженерных систем"},
    {title: "Слайдер 2", src: "/object/БК“Главный”.png", object: "Бильярдный клуб “Главный”", description: "Проектирование и монтаж внутренних инженерных систем",},
    {title: "Слайдер 3", src: "/object/ЖК“Шоколад”.jpg", object: "ЖК “Шоколад”", description: "Проектирование внутренних инженерных систем"},
    {title: "Слайдер 4", src: "/object/Ресторанный синдикат.jpg", object: "Ресторан на Патриарших",description: "Проектирование и монтаж ОВиК и ВК"},
    {title: "Слайдер 5", src: "/object/ЖК “Дмитрослав”.jpg", object: "ЖК “Дмитрослав”", description: "Проектирование внутренних и наружных инженерных систем"},
    {title: "Слайдер 6", src: "/object/УВД ЮАО.jpg", object: "Здание УВД ЮАО", description: "Проектирование внутренних инженерных систем"},    
    {title: "Слайдер 7", src: "/object/Триумф-Палас.jpg", object: "Аппартаменты ЖК “Триумф-Палас”" , description: "Проектирование систем ОВиК, ВК, ЭОМ и СС"},    
];

export default function Slider() { 
    const [image, setImage] = useState<number>(0);   
     
    return (
        <div className={styles.sliderBox}> 
             
            <div className={styles.sliderName}>                              
                <h2>Наши объекты</h2>
                <div className={styles.text}>Проектирование и монтаж инженерных сетей</div>
            </div>

            <p className={styles.text}>{data[image].object}</p>           
                      
            <div className={styles.elem}>
                <button className={styles.button}
                    onClick={(e) => {
                        if (image > 0 ) {
                            setImage(image - 1);
                        } else {setImage(data.length-1)}                                         
                    }}
                >&lang;
                </button> 
                
                <div className={styles.imageBorder}>
                    <Image className={styles.image} src={data[image].src} height={290} width={600} alt={"img"}/>
                </div>   

                <button className={styles.button}
                        onClick={(e) => { 
                            if (image < data.length-1 ) {
                                setImage(image + 1);
                            } else {setImage(0)}
                        }}
                    >&rang;
                </button>
            </div>                
            
        </div>     
    )
}