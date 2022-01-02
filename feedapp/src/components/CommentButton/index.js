import React, {useEffect, useState} from 'react';
import IconButton from '@material-ui/core/IconButton';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import Typography from '@material-ui/core/Typography';
export const CommentButton = ({id}) => {
    const [isSelected, setisSelected] = useState(false)
    useEffect(() => {

    }, [isSelected])

    const onSletect = () => {
        setisSelected(!isSelected)
    }
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-end'
        }}>
            <IconButton
                aria-label="add to favorites"
                onClick={onSletect}
            >
                            <ChatBubbleOutlineIcon />
                <Typography variant="caption" component="p" style={{marginLeft:5, fontSize:15}}>
                    2k
                </Typography>
            </IconButton>

        </div>
    );
}