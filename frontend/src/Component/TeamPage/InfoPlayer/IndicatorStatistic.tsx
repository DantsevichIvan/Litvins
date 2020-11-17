import React from "react";
import styles from './IndicatorStatistic.module.css'

interface Props{

}

export function IndicatorStatistic({}) {
    return <div className={styles.skill}>
        <p className={styles.bar_title}>
            Скорость
            <span className={styles.percent}>50%</span>
        </p>
        <div className={styles.bar}>
            <div className={styles.bar_fill} style={{width:'50%'}}></div>
        </div>
    </div>
}
