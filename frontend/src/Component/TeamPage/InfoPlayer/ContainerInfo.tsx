import React from "react";
import styles from './InfoPlayer.module.css'

interface Props{
    title:string
    value:string
}

export function ContainerInfo({title,value}:Props) {
    return <div className={styles.infoPlayerWrap}>
        <span>{value}</span>
        <span>{title}</span>
    </div>
}
