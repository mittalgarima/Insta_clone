import React from 'react';
import './Stories.css'
const Stories= () =>{
    const [state, setState]=React.useState([
{id:1, image:"https://images.unsplash.com/photo-1573341830496-e89fcae7f5eb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzF8fHJhbmRvbSUyMHBob3RvfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",name:"Rodrigo_435"},
{id:2, image: " https://images.unsplash.com/photo-1600865494468-075a33020eed?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhbmRvbSUyMHBob3RvfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60 ",name:"Evlien301"},  
{id:3, image:"https://images.unsplash.com/photo-1541261095067-cc0229c9ba68?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fGRhbmNlcnxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60",name:"Donald_435"},
{id:4, image:"https://images.unsplash.com/photo-1522796663327-2946cde45d6d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzF8fGRhbmNlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",name:"Casira_Ravldo"},
{id:5, image:"https://images.unsplash.com/photo-1526500627444-4ae11809ad24?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Zmxvd2VyJTIwZmllbGR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",name:"nature.1"},
{id:6, image:"https://images.unsplash.com/photo-1606389716947-3b510d275131?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJhZG1pbnRvbiUyMGdhbWV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",name:"player.5"}, 
 {id:7,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNKoF7UUwNGwjmsHMGDChck1zh0IFyO00ZfA&usqp=CAU " , name:"Ranbir07 "} ,
 { id:8 , image:"https://images.unsplash.com/photo-1544124094-8aea0374da93?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjV8fHN0cm9uZyUyMHdvbWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" ,name:"Jyotirmoya"}, 
 {id:9 , image:"https://images.unsplash.com/photo-1544124094-8aea0374da93?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjV8fHN0cm9uZyUyMHdvbWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" ,name:"Jyotirmoya"} 

]);
    
      return (
        <div className="stories">
          {state.map((user) => (
            <div className="stories__info" key={user.id}>
              <div className="stories__img">
                <span>
                  <img src={user.image} alt="user" />
                </span>
              </div>
              <div className="stories__name">{user.name}</div>
            </div>
          ))}
        </div>
      );
    };
    
    export default Stories;

