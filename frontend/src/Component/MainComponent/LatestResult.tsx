import React, {FC} from 'react';
import styles from '../../style/LatestResult.module.css'
import HomeTitle from "../innerComponent/HomeTitle";
import LastMatch from "../innerComponent/LastMatch";
import FrameHomePage from "../innerComponent/FrameHomePage";
import {LastMatchType} from '../../common/types';

type LatestResultType = {lastMatch: LastMatchType};

const LatestResult : FC<LatestResultType> =({lastMatch}) =>  {
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

export default LatestResult
