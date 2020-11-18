import React, {useEffect, useRef, useState} from "react";
import styles from "./Timer.module.css";
import {NextMatchType} from '../../common/types'

interface TimerComponentProps {
    nextMatch: NextMatchType
}

export default function TimerComponent({nextMatch}: TimerComponentProps) {
    const [timerDays, setTimerDays] = useState<string|number>('00')
    const [timerHours, setTimerHours] = useState<string|number>('00')
    const [timerMinutes, setTimerMinutes] = useState<string|number>('00')
    const [timerSeconds, setTimerSeconds] = useState<string|number>('00')
    let internal = useRef()

    useEffect(() => {
        const start = () => {
            startTimer();
            return () => {
                clearInterval(internal.current)
            }
        }
        start()

    }, [nextMatch])

    function startTimer() {
        const countdownDate = new Date(nextMatch.dateTime).getTime()
        let internal = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                //stop our timer
                clearInterval(internal)

            } else {
                setTimerDays(days)
                setTimerHours(hours)
                setTimerMinutes(minutes)
                setTimerSeconds(seconds)
            }
        }, 1000)
    }

    return (
        <section>
            <span className={styles.number}>{timerDays}</span>
            <span className={styles.word}>дней</span>
            <span className={styles.number}>{timerHours}</span>
            <span className={styles.word}>часов</span>
            <span className={styles.number}>{timerMinutes}</span>
            <span className={styles.word}>минут</span>
            <span className={styles.number}>{timerSeconds}</span>
            <span className={styles.word}>секунд</span>
        </section>
    )
}
