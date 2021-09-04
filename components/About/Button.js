import styles from '../../styles/Button.module.css'
import { BsArrowUpRight } from "react-icons/bs";
const Button = (props) => {
    return (
        <div className={styles.btndiv}>
            <button className={styles.btnh}>{props.name} <BsArrowUpRight/></button>
        </div>
    )
}

export default Button
