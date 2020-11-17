import React, {FC} from 'react';
import styles from './LatestResult.module.css'
import HomeTitle from "../additionalComponent/HomeTitle";
import LastMatch from "./LastMatch";
import FrameHomePage from "../additionalComponent/FrameHomePage";
import {LastMatchType} from '../../../common/types';


type LatestResultType = { listMatches: Array<LastMatchType>};

const LatestResult: FC<LatestResultType> = ({listMatches}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <FrameHomePage/>
                <HomeTitle value={'Последние результаты'}/>
                {
                    listMatches.map((match: any) => {
                        return <LastMatch match={match} key={match._id}/>
                    })
                }
            </div>
        </div>
    )
}

export default LatestResult
