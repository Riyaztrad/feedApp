import React, {useState} from 'react';
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import ReactPlayer from 'react-player'
import Pdf from '../../assets/pdf.png'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import {Document, Page, pdfjs} from 'react-pdf';
import {makeStyles} from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    pdf: {
        height: 350,
        overflow: 'scroll',
        width: '100%',
        display: 'flex',
        alignSelf: 'center',
        fontsize: 18
    }
}));
export const Slideshow = ({feedImages}) => {
    const classes = useStyles();
    pdfjs.GlobalWorkerOptions.workerSrc =
        `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    function onDocumentLoadSuccess({numPages}) {
        setNumPages(numPages);
    }


    const SingleFile = (item) => {
        if (item.type === "video/mp4") {
            return (
                <div className="each-slide">
                    <div className="image-container"  >
                        <ReactPlayer url={item.url} width="100%" hheight={350} controls={true} />
                    </div>
                </div>
            )
        } else
            if (item.type === "image/png" || item.type === "image/jpeg" || item.type === "image/jpg") {
                return (
                    <div className="each-slide">
                        <div className="image-container"  >
                            <img src={item.url} style={{width: '100%', height: 350}} alt="slide" />

                        </div>
                    </div>
                )
            } else {
                return (
                    <div>
                        {/* <div className="image-container"  > */}
                        <Document
                            className={classes.pdf}
                            file={item.url}
                            onLoadSuccess={onDocumentLoadSuccess}
                        >
                            <Page pageNumber={pageNumber} />
                        </Document>
                        <p>Page {pageNumber} of {numPages}</p>
                        {/* <img src={Pdf} style={{width: '100%', height: 350}} alt="slide" />
                    
                    <CloudDownloadIcon
                        onClick={() => {
                            window.open(item.url);
                        }}
                    /> */}
                        {/* </div> */}
                    </div>
                )
            }
    }

    return (
        <div>
            {
                feedImages.length > 1 ?

                    <Slide easing="ease"
                    >
                        {
                            feedImages.map((item, index) => {
                                if (item.type === "video/mp4") {
                                    return (
                                        <div className="each-slide">
                                            <div className="image-container"  >
                                                <ReactPlayer url={item.url} width="100%" hheight={350} controls={true} />
                                            </div>
                                        </div>
                                    )
                                } else
                                    if (item.type === "image/png" || item.type === "image/jpeg" || item.type === "image/jpg") {
                                        return (
                                            <div className="each-slide">
                                                <div className="image-container"  >
                                                    <img src={item.url} style={{width: '100%', height: 350}} alt="slide" />

                                                </div>
                                            </div>
                                        )
                                    } else {
                                        return (
                                            <div>
                                                {/* <div className="image-container"  > */}
                                                <Document
                                                    className={classes.pdf}
                                                    file={item.url}
                                                    onLoadSuccess={onDocumentLoadSuccess}
                                                >
                                                    <Page pageNumber={pageNumber} />
                                                </Document>
                                                <p>Page {pageNumber} of {numPages}</p>
                                                {/* <img src={Pdf} style={{width: '100%', height: 350}} alt="slide" />
                                            
                                            <CloudDownloadIcon
                                                onClick={() => {
                                                    window.open(item.url);
                                                }}
                                            /> */}
                                                {/* </div> */}
                                            </div>
                                        )
                                    }
                            })
                        }


                    </Slide>
                    :
                    SingleFile(feedImages[0])

            }
        </div>
    )
};

