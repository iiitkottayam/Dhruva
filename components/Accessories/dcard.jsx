import styles from './dcard.module.css'
export default function dcard(props) {
    return(
        <div className={styles.borderwrap}>
            <div className={styles.inner}>
                            
            </div>
            <div className={styles.wrapper} >
                <div className={styles.daycards}>
                    <h1 className={styles.dayHeading}>{props.name}</h1>
                </div>
            </div>                
        </div>
    );
};