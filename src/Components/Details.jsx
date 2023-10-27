import { List,ListItem,ListItemIcon,ListItemText } from '@mui/material';
import ViewStreamOutlinedIcon from '@mui/icons-material/ViewStreamOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';
export default function Details(){
    return(
            <div className='details'>
                <div className='Assessment'>
                    <p className='details_head'>Total Assessment</p>
                    <ul className='details_tag'>
                        <li className='icon1'><ViewStreamOutlinedIcon/></li>
                        <li><p>34</p></li>
                    </ul>
                </div>
                <div className='candidates'>
                    <p className='details_head'>Candidates</p>
                    <ul className='details_tag'>
                        <li  className='icon2'><PeopleOutlineOutlinedIcon /></li>
                        <li className='tag_line'>
                            <p>11,145<br/><small>Total Candidates</small></p>                        
                        </li>
                        <li>
                            <p>114<br/><small>who Attempted</small></p>                          
                        </li>
                    </ul>
                </div>
                <div className='source'>
                    <p className='details_head'>Candidates Source</p>
                    <ul className='details_tag'>
                        <li  className='icon3'><LanguageOutlinedIcon /></li>
                        <li className='tag_line'>
                            <p>11,000<br/><small>E-mail</small></p>
                            
                        </li>
                        <li className='tag_line'>
                            <p>145<br/><small>Total Share</small></p>
                            
                        </li>
                        <li>
                            <p>145<br/><small>Unique Link</small></p>
                            
                        </li>
                    </ul>
                </div>
                <div className='purpose'>
                <p className='details_head'>Total Purpose</p>
                    <ul className='details_tag'>
                        <li  className='icon4'><InsertLinkOutlinedIcon /></li>
                        <li><p>11</p></li>
                    </ul>
                </div>
            </div>
    )
}