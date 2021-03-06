import React from 'react'
import styles from "./SideBarTitle.module.css";

interface SideBarTitleProps{
    title:string
}

export default function SideBarTitle ({title}:SideBarTitleProps) {
return(
    <h3 className={styles.wrapper__container__SidebarCategories__title}>{title}</h3>
)
}
