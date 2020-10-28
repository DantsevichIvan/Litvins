import React from "react";
import styles from "../../style/HomeTitle.module.css";



export default function  HomeTitle ({value}) {
    return <div className={styles.wrapper__title}>
        <h3 className={styles.wrapper__title__name}>{value}</h3>
    </div>
}