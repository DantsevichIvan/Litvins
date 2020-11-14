import React from 'react';
import styles from "./HeaderContainer.module.css";
import TimeInfoForNextMatch from "../MatchPage/InfoForNextMatch/TimeInfoForNextMatch";
import TitleHeader from "./TitleHeader.tsx";
import NavigationHeader from "./NavigationHeader";

export default function HeaderContainer({nextMatch={}, activeLink, link, childrenLink = null, header,title}) {
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
