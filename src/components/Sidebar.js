import React from 'react';
import './Sidebar.css'
import Avatar from '@material-ui/core/Avatar';

const Sidebar=()=>{
    
    return(
    <div className="sidebar">

<div className="sidebar_user-name">
<img className="sidebar_user-avatar" 
alt="Jade Scarlado" 
 src="https://images.unsplash.com/photo-1608770764376-9c94a33959cf?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>

<h3>mittal_garima_100</h3>
<div className="switch">Switch</div>

</div>
 
<div className="sidebar-list">
<h5>Suggestion for you</h5>
<div className="list">
<img  className="list_img" alt=" " src="https://images.unsplash.com/photo-1608921642852-4cf5635bd9ff?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60 "/>
<h2>Chetna_saxena</h2>
<div className="follow">Follow</div>
</div>
<div className="list">
<img  className="list_img" alt=" " src="https://images.unsplash.com/photo-1492446845049-9c50cc313f00?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"/>
<h2>Arpit_Mittal01</h2>
<div className="follow">Follow</div>
</div>
</div> 
    </div>
   
 



    );
};
export default Sidebar;

