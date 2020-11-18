import React from "react";
import styles from "./HeaderContainer.module.css";
import {NavLink} from "react-router-dom";


interface  NavigationHeaderProps{
    activeLink?:string
    link?:string
    childrenLink?:string
}

export default function NavigationHeader ({activeLink,link,childrenLink}:NavigationHeaderProps) {
return(
    <div className={styles.breadcrumb}>
        <div className={styles.breadcrumb__link}>
            <NavLink to='/'>
                <span className={styles.buttonText}>Главная</span>
            </NavLink>
        </div>
        <div className={styles.breadcrumb__other}>
            {link ?
                <span className={styles.active}>{activeLink}</span>
                : <NavLink to={`/${link}`} className={styles.activeLink}><span>{activeLink}</span></NavLink>
            }
        </div>
        {
            !!link ?
                <div className={styles.breadcrumb__other}>
                    <span className={styles.active}>{childrenLink}</span>
                </div>
                : null
        }
    </div>
)
}
