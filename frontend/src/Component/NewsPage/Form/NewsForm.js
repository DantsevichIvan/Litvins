import Icon from "@ant-design/icons";
import {Field, reduxForm} from "redux-form";
import {ADatePicker, AInput, AInputTextArea} from "../../FormsControls/FormsControls";
import moment from "moment";
import {required} from "../../FormsControls/validation";
import {Button, Upload} from "antd";
import React from "react";

const NewsForm = ({handleSubmit, setFileList, fileList}) => {
    const handlePreview = file => {
        setFileList([...fileList, file.thumbUrl])
    };
    const handleUpload = ({fileList}) => {
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

export const AddNewsForm = reduxForm({
    form: 'newsForm'
})(NewsForm);
