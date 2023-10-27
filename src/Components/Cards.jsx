import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';
// import Button from '@mui/material';
export default function Cards({arr}) {
  return (
    <Box className="allcards">
    <Card className='card' >
      <CardActionArea className='card_Area'>
        <CardContent className='cardText'>
                <AddOutlinedIcon className='icon'/>
            <h2>New Assessment</h2>
          <p className='para'>
            From here you can add questions of multiple types like MCQS,subjective(text or paragraph)!
          </p>
        </CardContent>
      </CardActionArea>
    </Card>
    {arr.map(e=>(
    <Card className='card' >
      <CardActionArea>
        <CardContent >
            <div className='card_head'>
                <BusinessCenterOutlinedIcon className='icon1'/>
                <MoreVertOutlinedIcon/>
            </div>
            <div className='card_text'>
                <p>Math Assessment</p>
                <ul className='details_tag'>
                    <li className='tag_line'>Job</li>
                    <CalendarMonthOutlinedIcon/>
                    <li>20 Apr 2023</li>
                </ul>
            </div>
            <div className='card_footer'>
                    <div className='card_details'>
                        <div className='card_tag'>
                            <h3>00<br/>Duration</h3>
                        </div>
                        <div className='card_tag'>
                            <h3>00 <br/>Question</h3>
                        </div>
                    </div>
                        <div className='share_btn'>
                            <InsertLinkOutlinedIcon/>
                            <span>Share</span>
                        </div>
            </div>
        </CardContent>
      </CardActionArea>
    </Card>
    ))}
    </Box>
  );
}