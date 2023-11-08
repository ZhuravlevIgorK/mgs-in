import ButtonGoHome from "@/components/buttonGoHome";
import styles from "./calculation.module.scss";

export default function calculation() {
    return (
        <div className={styles.calculatorPage}>

            <ButtonGoHome/>                
            <div className={styles.myPrice}>            
                <h2>Расчет стоимости проектирования</h2>         
                <div className={styles.inputDate}>
                    <div className={styles.calculatorClass}>Выберите назначение объекта:</div> 
                    <form>
                        <select 
                            name="calc" 
                            id="calc-select"                                   
                        >
                            <option value=""> --Выберите тип объекта-- </option>
                            <option value="hous">Жилая недвижимость</option>
                            <option value="office">Офисная недвижимость</option>
                            <option value="factory">Производство</option>
                            <option value="warehouse">Складская недвижимость</option>
                        </select>             
                    </form>
                    
                    <div className={styles.calculatorClass}>Введите площадь объекта, м2 :</div>
                    <input id="myNumber1"
                        type="number"                      
                    />
                    <div className={styles.calculatorClass}>Введите длинну наружных сетей, м.п.:</div>
                    <input  id="myNumber2"
                        type="number"                         
                    /> 
                </div>  
            </div>   

            <div> 
                СЮДА ВСТАВИМ ТАБЛИЦУ
            </div> 

            <footer className={styles.footer}>
                ТУТ БУДЕТ ПОДВАЛ С ТЕЛЕГОЙ И ДАТОЙ
            </footer>   
        </div>    
    )
};