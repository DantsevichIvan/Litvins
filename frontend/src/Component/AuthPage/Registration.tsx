import React from "react";
import styles from './Registration.module.css'
import {Field, FormSection, reduxForm} from "redux-form";
import {useSelector} from "react-redux";
// import {registration} from "../../action/authActions";
import {makeField, renderInput} from "../FormsControls/FormsControls";
import {required} from "../FormsControls/validation";
import {Redirect} from "react-router-dom";
import {InfoAbout, Name, Statistic} from "../FormsControls/FormsComponent";
import {Button, DatePicker, Input} from "antd";
// import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import moment from 'moment';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import {Form, Formik} from 'formik';
import Box from '@material-ui/core/Box';

export const ARangePicker = makeField(DatePicker);

export const RegistrationFormik = () => {
  return (
    <Formik
      initialValues={{
        email: '',
        newsDate: new Date(),
        newsContent: ''
      }}

      onSubmit={(values) => {
        alert(JSON.stringify(values));
        // handleSubmit(values)
        // dispatch(loginTC(values))
      }}
    >
      {({submitForm, isSubmitting}) => (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Form>
            <Box margin={1}>
              <Field
                name="userName"
                type="text"
                // label="EmailTEST"
                helperText="Please enter your name"
              />
            </Box>
            <Box margin={1}>
              <Field
                name="userSurname"
                type="text"
                // label="EmailTEST"
                helperText="Please enter your surname"
              />
            </Box>
            <Box margin={1}>
              <Field
                component={DatePicker}
                name="birthday"
                label="Please check your surname"
              />
            </Box>
            <Box margin={1}>
              <Field
                name="newsContent"
                type="text"
                // label="EmailTEST"
                helperText="Please enter news content"
              />
            </Box>

            <Box margin={1}>
              <Button
                // variant="contained"
                color="primary"
                disabled={isSubmitting}
                onClick={submitForm}
              >
                Submit
              </Button>
            </Box>
          </Form>
        </MuiPickersUtilsProvider>
      )}
    </Formik>
  )
}

const RegistrationForm = ({handleSubmit}: any) => {
    return (
        <form action="" className={styles.form} onSubmit={handleSubmit}>
            <FormSection name={'name'}>
                <div className={styles.name}>
                    <Name/>
                </div>
            </FormSection>
            <FormSection name={'birthday'}>
                <div className={styles.birthday}>
                    <span className={styles.birthdayTitle}>Дата рождения</span>
                    {/*<Field*/}
                    {/*    name="birthdayDay"*/}
                    {/*    component={ARangePicker}*/}
                    {/*    placeholder={'You birthday'}*/}
                    {/*    format={'DD-MM-YYYY'}*/}
                    {/*    hasFeedback*/}
                    {/*    validate={[required]}*/}
                    {/*    onFocus={e => e.preventDefault()}*/}
                    {/*    onBlur={e => e.preventDefault()}*/}
                    {/*/>*/}
                </div>
            </FormSection>
            <FormSection name={'infoAbout'}>
                <div className={styles.infoAbout}>
                    <InfoAbout/>
                </div>
            </FormSection>
            <FormSection name={'infoStatistic'}>
                <Statistic/>
            </FormSection>
            <FormSection name={'personalData'}>
                <div className={styles.personalData}>
                    <Field name='email' type='text' component={renderInput} label='Почта' placeholder='ivaninanov@mail.ru'
                           validate={[required]}/>

                    <Input.Password
                        placeholder="Придумайте пароль"
                        name='password'
                        // label='Пароль'
                        // validate={[required]}
                        className={styles.fieldPassword}/>
                    <Input.Password
                        placeholder="Подтверждение пароля"
                        name='repeatPassword'
                        // label='Подтверждение пароля'
                        // validate={[required]}
                        className={styles.fieldPassword}
                    />
                </div>
            </FormSection>
            <div className={styles.btn}>
                <button type="submit">Зарегистрироваться</button>
            </div>
        </form>
    )
}
const RegistrationReduxForm = reduxForm({
    form: 'Registration',
})(RegistrationForm);



export default function Registration() {
    // const player = useSelector(state => state.authPage.playerId)
    const isAuth = useSelector((state: any) => state.authPage.isAuth)//true or false
    // const dispatch = useDispatch()
    const onSubmit = (formData: any) => {
        // console.log(moment(formData.birthday.birthdayDay._d).format('MM/DD/YYYY'))
        // dispatch(registration(formData))
    }

    if (isAuth) {
        return <Redirect to={"/"}/>;
    }

    return (
        <div className={styles.wrap}>
            <div className={styles.container}>
                <RegistrationReduxForm onSubmit={onSubmit}/>
                {/*<RegistrationFormik/>*/}
            </div>
        </div>
    )
}

// : any 3
// ***
// переписать формирок и добавить закомментированные параметры

// label='Пароль'
// validate={[required]}

// label='Подтверждение пароля'
// validate={[required]}

// ***

