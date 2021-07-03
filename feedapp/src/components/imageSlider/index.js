import React from 'react';
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import ReactPlayer from 'react-player'
import Pdf from '../../assets/pdf.png'

export const Slideshow = ({feedImages}) => {
    console.log("feedImages", feedImages)
    return (
        <div>
            <Slide easing="ease"
            >
                {
                    feedImages.map((item, index) => {
                        if (item.type === "mp4") {
                            return (
                                <div className="each-slide">
                                    <div className="image-container"  >
                                        <ReactPlayer url={item.url} width="100%" hheight={350} controls={true} />
                                    </div>
                                </div>
                            )
                        } if (item.type === "jpeg") {
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

