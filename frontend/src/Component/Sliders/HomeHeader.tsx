import React from 'react';
import styles from '../../style/HomeHeader.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faVk, faYoutube, faInstagram} from '@fortawesome/free-brands-svg-icons'

export default function HomeHeader () {
    return (
        <div className={styles.wrapper}>
            <div className={styles.socialIcons}>
                <FontAwesomeIcon icon={faVk}/>
                <FontAwesomeIcon icon={faYoutube}/>
                <FontAwesomeIcon icon={faInstagram}/>
            </div>
            <div className={styles.img}>
                <span>Тут будет Фотография</span>
            </div>
        </div>
    )
}
