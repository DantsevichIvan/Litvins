import styles from "./AddNewMatch.module.css";
import {Field, reduxForm, InjectedFormProps, SubmitHandler} from "redux-form";
import {ADatePicker, ARadioGroup, ATimePicker, renderInput} from "../../FormsControls/FormsControls";
import moment from "moment";
import {required} from "../../FormsControls/validation";
import {Button, Radio} from "antd";
import React from "react";


interface NewMatchFormProps {
    handleSubmit: (formData: object) => (void & SubmitHandler<{},{},string>) & SubmitHandler<{},{},string>
    onCheck: (event: any) => void
    placeMatch: string
    // initialValues: any
}


interface InitProps {
    initialValues: {
        team: string
    }
}

const NewMatchForm:React.FC<InjectedFormProps<AddNewMatchFormValuesType, NewMatchFormProps>& NewMatchFormProps> = ({handleSubmit, onCheck,placeMatch}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.dateAndTime}>
                <Field
                    AddNewMatchFormValuesType
                    name="matchDate"
                    component={ADatePicker}
                    placeholder={'Match Day'}
                    hasFeedback
                    defaultData={moment().format('DD/MM/YYYY')}
                    validate={[required]}
                    onFocus={(e: any) => e.preventDefault()}
                    onBlur={(e: any) => e.preventDefault()}
                />
                <Field
                    AddNewMatchFormValuesType
                    name="time"
                    component={ATimePicker}
                    placeholder={'Time'}
                    hasFeedback
                    defaultData={moment().format('HH:mm')}
                    validate={[required]}
                    onFocus={(e: any) => e.preventDefault()}
                    onBlur={(e: any) => e.preventDefault()}
                />
            </div>
            <div className={styles.check}>
                <div className={styles.title}>
                    <span>Матч будет проходить:</span>
                    <Field
                        name="game"
                        component={ARadioGroup}
                        value="game"
                        AddNewMatchFormValuesType>
                        <Radio value="home" onClick={onCheck}>Home</Radio>
                        <Radio value="exit" onClick={onCheck}>Exit</Radio>
                    </Field>
                </div>
                {/*{*/}
                {/*    placeMatch === 'home' ?*/}
                {/*        <PlayHome initialValues={initialValues}/> : placeMatch === 'exit' ?*/}
                {/*        <PlayExit initialValues={initialValues}/> : null*/}
                {/*}*/}
            </div>
            <Button type="primary" htmlType="submit" style={{marginRight: "10px"}} onClick={handleSubmit}>
                Add Match
            </Button>
        </form>
    )
};

// export const AddNewMatchForm = reduxForm<NewMatchFormProps>({form: 'myForm'})(NewMatchForm);

const PlayHome = ({initialValues}: InitProps) => {
    return (
        <div className={styles.match}>
            <Field
                name="team"
                component={renderInput}
                defaultValue={initialValues.team}
                onFocus={(e: any) => e.preventDefault()}
                onBlur={(e: any) => e.preventDefault()}
            />
            <Field
                name="opposingTeam"
                component={renderInput}
                validate={[required]}
                onFocus={(e: any) => e.preventDefault()}
                onBlur={(e: any) => e.preventDefault()}
                placeholder={'Команда противников'}
            />
        </div>
    )
}
const PlayExit = ({initialValues}: InitProps) => {
    return (
        <div className={styles.match}>
            <Field
                name="opposingTeam"
                component={renderInput}
                validate={[required]}
                onFocus={(e: any) => e.preventDefault()}
                onBlur={(e: any) => e.preventDefault()}
                placeholder={'Команда противников'}
            />
            <Field
                name="team"
                component={renderInput}
                defaultValue={initialValues.team}
                onFocus={(e: any) => e.preventDefault()}
                onBlur={(e: any) => e.preventDefault()}
            />
        </div>
    )
}


export type AddNewMatchFormValuesType = {
    matchDate: number|string
    time:number|string
    game:boolean

}
