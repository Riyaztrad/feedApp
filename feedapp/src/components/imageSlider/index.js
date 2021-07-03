import React from 'react';
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import ReactPlayer from 'react-player'
import Pdf from '../../assets/pdf.png'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
export const Slideshow = ({feedImages}) => {
    return (
        <div>
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
                                    <div className="each-slide">
                                        <div className="image-container"  >
                                            <img src={Pdf} style={{width: '100%', height: 350}} alt="slide" />
                                            
                                            <CloudDownloadIcon
                                                onClick={() => {
                                                    window.open(item.url);
                                                }}
                                            />
                                        </div>
                                    </div>
                                )
                            }
                    })
                }


            </Slide>
        </div>
    )
};

