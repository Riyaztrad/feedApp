import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {useSelector, useDispatch} from 'react-redux';
import {fetchDialogVisible, showCreateDialog, createFeed} from 'generic';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import {FileUpload} from '../fileUpload'

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export const FeedForm = () => {
    const classes = useStyles();
    const isVisible = useSelector(fetchDialogVisible)
    const dispatch = useDispatch();
    const [compaignId, setCompaignId] = useState(0)
    const [feedid, setFeedid] = useState(0)
    const [feedDescription, setFeedDescription] = useState('')
    const [open, setOpen] = React.useState(false);
    const [openerror, setErrOpen] = React.useState(false);
    const [images, setImages] = useState([])
    const [fileCount, setFileCount] = useState(1)
    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    const handleErrClick = () => {
        setErrOpen(true);
    };

    const handleErrClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setErrOpen(false);
    };

    function uploadedImages(file) {
        setImages([...images, file])
    }
    const submit = async (event) => {
        event.preventDefault();
        try {
            let imgobj = [];
            images.map((item, index) => {
                imgobj.push({
                    type: 'image',
                    imageUrl: item
                })
                return 0;
            })
            let data = {
                compiagn_id: compaignId,
                compiagn_title: feedid,
                description: feedDescription,
                object_urls: imgobj
            }
            const result = await dispatch(createFeed(data));
            console.log("result", result);
            if (result.type === "feed/createFeed/fulfilled") {
                handleClick()
                handleDialogeClose()
                setFileCount(0)
            } else {
                handleErrClick()
            }

        } catch (err) {
            console.log("error", err)
        }

    }
    const handleDialogeClose = () => {
        dispatch(showCreateDialog({isVisible: false}))
    };
    const setFilecomponents = [];
    const addOne = () => {
        setFileCount(fileCount + 1)
    }
    const removeOne = (curr, index) => {
        if (index > -1) {
            setFilecomponents.splice(index, 1)
            setFileCount(setFilecomponents.length)
        }
        //    
    }
    const uploadImage = () => {

    }

    for (var i = 0; i < fileCount; i++) {
        setFilecomponents.push(
            <FileUpload
                index={i}
                uploadedImages={uploadedImages}
                addOne={addOne}
                removeOne={removeOne}
                setFilecomponents={setFilecomponents}
                uploadImage={uploadImage}
            />)
    }



    return (


        <Dialog
            open={isVisible}
            onClose={handleDialogeClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                <Typography component="h1" variant="h5">
                    Create New Feed
                </Typography>
            </DialogTitle>
            <DialogContent>

                <Container component="main" maxWidth="md">
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="CompaignId"
                            inputMode="numeric"
                            label="Compaign Id"
                            name="Compaign Id"
                            autoFocus
                            onChange={(event) => setCompaignId(event.target.value)}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="FeedId"
                            inputMode="numeric"
                            label="Feed Title"
                            name="Feed title"
                            autoFocus
                            onChange={(event) => setFeedid(event.target.value)}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            multiline
                            rows={5}
                            name="feedDescription"
                            label="Feed Description"
                            id="feedDescription"
                            onChange={(event) => setFeedDescription(event.target.value)}

                        />
                        {setFilecomponents}
                        {/* <FileUpload
                            handleUploadChange={handleUploadChange} /> */}
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            className={classes.submit}
                            onClick={submit}
                        >
                            Create
                        </Button>
                    </form>

                    <Snackbar open={openerror} autoHideDuration={6000} onClose={handleErrClose}>
                        <Alert onClose={handleErrClose} severity="error">
                            Something went wrong!
                        </Alert>
                    </Snackbar>
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success">
                            Created Successfully!
                        </Alert>
                    </Snackbar>
                </Container>

            </DialogContent>

        </Dialog>
    );
}