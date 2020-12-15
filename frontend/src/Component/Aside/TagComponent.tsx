import React from 'react'
import styles from './TagComponent.module.css'
import {NavLink} from "react-router-dom";

interface TagComponentProps {
    title:string
}

export default function TagComponent ({title}:TagComponentProps) {
return(
    <div className={styles.tagElement}>
        <NavLink to='#'>
            <span>
                {title}
            </span>
        </NavLink>
    </div>
)
}
