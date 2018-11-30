import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Avatar from '../img/avatar-round.png'
import Education from './education.js';
import Experience from './experience.js';
import Skill from './skill.js';

class Resume extends Component{
  render(){
    return(
      <div>
        <Grid className="fade-content">
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img src={Avatar} style={{height:'200px'}} alt="avatar"/>
            </div>

            <h2>Karen Stefany Diaz</h2>
            <h4 style={{color:'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #ED4264', width:'50%'}}/>
            <p>
            Hey there! To your right you will see an online version of
            my resume. This includes my education history throughout the years,
            experience I have attained, positions I have had while working and
            also some listed skills towards the bottom. This is more brief, but provides
            an easy to comprehend break down of the above.
            </p>
            <hr style={{borderTop: '3px solid #ED4264', width:'50%'}}/>

            <h5>City</h5>
            <p>Ontario, California</p>
            <h5>Phone</h5>
            <p>(909) 572-0164</p>
            <h5>E-mail</h5>
            <p>kstefdiaz@gmail.com</p>
            <hr style={{borderTop: '3px solid #ED4264', width:'50%'}}/>
          </Cell>


          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education startYear={2009}
            endYear={2013}
            schoolName={"Ontario High school"}
            schoolDescription={"Public High School in Ontario, California"} />

            <Education startYear={2013}
            endYear={2017}
            schoolName={"Smith College"}
            schoolDescription={"Private, Women's Liberal Arts College in Northampton, Massachusetts"} />

            <hr style={{borderTop:'3px solid #ED4264'}} />

            <h2>Experience</h2>

            <Experience startYear={2017}
            endYear={"now"}
            jobName={"Front End Dev"}
            jobDescription={"Private Liberal Arts College in Massachusetts"} />

            <Experience startYear={2017}
            endYear={"now"}
            jobName={"Front End Dev"}
            jobDescription={"Private Liberal Arts College in Massachusetts"} />

            <Experience startYear={2018}
            endYear={"now"}
            jobName={"Back End Dev"}
            jobDescription={"Private, Women's Liberal Arts College in Northampton, Massachusetts"} />

            <hr style={{borderTop:'3px solid #ED4264'}} />

            <h2>Skills</h2>

            <Skill skill={"HTML"} progress={100} />

            <Skill skill={"CSS"} progress={70} />

            <Skill skill={"JavaScript"} progress={50} />

            <Skill skill={"Python"} progress={50} />

            <Skill skill={"Java"} progress={50} />

          </Cell>




        </Grid>

      </div>

    );
  }
}

export default Resume;
