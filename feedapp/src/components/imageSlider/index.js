import React from 'react';
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


export const Slideshow = ({feedImages}) => {
    return (
        <div>
            <Slide easing="ease"
            >
                {
                    feedImages.map((item, index) => {
                        return (
                            <div className="each-slide">
                                <div className="image-container"  >
                                    <img src={item.imageUrl} style={{width: '100%',height:350}} alt="slide" />
                                </div>
                            </div>
                        )
                    })
                }


            </Slide>
        </div>
    )
};

