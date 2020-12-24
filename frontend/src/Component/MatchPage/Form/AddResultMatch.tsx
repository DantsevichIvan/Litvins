import styles from "./AddNewMatch.module.css";
import React from "react";
import {useDispatch} from "react-redux";
import {addResultMatch} from "../../../action/matchsActions";
import {successMessages} from "../../FormsControls/AuxiliaryFunction";
import {AddResultMatchForm} from "./ResultMatchForm";


interface AddResultMatchProps {
    playedMatch: object
    modal: boolean
}

export default function AddResultMatch({playedMatch, modal}:AddResultMatchProps) {
    const dispatch = useDispatch()
    const onSubmit = (formData:object ) => {
        dispatch(addResultMatch(formData, 48888888888888))
        successMessages('Результат добавлен')

    }
    return (
        <div className={styles.wrap}>
            <div className={styles.container}>
                <AddResultMatchForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}
