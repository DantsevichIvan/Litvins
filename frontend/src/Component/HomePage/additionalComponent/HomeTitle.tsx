import React from "react";
import styles from "./HomeTitle.module.css";

interface Props {
    value: string
}


export default function HomeTitle({value}: Props) {
    return <div className={styles.wrapper__title}>
        <h3 className={styles.wrapper__title__name}>{value}</h3>
    </div>
}
