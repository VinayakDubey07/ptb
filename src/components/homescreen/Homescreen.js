import React, { Fragment } from 'react'

import TeacherCard from './TeacherCard'
import Form from './Form'

import './Homescreen.css'

function Homescreen(){
    return(
        <Fragment>
            
            <div className='header'></div>
            <div className='main-image__container'>
                <img src='../../../assets/images/homescreen.png' className='main-image'/>
            </div>
            
            <main className='main'>
                <div className='faculty'>
                    <TeacherCard />
                </div>
            </main>
        
        </Fragment>
    )
}

export default Homescreen