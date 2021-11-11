import { adminRoot } from "./defaultValues";
import HomeIcon from '@mui/icons-material/Home';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import BathroomIcon from '@mui/icons-material/Bathroom';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import GroupIcon from '@mui/icons-material/Group';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import FindReplaceIcon from '@mui/icons-material/FindReplace';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import HomeRepairServiceOutlinedIcon from '@mui/icons-material/HomeRepairServiceOutlined';
import ScreenLockRotationIcon from '@mui/icons-material/ScreenLockRotation';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import BeachAccessOutlinedIcon from '@mui/icons-material/BeachAccessOutlined';
import PolicyOutlinedIcon from '@mui/icons-material/PolicyOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

const data = [
    {
        id: 'home',
        icon:<HomeIcon />
        ,
        label: 'Home',
        to: `${adminRoot}/home`,
    },

        {
            id: 'applecroft',
            icon: <BackupTableIcon />,
            label: 'Applecroft',
            to: `${adminRoot}/applecroft`,

        },
        {
            id: 'digest',
            icon: <BathroomIcon />,
            label: 'Digest',
            to: `${adminRoot}/digest`,

        },
      

    {
        id: 'category',
        icon: <AddLocationIcon />,
        label: 'Category',
        to: `${adminRoot}/category`,
    },
    {
        id: 'help',
icon: <GroupIcon />,
label: 'Help Map',
title:"Categories",
to: `${adminRoot}/help`,
    },
    {
        id: 'business',
icon: <HomeWorkIcon />,
label: 'Business',

to: `${adminRoot}/business`,
    },
    {
        id: 'finds',
icon: <ScreenLockRotationIcon />,
label: 'Finds',

to: `${adminRoot}/finds`,
    },
    {
        id: 'local',
        icon: <LockOpenIcon />,
        label: 'Local Deals',

to: `${adminRoot}/local`,
    },
    {
        id: 'public',
        icon: <HomeRepairServiceOutlinedIcon />,
        label: 'Public Services',

to: `${adminRoot}/Public`,
    },
    {
        id: 'Events',
        icon: <CalendarTodayOutlinedIcon />,
        label: 'Events',
to: `${adminRoot}/safety`,
    },
    {
        id: 'safety',
        icon: <BeachAccessOutlinedIcon />,
        label: 'Safety',
to: `${adminRoot}/Safety`,
    },
    {
        id: 'lost',
        icon: <PolicyOutlinedIcon />,
        label: 'Lost and Found',
to: `${adminRoot}/lost`,
    },
    {
        id: 'document',
        icon: <InsertDriveFileOutlinedIcon />,
        label: 'Documents',
to: `${adminRoot}/document`,
    },
    {
        id: 'general',
        icon: <DescriptionOutlinedIcon />,
        label: 'General',
to: `${adminRoot}/general`,
    },
    
      
    {
        id: 'allgroup',
        icon: <GroupIcon />,
        label: 'Group',
        title:"Groups",
        to: `${adminRoot}/allgroup`,
    },
       {
            id: 'directories',
            icon: <GroupIcon />,
            label: 'Neighbours',
            title:"Directories",
            to: `${adminRoot}/directories`,
        }






]

export default data;
