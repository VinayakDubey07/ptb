import React from 'react';
import "./Navigator.css"
import { data } from './data';
import logo from "../assets/logo.png"
import {
    createBrowserRouter,
    BrowserRouter,
    RouterProvider,
    Route,
    Link,
    Routes,
  } from "react-router-dom";
const Navigator = () => {
    return (
        <div className='main'>
            <div className='sidebar'>
                <img src={logo} className='heading'/>
                <ul className='ullist'>
                {data.map((val,key)=>{
                    return( <li className='row' key={key}>
                        {" "}
                        <div><Link className='link' to={val.link} >
                            {val.title}</Link>
                        </div>{" "}


                    </li>)
                })}
                </ul>

            </div>
            
        </div>
    );
};

export default Navigator;