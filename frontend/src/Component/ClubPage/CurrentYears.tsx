import React from 'react'
import styles from "./CurrentYears.module.css";
import cn from 'classnames'
import {InfoYearType} from '../../common/types'


interface currentYearsProps {
    year:InfoYearType
    currentActiveClass:(id:number) =>void
}

export default function CurrentYears({year, currentActiveClass}:currentYearsProps) {
    return (
        <li className={cn({[styles.activeClass]: year.activeClass === true}, styles.defaultClass)}
            onClick={()=> currentActiveClass(year.id)}>
            <span>{year.year}</span>
        </li>
    )
}
