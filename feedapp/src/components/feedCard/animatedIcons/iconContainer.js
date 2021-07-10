import React, {useState} from 'react';
import {Icon} from './icon';

export const IconContainer = (props) => {

    const [hover, setHover] = useState(false);


    const clicked = (id) => {
        props.onUpdate(id);
    }

    const hovering = (hoverState) => {
        setHover(hoverState)

    }



    const {index, img, id, title, show} = props;
    const delay = index / 20 + 0.2;

    const divStyles = {
        position: 'relative',
        display: 'inline-block',
        padding: '6px 4px 0px',
        transition: `transform 0.2s ${delay}s cubic-bezier(.76,.26,.28,1.4), opacity 0.1s ${delay}s`,
        transform: show ? 'translateY(0px) scale(1)' : 'translateY(30px) scale(0.8)',
        opacity: show ? 1 : 0,
        cursor: 'pointer'
    };

    return (
        <li style={divStyles}
            onClick={() => clicked(id)}
            onMouseEnter={() => hovering(true)}
            onMouseLeave={() => hovering(false)}>
            <Icon index={index} link={img} id={id} title={title} height={35} width={35} hover={hover} />
        </li>
    );

}