import React, {FC} from 'react';
import styles from '../../style/LatestResult.module.css'
import HomeTitle from "../innerComponent/HomeTitle";
import LastMatch from "../innerComponent/LastMatch";
import FrameHomePage from "../innerComponent/FrameHomePage";
import {LastMatchType} from '../../common/types';

type LatestResultType = { listMatches: any };

const LatestResult: FC<LatestResultType> = ({listMatches}) => {
    console.log(listMatches)
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <FrameHomePage/>
                <HomeTitle value={'Последние результаты'}/>
                {
                    listMatches.map((match: any) => {
                        return <LastMatch match={match}/>
                    })
                }
            </div>
        </div>
    )
}

export default LatestResult
