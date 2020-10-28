import {Field, reduxForm} from "redux-form";
import {ADatePicker, AInput, AInputTextArea} from "./FormsControls";
import {Button, Upload} from "antd";
import {useDispatch} from "react-redux";
import {successMessages, successMessagesError} from "../innerComponent/AuxiliaryFunction";
import styles from "../../style/AddNewsForm.css";
import React from "react";
import moment from "moment";
import {required} from "./validation";
import {addNewsThunk, fileUploadHandler} from "../../redux/NewsReducer";
import UploadOutlined from "@ant-design/icons/lib/icons/UploadOutlined";

let NewsForm = ({handleSubmit ,fileUpload}) => {

    const props = {
        listType: 'picture',
        accept: 'image/*',

        onChange({file}) {
            console.log(file)
            // url: file.
            // if (file.status !== 'uploading') {
            //     console.log(file, fileList);
            // }
            // if (file.status === 'done') {
            //     successMessages(`${file.name} file uploaded successfully`)
            //     console.log(file);
            // }else if(file.status === 'error'){
            //     successMessagesError(`${file.name} file upload failed.`)
            // }
        },
        customRequest({file}) {
            fileUpload(file)
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <Field
                name="nameNews"
                component={AInput}
                placeholder={'Название новости'}
                onFocus={e => e.preventDefault()}
                onBlur={e => e.preventDefault()}
            />
            <Field
                name="newsDate"
                component={ADatePicker}
                placeholder={'News Day'}
                hasFeedback
                defaultData={moment().format('DD/MM/YYYY')}
                validate={[required]}
                onFocus={e => e.preventDefault()}
                onBlur={e => e.preventDefault()}
            />
            <Field
                name="textNews"
                component={AInputTextArea}
                placeholder={'Введите текст новости'}
                onFocus={e => e.preventDefault()}
                onBlur={e => e.preventDefault()}
            />

            <Upload {...props} name='file' onChange={props.onChange} customRequest={props.customRequest}>
                <Button>
                    <UploadOutlined/> Upload
                </Button>
            </Upload>

            <Button type="primary" htmlType="submit" style={{marginRight: "10px"}} onClick={handleSubmit}>
                Sumbit
            </Button>
        </form>
    )
};
const AddNewsForm = reduxForm({
    form: 'newsForm'
})(NewsForm);
export default function AddNewNews({openCloseModalWindow}) {
    const dispatch = useDispatch()
   async function fileUpload (file){
        const fd = new FormData()
        await fd.append('image',file,file.name)
       debugger
       console.log(fd)
        dispatch(fileUploadHandler(fd))
    }
    const onSubmit = (formData) => {
        dispatch(addNewsThunk(formData))
        successMessages('Новость добавлена')
        openCloseModalWindow()
    }
    return (
        <div className={styles.wrap}>
            <div className={styles.container}>
                <button onClick={openCloseModalWindow}>Close</button>
                <AddNewsForm onSubmit={onSubmit} fileUpload={fileUpload}/>
            </div>
        </div>
    )
}