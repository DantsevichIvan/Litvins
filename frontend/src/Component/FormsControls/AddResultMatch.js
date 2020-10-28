import styles from "../../style/AddNewMatch.module.css";
import {Field, reduxForm} from "redux-form";
import {required} from "./validation";
import {Button} from "antd";
import React from "react";
import {AInputNumber} from "./FormsControls";
import {useDispatch} from "react-redux";
import {addResultMatch} from "../../redux/MatchsReducer";
import {successMessages} from "../innerComponent/AuxiliaryFunction";


let ResultMatchForm = ({handleSubmit, playedMatch}) => {
    console.log(playedMatch)
    return (
        <form onSubmit={handleSubmit}>
            {playedMatch && playedMatch.game === 'home' ?
                <div>
                    <div>
                        <span>{playedMatch && playedMatch.team}</span>
                        <Field
                            name="resultTeam"
                            component={AInputNumber}
                            defaultValue={'0'}
                            onFocus={e => e.preventDefault()}
                            onBlur={e => e.preventDefault()}
                        />
                    </div>
                    <div>
                        <span>{playedMatch && playedMatch.opposingTeam}</span>
                        <Field
                            name="resultOpposingTeam"
                            component={AInputNumber}
                            defaultValue={'0'}
                            onFocus={e => e.preventDefault()}
                            onBlur={e => e.preventDefault()}
                        />
                    </div>
                </div>: null
                // <div>
                //     <div>
                //         <span>{playedMatch.opposingTeam}</span>
                //         <Field
                //             name="resultOpposingTeam"
                //             component={AInputNumber}
                //             defaultValue={'0'}
                //             onFocus={e => e.preventDefault()}
                //             onBlur={e => e.preventDefault()}
                //         />
                //     </div>
                //     <div>
                //         <span>{playedMatch.team}</span>
                //         <Field
                //             name="resultTeam"
                //             component={AInputNumber}
                //             defaultValue={'0'}
                //             onFocus={e => e.preventDefault()}
                //             onBlur={e => e.preventDefault()}
                //         />
                //     </div>
                // </div>
            }
            <Button type="primary" htmlType="submit" style={{marginRight: "10px"}} onClick={handleSubmit}>
                Sumbit
            </Button>
        </form>
    )
};
const AddResultMatchForm = reduxForm({
    form: 'resultForm'
})(ResultMatchForm);
export default function AddResultMatch({playedMatch,closeModal,modal}) {
    const dispatch = useDispatch()
    const onSubmit = (formData) => {
        dispatch(addResultMatch(formData, playedMatch._id))
        successMessages('Результат добавлен')
        closeModal(!modal)
    }
    return (
        <div className={styles.wrap}>
            <div className={styles.container}>
                <AddResultMatchForm playedMatch={playedMatch} onSubmit={onSubmit}/>
            </div>
        </div>
    )
}
