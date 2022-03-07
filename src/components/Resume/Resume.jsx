import React from 'react'
import "./Resume.scss"
import { School, Speed } from "@material-ui/icons";


const Resume = () => {
  const edu = [
    {
      id: 1,
      year: "2018-21",
      institute: "Deogiri College, Aurangabad",
      percentage: 79.90,
      desc: "Bachelor of science in Information Technology"
    },
    {
      id: 2,
      year: "2017-18",
      institute: "Yashwantrao Chavan college, Sillod",
      percentage: 78.31,
      desc: "12th Science from state board"
    },
    {
      id: 3,
      year: "2015-16",
      institute: "Raneshwar Vidyalaya, Hatti",
      percentage: 85.00,
      desc: "10th from state board"
    }
  ]
  return (
    <div className='resume' id='resume'>
      <h1 className='text-center'>Resume</h1>
      <div className="container">
        <div className="left">
          <h3 className="text-center"><span><School className='icon'/></span> Education</h3>
          {edu.map((e) => (
            <div className='edu' key={e.id}>
              <p className='year'>{e.year}</p>
              <h6>{e.institute}</h6>
              <p>{e.desc}</p>
            </div>
          ))
            
          }
        </div>
        <div className="right">
          <h3 className="text-center"><span><Speed className='icon'/></span> Skills</h3>
          <div className="skills-bar">
            <div className="bar">
              <div className="info">
                <span>HTML/CSS</span>
              </div>
              <div className="progress-line html"><span></span></div>
            </div>


            <div className="bar">
              <div className="info">
                <span>JAVASCRIPT</span>
              </div>
              <div className="progress-line javascript"><span></span></div>
            </div>


            <div className="bar">
              <div className="info">
                <span>D3.js</span>
              </div>
              <div className="progress-line php"><span></span></div>
            </div>


            <div className="bar">
              <div className="info">
                <span>PHP</span>
              </div>
              <div className="progress-line python"><span></span></div>
            </div>


            <div className="bar">
              <div className="info">
                <span>React js</span>
              </div>
              <div className="progress-line mysql"><span></span></div>
            </div>

          </div>
          

        </div>
      </div>

    </div>
  )
}

export default Resume