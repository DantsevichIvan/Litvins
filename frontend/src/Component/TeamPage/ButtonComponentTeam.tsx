import React from "react";
import styles from './Team.module.css'


interface Props {
    title: string
    method: (event:any) => void
}

export default function Button({title, method}:Props) {
    return <button
        onClick={method}
        className={styles.buttonComponent}
        title={title}
    >{title}</button>
}
