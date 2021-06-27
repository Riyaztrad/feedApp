import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {useSelector, useDispatch} from 'react-redux';
import {fetchDialogVisible, showCreateDialog} from 'generic';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
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
    const [imageUrl, setImageUrl] = useState('')
    const [videoUrl, setVideoUrl] = useState('')
    const [like, setLike] = useState(0)
    const [love, setLove] = useState(0)
    const [support, setSupport] = useState(0)
    const [open, setOpen] = React.useState(false);
    const [openerror, setErrOpen] = React.useState(false);

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


    const submit = async (event) => {
        event.preventDefault();
        console.log("data")
        try {
            let data = {
                CompaignId: compaignId,
                feedId: feedid,
                feedDescription: feedDescription,
                objectUrls: [
                    {
                        type: "image",
                        url: imageUrl
                    },
                    {
                        type: "video",
                        url: videoUrl
                    }
                ],
                my_reactions: {
                    reaction: "true",
                    type: "like"
                },
                reactions: {
                    like: like,
                    love: love,
                    support: support
                },
                createDts: new Date(),
                updateDts: new Date(),
            }
            const apiUrl = `https://api.github.com/users/hacktivist123/repos`;//please change this api with post api
            const response = await fetch(
                apiUrl, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                },
                body: data,
            })
            const responseJson = await response.json();
            if (responseJson.message === "Not Found") {
                handleErrClick()
            } else {
                handleClick()
            }
            console.log("response", responseJson)
        } catch (err) {
            console.log("error", err)
        }

    }
    const handleDialogeClose = () => {
        dispatch(showCreateDialog({isVisible: false}))
    };
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
                            label="Feed Id"
                            name="Feed Id"
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
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="imageUrl"
                            label="Image Url"
                            id="imageUrl"
                            onChange={(event) => setImageUrl(event.target.value)}

                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="videoUrl"
                            label="Video Url"
                            id="videoUrl"
                            onChange={(event) => setVideoUrl(event.target.value)}

                        />
                        <Grid container spacing={2}>
                            <Grid item xs={4}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="like"
                                    inputMode="numeric"
                                    label="Like"
                                    name="like"
                                    autoFocus
                                    onChange={(event) => setLike(event.target.value)}

                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="love"
                                    inputMode="numeric"
                                    label="Love"
                                    name="love"
                                    autoFocus
                                    onChange={(event) => setLove(event.target.value)}

                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="support"
                                    inputMode="numeric"
                                    label="Support"
                                    name="support"
                                    autoFocus
                                    onChange={(event) => setSupport(event.target.value)}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    onClick={(event) => {
                                        handleDialogeClose()
                                    }}
                                >
                                    Close
                                </Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    onClick={submit}
                                >
                                    Create
                                </Button>
                            </Grid>

                        </Grid>

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