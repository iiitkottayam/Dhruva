import React from 'react'
import styles from '../../styles/Intro.module.css'
const Intro = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textWrapper}>
                <div className={`${styles.text1} ${styles.text}`}>Willkommen</div>
                <div className={`${styles.text2} ${styles.text}`}>Bienvenue</div>
                <div className={`${styles.text3} ${styles.text}`}>benvenuto</div>
                <div className={`${styles.text4} ${styles.text}`}>bem vinda</div>
                <div className={`${styles.text5} ${styles.text}`}>नमस्ते</div>
                <div className={`${styles.text6} ${styles.text}`}>Welcome</div>
                <div className={`${styles.text7} ${styles.text}`}>سلام</div>
                <div className={`${styles.text8} ${styles.text}`}>Bienvenido</div>
                <div className={`${styles.text9} ${styles.text}`}>gratissimum</div>
                <div className={`${styles.text10} ${styles.text}`}>добро пожаловать</div>
                <div className={`${styles.text11} ${styles.text}`}>Välkommen</div>
            </div>
        </div>
    )
}

export default Intro
