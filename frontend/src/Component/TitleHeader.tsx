import * as React from "react";
const styles = require('../style/HeaderContainer.module.css')


export interface TitleHeaderProps{
    nextMatch: object | any
    title: string
}

export default function TitleHeader({nextMatch,title}:TitleHeaderProps) {
    return (
        <div className={styles.headerContainer__title}>
            {nextMatch['value'] ? nextMatch['game'] === 'home' ?
                <h1>
                    <span>{nextMatch['team']} </span>
                    <span>{nextMatch['opposingTeam']}</span>
                </h1>
                : <h1>{nextMatch['opposingTeam']} {nextMatch['team']}</h1>:
            <h1>{title}</h1>
            }
        </div>
    )
}
