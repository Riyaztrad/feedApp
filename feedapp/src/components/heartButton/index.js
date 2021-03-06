import React, {useEffect, useState} from 'react';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';
export const HeartButton = ({id, className}) => {
    const [isSelected, setisSelected] = useState(false)
    useEffect(() => {

    }, [isSelected])

    const onSletect = () => {
        setisSelected(!isSelected)
    }
    return (
        <div style={{
            // display: 'flex',
            // flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-end'
        }}>
            <IconButton
                aria-label="add to favorites"
                onClick={onSletect}
                className={className}
            >
                <FavoriteIcon style={{color: isSelected ? 'red' : 'gray'}} />
                <Typography variant="caption" component="p" style={{marginLeft:5, fontSize:15}}>
                    1k
                </Typography>
            </IconButton>

        </div>
    );
}