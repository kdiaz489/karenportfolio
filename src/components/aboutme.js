import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class About extends Component{
  render(){
    return(

      <div>

        <div className="aboutme-body">
        <Grid className="aboutme-grid">

          <Cell col={12} className="fade-ani">
            <h2>About Me</h2>
            <p style= {{width: '70%', margin: 'auto', paddingTop: '1em'}}>
            My name is Karen Stefany Diaz. I am a Salvadoran-American woman that loves programming,
            art, and overall creating! I have many interests, which vary to programming, digital photography,
            graphic design, conceptual art, social justice and so much more. I also enjoy helping my community,
            and have completed a multitude of community service hours through volunteering, working with children and
            coordinating workshops for programs. I am a resilient, creative, Latinx techie from Socal, and I am ready
            to explore the world of technology! Please feel free to browse my personal website I have dedicated to displaying
            some work of mine. Contact me for any questions or inquieries.

            </p>
          </Cell>
        </Grid>
        </div>
      </div>



    );
  }
}

export default About;
