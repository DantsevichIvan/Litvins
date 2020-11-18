import {useDispatch} from "react-redux";
import {successMessages} from "../../FormsControls/AuxiliaryFunction";
import styles from "./AddNewsForm.css";
import React, {useState} from "react";
import {addNewsThunk, fileUploadHandler} from "../../../action/newsActions";
import {AddNewsForm} from "./NewsForm";


export default function AddNewNews({openCloseModalWindow}) {
    const [fileList, setFileList] = useState([])
    const [previewImage, setPreviewImage] = useState('')
    const dispatch = useDispatch()

    const onSubmit = (fd) => {
        let formData = new FormData();
        formData.append("photo", fileList[0].originFileObj);
        debugger
        dispatch(addNewsThunk(fd))
        // dispatch(fileUploadHandler(formData))
        successMessages('Новость добавлена')
        openCloseModalWindow()
    }

    return (
        <div className={styles.wrap}>
            <div className={styles.container}>
                <button onClick={openCloseModalWindow}>Close</button>
                <AddNewsForm
                    onSubmit={onSubmit}
                    fileList={fileList}
                    setFileList={setFileList}
                    previewImage={previewImage}
                    setPreviewImage={setPreviewImage}
                />
            </div>
        </div>
    )
}
