import React from 'react';
import styles from "./HeaderContainer.module.css";
import TimeInfoForNextMatch from "../MatchPage/InfoForNextMatch/TimeInfoForNextMatch";
import TitleHeader from "./TitleHeader";
import NavigationHeader from "./NavigationHeader";

interface HeaderContainerProps {
    nextMatch: {
        value: null|boolean
    }
    activeLink:string
    link:string
    childrenLink:null| boolean
    header: boolean
    title:string
}


export default function HeaderContainer({nextMatch={value:null}, activeLink, link, childrenLink = null, header,title}:HeaderContainerProps) {
    return (
        <div className={styles.headerContainer}>
            <TitleHeader nextMatch={nextMatch} title={title}/>
            {
                nextMatch.value ?
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
