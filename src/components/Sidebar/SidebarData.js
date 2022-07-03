import React from  'react';
import HomeIcon from '@mui/icons-material/Home';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';



export const SidebarData = [

    {
        title : 'Home',
        icon :<HomeIcon />,
        link :'/'
    },
    {
        title : 'Patient Profile',
        icon :<PersonOutlineOutlinedIcon />,
        link :'/'
    },
    {
        title : 'Appointments',
        icon :<CalendarMonthOutlinedIcon />,
        link :'/'
    },
    {
        title : 'Medical History',
        icon :<HistoryOutlinedIcon />,
        link :'/'
    },
    {
        title : 'Settings',
        icon :<SettingsOutlinedIcon />,
        link :'/'
    },
  
]