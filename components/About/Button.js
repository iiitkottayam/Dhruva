import styles from '../../styles/Button.module.css'
const Button = (props) => {
    return (
        <div className={styles.btndiv}>
            <button className={styles.btnh}>{props.name} 🡭</button>
        </div>
    )
}

export default Button
