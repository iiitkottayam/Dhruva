import classNames from 'classnames'
import styles from './dcard.module.css'
export default function Dcard(props) {
    return(
        <div className={styles.borderwrap}>
            <div className={styles.inner}>        
            </div>

            <div className={classNames( styles.wrapper, props.day && styles.active )} >
                <div className={styles.daycards}>
                    <h1 className={styles.dayHeading}>{props.name}</h1>
                </div>
            </div>                
        </div>
    );
};
