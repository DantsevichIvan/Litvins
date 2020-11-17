import React from "react";
import styles from "./Statistics.module.css";

interface Props {
    title: string
}

export default function StatisticsTitleIcon({title}:Props) {
    debugger
    return (
        <span className={styles.titleIcon}>{title}</span>
    )
}
