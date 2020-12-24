import {Button} from "antd";
import React from "react";
import {Field, Form, Formik} from "formik";
import {DateTimePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Box from '@material-ui/core/Box';
import {TextField} from 'formik-material-ui';

export type OneNewsType = {
  nameNews: string;
  newsDate: Date;
  textNews: string;
}

export type NewsFormikType = {
  onSubmit: (values: OneNewsType) => void
}

export const NewsFormik = ({onSubmit}: NewsFormikType) => {
  return (
    <Formik
      initialValues={{
        nameNews: '',
        newsDate: new Date(),
        textNews: ''
      } as OneNewsType}
      validate={(values) => {
        const errors: Partial<{ nameNews: string, textNews: string }> = {};
        if (!values.nameNews) {
          errors.nameNews = 'Required';
        }
        if (!values.textNews) {
          errors.textNews = 'Required';
        }
        return errors;
      }}
      onSubmit={(values) => {
        onSubmit(values)
      }}
    >
      {({submitForm, isSubmitting}) => (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Form>
            <Box margin={1}>
              <Field
                component={TextField}
                name="nameNews"
                type="text"
                label="Name news"
                helperText="Please enter name news"
              />
            </Box>
            <Box margin={1}>
              <Field
                component={DateTimePicker}
                name="newsDate"
                label="News date"
              />
            </Box>
            <Box margin={1}>
              <Field
                component={TextField}
                name="textNews"
                type="text"
                label="Text news"
                helperText="Please enter text news"
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
};