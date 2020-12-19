import Icon from "@ant-design/icons";
import {Field, reduxForm} from "redux-form";
import {ADatePicker, AInput, AInputTextArea} from "../../FormsControls/FormsControls";
import moment from "moment";
import {required} from "../../FormsControls/validation";
import {Button} from "antd";
import React from "react";
import {Form, Formik} from "formik";
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Box from '@material-ui/core/Box';
import {DatePicker} from 'formik-material-ui-pickers';

const NewsForm = ({handleSubmit, setFileList, fileList} : any) => {
    const handlePreview = (file : any) => {
        setFileList([...fileList, file.thumbUrl])
    };
    const handleUpload = ({fileList} : any) => {
        setFileList([...fileList])
    };
    const uploadButton = (
        <div>
            <Icon type="plus"/>
            <div className="ant-upload-text">Upload</div>
        </div>
    );
    return (
        <form onSubmit={handleSubmit}>
            <Field
                name="nameNews"
                component={AInput}
                placeholder={'Название новости'}
                onFocus={(e : any)=> e.preventDefault()}
                onBlur={(e : any) => e.preventDefault()}
            />
            <Field
                name="newsDate"
                component={ADatePicker}
                placeholder={'News Day'}
                hasFeedback
                defaultData={moment().format('DD/MM/YYYY')}
                validate={[required]}
                onFocus={(e : any) => e.preventDefault()}
                onBlur={(e : any) => e.preventDefault()}
            />
            <Field
                name="textNews"
                component={AInputTextArea}
                placeholder={'Введите текст новости'}
                onFocus={(e : any) => e.preventDefault()}
                onBlur={(e : any) => e.preventDefault()}
            />

            {/*<Upload*/}
            {/*    listType="picture-card"*/}
            {/*    fileList={fileList}*/}
            {/*    onPreview={handlePreview}*/}
            {/*    onChange={handleUpload}*/}
            {/*    beforeUpload={() => false}*/}
            {/*>*/}
            {/*    {uploadButton}*/}
            {/*</Upload>*/}

            <Button type="primary" htmlType="submit" style={{marginRight: "10px"}} onClick={handleSubmit}>
                Sumbit
            </Button>
        </form>
    )
};


export const AddNewsFormik = () => {
debugger
  return (
    <>
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
                  name="newsTitle"
                  type="text"
                  // label="EmailTEST"
                  helperText="Please enter news title"
                />
              </Box>
              <Box margin={1}>
                <Field
                  component={DatePicker}
                  name="newsDate"
                  label="News date"
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

    </>
  )
};

export const AddNewsForm : any = reduxForm({
    form: 'newsForm'
})(NewsForm);


// : any 10
// переписать AddNewsForm на формит и зитипизировать