import styles from '../../styles/Button.module.css'
import {ImArrowUpRight2} from 'react-icons/im'
const Button = (props) => {
    return (
        <div className={styles.btndiv}>
            <button className={styles.btnh}>{props.name}&emsp;{<ImArrowUpRight2/>}</button>
        </div>
    )
}

export default Button
