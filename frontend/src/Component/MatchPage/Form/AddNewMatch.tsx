import React, {useState} from "react";
import styles from './AddNewMatch.module.css'
import {useDispatch} from "react-redux";
import {AddMatch} from "../../../action/matchsActions";
import {successMessages} from "../../FormsControls/AuxiliaryFunction";
// import {AddNewMatchForm} from "./AddNewMatchForm";


interface AddNewMatchProps {
    onAddMatchBtn: () => void
}

export default function AddNewMatch({onAddMatchBtn}: AddNewMatchProps) {
    const [placeMatch, setPlaceMatch] = useState('')
    const dispatch = useDispatch()

    const onCheck = (event: any) => {
        const value = event.currentTarget.value
        setPlaceMatch(value)

    }
    const onSubmit = (formData: object) => {
        dispatch(AddMatch(formData))
        onAddMatchBtn()
        successMessages("Матч добавлен")
    }
    return (
        <div className={styles.wrap}>
            <div className={styles.container}>
                <button className={styles.buttonClose} onClick={onAddMatchBtn}>X</button>
                {/*<AddNewMatchForm*/}
                {/*    onSubmit={onSubmit}*/}
                {/*    onCheck={onCheck}*/}
                {/*    placeMatch={placeMatch}/>*/}
            </div>
        </div>
    )
}


