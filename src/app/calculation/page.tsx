import styles from "./calculation.module.scss";

export default function calculation() {
    return (
        <div className={styles.calculatorPage}>

            <button>тут будет кнопка</button>         
            
            <div className={styles.myPrice}>            
                <h2>Расчет стоимости проектирования</h2>         
                <div className={styles.inputDate}>
                    <div className={styles.calculatorClass}>Выберите назначение объекта:</div> 
                    <form>
                        <select 
                            name="calc" 
                            id="calc-select"
                            // value={typeObject}
                            // onChange={(e) => setTypeObject(e.target.value)}              
                        >
                            <option value=""> --Выберите тип объекта-- </option>
                            <option value="hous">Жилая недвижимость</option>
                            <option value="office">Офисная недвижимость</option>
                            <option value="factory">Производство</option>
                            <option value="warehouse">Складская недвижимость</option>
                        </select>             
                    </form>
                    
                    <div className={styles.calculatorClass}>Введите площадь объекта, м2 :</div>
                    <input 
                        type="number"  
                        // value={squareObject} 
                        // onChange={(e) => setSquareObject(e.target.value)}
                    />
                    <div className={styles.calculatorClass}>Введите длинну наружных сетей, м.п.:</div>
                    <input 
                        type="number"  
                        // value={meterObject} 
                        // onChange={(e) => setMeterObject(e.target.value)}
                    /> 
                </div>  
            </div>   

            <div>                            
                {/* <PriceСalculator squareObject={squareObject} typeObject={typeObject} meter={meterObject} /> */}
                СЮДА ВСТАВИМ ТАБЛИЦУ
            </div> 

            <footer className={styles.footer}>
                {/* &copy; Все права защищены: 2022 - {new Date().getFullYear()} год. */}
                {/* <TelegramBot/>  */}
                ТУТ БУДЕТ ПОДВАЛ С ТЕЛЕГОЙ И ДАТОЙ
            </footer>   
        </div>    
    )
};