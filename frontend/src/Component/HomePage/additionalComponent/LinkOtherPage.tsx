import * as React from "react";
import styles from "../news/news.module.css";
import {NavLink} from "react-router-dom";

interface Props{
    link:string
    title:string
}

export default function LinkOtherPage({link,title}:Props){
    return(
        <div className={styles.wrapper__container_allNewsBtn}>
            <NavLink to={link}><span>{title}</span></NavLink>
        </div>
    )
}




