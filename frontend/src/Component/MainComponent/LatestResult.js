import React from 'react';
import styles from '../../style/LatestResult.module.css'
import HomeTitle from "../innerComponent/HomeTitle";
import LastMatch from "../innerComponent/LastMatch";
import FrameHomePage from "../innerComponent/FrameHomePage";


export default function LatestResult({lastMatch}) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <FrameHomePage/>
                <HomeTitle value={'Последние результаты'}/>
                <LastMatch/>
                <LastMatch/>
            </div>
        </div>
    )
}
