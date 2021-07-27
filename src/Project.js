import React, {useState, useEffect} from 'react';
import {projectData} from './Assets/ProjectData';
import './Project.css'


function Project () {
   const jobs = projectData;
   console.log(jobs)
    const [value, setValue] = useState(0);
    const {duties, company, dates, title} = jobs[value];
    return(
        <section className='project-container'>
            <div className='inner-project-container'>
                <div className='title-container'>
                    <h2>Projects</h2>
                </div>
                <div className='project-content-container'>
                    <div className='btn-container'>
                        {projectData.map((item,index)=>{
                            return(
                                <button key={item.id}
                                        onClick={()=>setValue(index)}
                                        className='job-btn'>
                                    {item.company}
                                </button>
                            )
                        })}
                    </div>
                    <article className='individual-job'>
                        <h3>{title}</h3>
                        <h4>{company}</h4>
                        <p className='date'>{dates}</p>
                        {duties.map((duty, index)=>{
                            return(
                                <div key={index}>
                                    <p>{duty}</p>
                                </div>
                            )
                        })}

                    </article>
                </div>

            </div>

        </section>
    )
}
export default Project
