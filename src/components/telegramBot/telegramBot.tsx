'use client';
import styles from "./telegramBot.module.scss";
import { useState } from "react";
import axios from "axios";

export default function TelegramBot() {
    const [nameUser, setNameUser] = useState<string>("");
    const [numberUser, setNumberUser] = useState<number>();

    const Text = `${nameUser} ;   ${numberUser}`  ;
    const botToken = '6642915905:AAHKhkEsOA-UL7bQm-49cn3Mo6hT02pIcLk';
    const chatId = '5125689786'; 
    const sendMessage = () => {
        axios.get(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${Text}`);
    };   

    return (
        <div className={styles.footer}>

            &copy; Все права защищены: 2022 - {new Date().getFullYear()} год.

            <div className={styles.telegramBot}>
                <button className={styles.inputButton} type='button' onClick={sendMessage}>ЗАКАЗАТЬ ЗВОНОК</button>  
                
                <input
                    className={styles.inputButton}
                    value={nameUser}
                    placeholder={'Ваше имя'}
                    type="text"
                    onInput={(e:any) => 
                        setNameUser(e.target.value)
                    }
                />
                <input
                    className={styles.inputButton}
                    value={numberUser}
                    placeholder={'Ваш номер телефона'}
                    required
                    type='tel.'
                    onInput={(e:any) => 
                        setNumberUser(e.target.value)
                    }
                />       

            </div>
        </div>        
    )



}