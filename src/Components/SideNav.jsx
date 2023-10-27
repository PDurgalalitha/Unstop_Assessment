import React from 'react'
import { Divider, List,ListItem,ListItemIcon,ListItemText } from '@mui/material';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
export default function SideNav(){
    return(
            <List className='DrawerList'>
                <ListItem className='DrawerList-Item'>
                    <ListItemIcon>
                         <DashboardOutlinedIcon />
                    </ListItemIcon> 
                   <ListItemText >
                        DashBoard
                    </ListItemText>
                </ListItem>
                <ListItem className='DrawerList-Item'>
                    <ListItemIcon>
                         <NoteAltOutlinedIcon />
                    </ListItemIcon> 
                    <ListItemText>
                        Assessment
                    </ListItemText>
                </ListItem>
                <ListItem className='DrawerList-Item'>
                <ListItemIcon>
                         <QuizOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText>
                        MyLibrary
                    </ListItemText>
                </ListItem>
                <Divider/>
                <ListItem className='DrawerList-Item'>
                    <button className='btn1'>Admin</button>
                    <ListItemIcon>
                         <QuizOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText>
                        Round status
                    </ListItemText>
                </ListItem>
            </List>
    )
}