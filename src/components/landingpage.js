import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Avatar from '../img/avatar-round.png';

class Landing extends Component{
  render(){
    return(

      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell className="landing-page" col={12}>
            <img

              src={Avatar}
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1>Web Developer</h1>

              <hr />

              <p>HTML | CSS | JavaScript | React | Python | Java</p>

              <div className="social-links">
                <a href="mailto:kstefdiaz@gmail.com?Subject=Hello%20Karen!" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-envelope-o" aria-hidden="true"></i>


                </a>

                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github" aria-hidden="true"/>
                </a>

                <a href="https:// www.linkedin.com/in/kstefdiaz" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin"></i>
                </a>

              </div>

            </div>
          </Cell>
        </Grid>

      </div>



    );
  }
}

export default Landing;
