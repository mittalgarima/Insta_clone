import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search"
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import {IconButton} from "@material-ui/core"
import Avatar from '@material-ui/core/Avatar';


function Header() {
    return (
   <div className="header">
   <div className="app_header">
   <div className="app_header_logo">
   <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt=""/>
</div>
</div>      
<div className="Search">
<div className="SearchBar">
<SearchIcon  fontSize="small" className="icon"/>
  <input type="text"  className="Search_Bar"  placeholder="Search" />
  </div>
    </div>
    <div className="header_icons">
          <IconButton className="all_icons">
                 <li><HomeOutlinedIcon /></li>   
             <li><MessageOutlinedIcon /></li>
             <li> <ExploreOutlinedIcon/></li>
             <li><FavoriteBorderIcon/></li>
           <li ><Avatar  alt="Jade Scarlado"  src="https://images.unsplash.com/photo-1608770764376-9c94a33959cf?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/></li>
             </IconButton>         
    </div>
 </div>

    )
}

export default Header
