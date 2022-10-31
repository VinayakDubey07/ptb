import React, {} from 'react'

import './TeacherCard.css'

function TeacherCard(){
    return(
        <div className='card'>
            <div className='teacher-image'>
                <img src='../../assets/images/teacher.png' alt='Image of teacher'/>
            </div>
            <div className='details'>
                <div className='teacher-description'>
                    <h2 className='teacher-name'>Mahesh Chand Meena</h2>
                    <p className='teacher-college'>D.Tech, IIT Bombay </p>
                </div>
                <div className='teacher-credentials'>
                    <div className='teacher-details'>
                        
                    </div>
                    <div className='student-details'>
                        <p className='number'>1000+</p>
                        <p className='general-text'>Students Guided</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeacherCard