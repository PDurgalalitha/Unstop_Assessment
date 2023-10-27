import React from "react";
import SmartphoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import SideNav from "./SideNav";
import Details from "./Details";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
import Cards from "./Cards";
// import useNavigate from "react"
export default function Mainbody(){
    return(
        <Box className="MainBody">
            <SideNav/>
            <Box className="x">
                <div className="MainBody_head">
                <Breadcrumbs className="MainBody_head-1" aria-label="breadcrumb" separator="|">
                    <Link underline="hover" color="GrayText"  href="/">
                    Assessment
                    </Link>
                    <Link underline="hover" color="Highlight" href="/">
                    MyAssessment
                    </Link>
                </Breadcrumbs>
                <SmartphoneOutlinedIcon onclick/>
                </div>
                <div className="MainBody_head">              
                    <h3>Assessment Overview</h3>
                    <div>
                        <SearchOutlinedIcon/>
                        <EqualizerOutlinedIcon/>
                    </div>
                </div>
                <Details/>
                {/* cards */}
                <div className="MainBody_head">              
                    <h3>My Assessment</h3>
                </div>
                <Cards arr={["",""]}/>
            </Box>

        </Box>
    )
}