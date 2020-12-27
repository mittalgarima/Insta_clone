import React from  'react';
 import './App.css';
import Header from "./components/Header"
import Stories from "./components/Stories"
import Posts from "./components/Posts"
import Sidebar from "./components/Sidebar"



function App(){
 
  return (
    <div className="App">
    <Header/>
    <div  className="container">
    <Stories/>
    </div>
   
    <Posts  username="namor_06" caption="wow It's cool"
    imageUrl="https://images.unsplash.com/photo-1608854948001-3d887f6d9fe6?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
    <Posts username="akira01" caption="bdwduwsn" imageUrl="https://images.unsplash.com/photo-1602524817552-1afd1d923ace?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0NXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
    <Posts username="uqhiqo" caption="working" imageUrl="https://images.unsplash.com/photo-1608822101354-4caaf4b79f22?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4M3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
    <Posts username="jskwwo_01" caption="beauty" imageUrl="https://images.unsplash.com/photo-1608838852982-df02a456d21d?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5Nnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
    <Posts username="ndefdw_009" caption=" nature" imageUrl="https://images.unsplash.com/photo-1608806947629-da2ae50be954?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5NXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
    <Posts username="wjdwjdlw_90" caption=" christmas" imageUrl="https://images.unsplash.com/photo-1608820824883-266d9d9bfeea?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4Mnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
    
   <Sidebar/>
    </div>
  );
}

export default App;
