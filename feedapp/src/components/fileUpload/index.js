import React, {useState} from 'react';
import Button from '@material-ui/core/Button'
import {green} from '@material-ui/core/colors';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import BackupIcon from '@material-ui/icons/Backup';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Grid from '@material-ui/core/Grid';
import {uploadimage} from 'generic';
import {useDispatch} from 'react-redux'
import Typography from '@material-ui/core/Typography';


export const FileUpload = ({
    uploadedImages,
    addOne,
    setFilecomponents,
    index
}) => {
    const dispatch = useDispatch()
    const [file, setFile] = useState('');
    const [fileName, setFileName] = useState('');
    const [type, setType] = useState('');
    const [isUploaded, setIsUploaded] = useState(false);
    const selectedFile = (e) => {
        const file = e.target.files[0];
        if (!file) {
            return;
        }
        var fileName = e.target.files[0].name;
        setFileName(fileName)
        setType(e.target.files[0].type)
        var fReader = new FileReader();
        fReader.readAsDataURL(e.target.files[0]);

        fReader.onloadend = function (event) {
            setFile(event.target.result)
        }
    }
    const uploadImage = async () => {
        let base64 = file.split(";")
        const data = {
            image: base64[1],
            mime: type,
            name: fileName
        }
        const result = await dispatch(uploadimage(data));
        if (result.type === "feed/uploadImage/fulfilled") {
            setIsUploaded(true)
            uploadedImages(result.payload.imageURL)
        }
    }

    return (
        <div>
            {file ?

                <Grid conatainer spacing={2}>
                    <Grid item xs={6}>
                        <img src={file} style={{height: 100, width: '100%'}} alt="feed" />
                        <div style={{display: 'flex', justifyContent: 'space-between',marginBottom:10}}>
                            {isUploaded ?
                                <CheckCircleIcon style={{fontSize: 35}} />
                                :
                                <div style={{width: 150, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                    <BackupIcon
                                        style={{fontSize: 35}}
                                        onClick={() => {uploadImage(setFilecomponents[index], index)}}
                                    />
                                    <Typography component="p" variant="p">
                                        Upload to S3
                                    </Typography>
                                </div>
                            }
                            <div style={{width: 150, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                <AddCircleIcon style={{color: green[500], fontSize: 35}}
                                    onClick={addOne}
                                />
                                <Typography component="p" variant="p">
                                    Add More
                                </Typography>
                            </div>


                            {/* <DeleteIcon style={{color: 'red',fontSize:35}}
                                    onClick={() => {removeOne(setFilecomponents[index], index)}}
                                /> */}
                        </div>
                    </Grid>


                </Grid>

                :
                <Button
                    containerElement='label'
                    label='My Label'>
                    <input
                        accept="image/png, image/gif, image/jpeg"
                        type="file"
                        onChange={selectedFile} />
                </Button>
            }

        </div>);
}