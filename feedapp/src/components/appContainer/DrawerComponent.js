import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemIcon, IconButton, Button } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
// import HomeOutlinedIcon from '@material-ui/icons-material/HomeOutlined';
// import LoyaltyOutlinedIcon from '@material-ui/icons-material/LoyaltyOutlined';
// import PersonOutlineOutlinedIcon from '@material-ui/icons-material/PersonOutlineOutlined';
// import AddBusinessOutlinedIcon from '@material-ui/icons-material/AddBusinessOutlined';
import ClearIcon from '@material-ui/icons/Clear';
// import { useHistory } from 'react-router';



const DrawerComponent = () => {
    // const history = useHistory();
    const [openDrawer, setOpenDrawer] = useState(false)
    const fullWidth = global.window.innerWidth


    return (
        <>
            <Drawer

                anchor='left'
                onClose={() => setOpenDrawer(false)}
                open={openDrawer}
                style={{ display: 'flex', flexDirection: 'column' }}
            >
                <IconButton style={{ marginLeft: 290, marginTop: 10 }}
                    onClick={() => setOpenDrawer(false)}
                >
                    <ClearIcon />
                </IconButton>
                <List style={{ width: fullWidth, flex: 1 }} >
                    <ListItem button  >
                        <IconButton >
                            {/* <PersonOutlineOutlinedIcon /> */}
                        </IconButton>
                        <ListItemIcon>
                            <ListItemText>Home</ListItemText>
                        </ListItemIcon>

                    </ListItem>
                    <ListItem button >
                        <IconButton>
                            {/* <HomeOutlinedIcon /> */}
                        </IconButton>
                        <ListItemIcon>
                            <ListItemText>Explore</ListItemText>
                        </ListItemIcon>

                    </ListItem>
                    <ListItem button  >
                        <IconButton>
                            {/* <AddBusinessOutlinedIcon /> */}
                        </IconButton>
                        <ListItemIcon>
                            <ListItemText>Recurring</ListItemText>
                        </ListItemIcon>

                    </ListItem>
                    <ListItem button  >
                        <IconButton>
                            {/* <LoyaltyOutlinedIcon /> */}
                        </IconButton>
                        <ListItemIcon >
                            <ListItemText>How It Works</ListItemText>
                        </ListItemIcon>

                    </ListItem>
                    <ListItem button  >
                        <IconButton>
                            {/* <LoyaltyOutlinedIcon /> */}
                        </IconButton>
                        <ListItemIcon >
                            <ListItemText>News</ListItemText>
                        </ListItemIcon>

                    </ListItem>
                    <ListItem button  >
                        <IconButton>
                            {/* <LoyaltyOutlinedIcon /> */}
                        </IconButton>
                        <ListItemIcon >
                            <ListItemText>Blog</ListItemText>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem button  >
                        <IconButton>
                            {/* <LoyaltyOutlinedIcon /> */}
                        </IconButton>
                        <ListItemIcon >
                            <ListItemText>About</ListItemText>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem button  >
                        <IconButton>
                            {/* <LoyaltyOutlinedIcon /> */}
                        </IconButton>
                        <ListItemIcon >
                            <ListItemText>Contact</ListItemText>
                        </ListItemIcon>
                    </ListItem>
                </List>
                <div style={{ flexDirection: 'column', marginBottom: 10 }}>
                    <Button
                        style={{ backgroundColor: '#333', width: '80%', marginLeft: 35,color: 'white' }}
                        type="submit"
                        variant="contained"
                        sx={{ mt: 2, mb: 1 }}
                    >
                        Login
                    </Button>
                </div>
                <div style={{ marginBottom: 10 }}>
                    <Button
                        style={{ backgroundColor: '#333', width: '80%', marginLeft: 35 ,color: 'white'}}
                        type="submit"
                        variant="contained"
                        sx={{ mt: 2, mb: 1 }}
                    >
                        SignUp
                    </Button>
                </div>
                <div style={{ marginBottom: 10 }}>
                    <Button
                        style={{ backgroundColor: '#333', width: '80%', marginLeft: 35 ,color: 'white'}}
                        type="submit"
                        variant="contained"
                        sx={{ mt: 2, mb: 1 }}
                    >
                        Create Compaign
                    </Button>
                </div>




            </Drawer>
            <IconButton
                onClick={() => setOpenDrawer(!openDrawer)}
                style={{marginLeft:'15rem'}}
            >
                <MenuIcon style={{ fontSize:'2rem', marginBottom:'1rem', color: 'white' }} />
            </IconButton>
        </>
    )
}

export default DrawerComponent
