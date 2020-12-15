import React from 'react';
import styles from "./HeaderContainer.module.css";
import TimeInfoForNextMatch from "../MatchPage/InfoForNextMatch/TimeInfoForNextMatch";
import TitleHeader from "./TitleHeader";
import NavigationHeader from "./NavigationHeader";
import {NextMatchType} from '../../common/types'

interface HeaderContainerProps {
    nextMatch?: NextMatchType
    activeLink?:string
    link?:string
    childrenLink?: string
    header?: boolean
    title:string
}


export default function HeaderContainer({nextMatch, activeLink, link, childrenLink, header,title}:HeaderContainerProps) {
    return (
        <div className={styles.headerContainer}>
            <TitleHeader nextMatch={nextMatch} title={title}/>
            {
                nextMatch ?
                    <div className={styles.headerContainer__extraInfo}>
                        <TimeInfoForNextMatch
                            header={header}
                            nextMatch={nextMatch}/>
                    </div> : null
            }
            <NavigationHeader activeLink={activeLink} link={link} childrenLink={childrenLink}/>
        </div>
    )
}
