import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import {green} from "@material-ui/core/colors";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import BackupIcon from "@material-ui/icons/Backup";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Grid from "@material-ui/core/Grid";
import {uploadimage} from "generic";
import {useDispatch} from "react-redux";
import Typography from "@material-ui/core/Typography";
import ReactPlayer from 'react-player'
import Pdf from '../../assets/pdf.png'
import CircularProgress from '@material-ui/core/CircularProgress';


export const FileUpload = ({uploadedImages, addOne, setFilecomponents, index}) => {
  const dispatch = useDispatch();
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("");
  const [type, setType] = useState("");
  const [isUploaded, setIsUploaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [videoFilePath, setVideoFilePath] = useState(null);

  const selectedFile = (e) => {
    const file = e.target.files[0];
    setVideoFilePath(URL.createObjectURL(e.target.files[0]));
    console.log("file", file)
    if (!file) {
      return;
    }

    var fileName = e.target.files[0].name;
    setFileName(fileName);
    setType(e.target.files[0].type);


    // if (e.target.files[0].type==='application/pdf') {
    //   pdftoimage(file, {
    //     format: 'png',  // png, jpeg, tiff or svg, defaults to png
    //     prefix: 'img',  // prefix for each image except svg, defaults to input filename
    //     outdir: 'out'   // path to output directory, defaults to current directory
    //   })
    //     .then(function () {
    //       console.log('Conversion done');
    //     })
    //     .catch(function (err) {
    //       console.log(err);
    //     });
    // }

    var fReader = new FileReader();
    fReader.readAsDataURL(e.target.files[0]);

    fReader.onloadend = function (event) {
      setFile(event.target.result);
    };
  };
  const uploadImage = async () => {
    setIsLoading(true)
    let base64 = file.split(";");
    const data = {
      image: base64[1],
      mime: type,
      name: fileName,
    };
    const result = await dispatch(uploadimage(data));
    console.log(result)
    if (result.type === "feed/uploadImage/fulfilled") {
      setIsUploaded(true);
      uploadedImages(result.payload.imageURL, type);

    }
    setIsLoading(false)
  };

  const Preview = () => {


    if (type === "image/png" || type === "image/jpeg" || type === "image/jpg") {
      return (
        <img src={file} style={{height: 100, width: "100%"}} alt="feed" />
      )
    } else if (type === "video/mp4") {
      return (
        <ReactPlayer url={videoFilePath} width="100%" height="100%" controls={true} />

      )
    } else {
      return (
        <img src={Pdf} style={{height: 100, width: "100%"}} alt="slide" />
      )
    }
  }

  return (
    <div>
      {file ? (
        <Grid conatainer spacing={2}>
          <Grid item xs={6}>
            {Preview()}
            <div style={{display: "flex", justifyContent: "space-between", marginBottom: 10}}>
              {isUploaded ? (
                <CheckCircleIcon style={{fontSize: 35}} />
              ) : (
                <div
                  style={{
                    width: 150,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {
                    isLoading ?
                      <CircularProgress /> :
                      <>
                        <BackupIcon
                          style={{fontSize: 35}}
                          onClick={() => {
                            uploadImage(setFilecomponents[index], index);
                          }}
                        />
                        <Typography component="p" variant="p">
                          Upload to S3
                        </Typography>
                      </>
                  }
                </div>
              )}
              {
                !isLoading ?
                  <div
                    style={{
                      width: 150,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <AddCircleIcon style={{color: green[500], fontSize: 35}} onClick={addOne} />
                    <Typography component="p" variant="p">
                      Add More
                    </Typography>
                  </div> : null
              }


              {/* <DeleteIcon style={{color: 'red',fontSize:35}}
                                    onClick={() => {removeOne(setFilecomponents[index], index)}}
                                /> */}
            </div>
          </Grid>
        </Grid>
      ) : (
        <Button containerElement="label" label="My Label">
          <input
            accept="image/png, image/gif, image/jpeg, video/mp4, .pdf"
            type="file"
            onChange={selectedFile}
          />
        </Button>
      )}
    </div>
  );
};
