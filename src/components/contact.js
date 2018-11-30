import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
import Avatar2 from '../img/avatar.png';

class Contact extends Component{
  render(){
    return(

      <div className="contact-body" >
        <Grid className="contact-grid fade-content">
          <Cell col={6}>
            <h2>Karen Stefany Diaz</h2>
            <img src={Avatar2}
            alt="avatar"
            style= {{height:'250px'}} />

            <p style= {{width: '75%', margin: 'auto', paddingTop: '1em'}}>
            Hello everyone! I&rsquo;m glad you visited my personal website. Please feel free
            to contact me at the following phone number, e-mail or Linked-In account.
            I look forward to connecting with you :^)
            </p>

          </Cell>
          <Cell col={6} >
            <h2>Contact Me</h2>

            <hr />
            <div className="contact-list">
              <List>

                <ListItem>
                  <ListItemContent className="contact-item">
                  <i className="fa fa-phone" aria-hidden="true" />
                   (909) 489-5481
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent className="contact-item">
                  <i className="fa fa-envelope" aria-hidden="true" />
                   kstefdiaz@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent className="contact-item">
                  <i className="fa fa-linkedin" aria-hidden="true" />
                   linkedin.com/in/kstefdiaz
                  </ListItemContent>
                </ListItem>

              </List>
            </div>
          </Cell>
        </Grid>
      </div>

    );
  }
}

export default Contact;
