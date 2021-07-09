import React from 'react';
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import ReactPlayer from 'react-player'
import {pdfjs} from 'react-pdf';
import {makeStyles} from '@material-ui/core/styles';
import {SinglePagePdf} from '../SinglePagePdf'
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
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


    const SingleFile = (item) => {
        if(item){

      
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
                        <SinglePagePdf pdf={item.url} className={classes.pdf} />

                    </div>
                )
            }
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
                                        <div className="each-slide" key={index} >
                                            <div className="image-container"  >
                                                <ReactPlayer url={item.url} width="100%" hheight={350} controls={true} />
                                            </div>
                                        </div>
                                    )
                                } else
                                    if (item.type === "image/png" || item.type === "image/jpeg" || item.type === "image/jpg") {
                                        return (
                                            <div className="each-slide" key={index} >
                                                <div className="image-container"  >
                                                    <img src={item.url} style={{width: '100%', height: 350}} alt="slide" />

                                                </div>
                                            </div>
                                        )
                                    } else {
                                        return (
                                            <div>
                                                <SinglePagePdf className={classes.pdf} pdf={item.url} />

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

