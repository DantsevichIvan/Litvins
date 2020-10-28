import React from "react";
import styles from "../../style/HeaderContainer.module.css";
import {NavLink} from "react-router-dom";

export default function NavigationHeader ({activeLink,link,childrenLink}) {
return(
    <div className={styles.breadcrumb}>
        <div className={styles.breadcrumb__link}>
            <NavLink to='/'>
                <span className={styles.buttonText}>Главная</span>
            </NavLink>
        </div>
        <div className={styles.breadcrumb__other}>
            {childrenLink === null ?
                <span className={styles.active}>{activeLink}</span>
                : <NavLink to={`/${link}`} className={styles.activeLink}><span>{activeLink}</span></NavLink>
            }
        </div>
        {
            childrenLink !== null ?
                <div className={styles.breadcrumb__other}>
                    <span className={styles.active}>{childrenLink}</span>
                </div>
                : null
        }
    </div>
)
}