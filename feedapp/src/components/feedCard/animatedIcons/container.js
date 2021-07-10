import React, {useState} from 'react';
import {IconContainer} from './iconContainer';

export const Reactions = (props) => {

    const [open, setOpen] = useState(false)

    const toggleOpen = (openState) => {
        setOpen(openState)
    }


    const items = props.items;
    const width = items.length * 52;

    const optionsStyles = {
        position: 'relative'
    };

    const elementsStyles = {
        listStyle: 'none',
        padding: 0,
        margin: 'auto',
        background: '#FFF',
        boxShadow: '0 0 0 1px rgba(0, 0, 0, .08), 0 2px 2px rgba(0, 0, 0, .15)',
        borderRadius: '30px',
        visibility: open ? 'visible' : 'hidden',
        opacity: open ? 1 : 0,
        transition: 'all 0.2s 0.2s',
        display: 'inline-block',
        position: 'absolute',
        width: `${width}px`,
        left: 0,
        bottom: 'calc( 100% + 4px )',
        zIndex: '9999'
    }

    const listItems = items.map((item, i) => {
        return <IconContainer key={item.id} onUpdate={(id) => {
            setOpen(false)
            props.onUpdate(id)
        }}
            id={item.id} index={i} img={item.img} title={item.description} show={open}>
        </IconContainer>
    });

    return (
        <span style={optionsStyles}
            onMouseEnter={() => toggleOpen(true)}
            onMouseLeave={() => toggleOpen(false)} >
            <ul style={elementsStyles}>
                {listItems}
            </ul>
            <div>
                {props.children}
            </div>
        </span>
    );


}