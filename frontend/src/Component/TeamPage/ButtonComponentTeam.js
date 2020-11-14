import React from "react";
import styles from './Team.module.css'

export default function Button({title, method}) {
    return <button
        onClick={method}
        className={styles.buttonComponent}
        title={title}
    >{title}</button>
}
