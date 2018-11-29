import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton} from 'react-mdl';

class Projects extends Component{
  constructor(props){
    super(props);
    this.state={activeTab: 0};
  }

  toggleCategories(){

    if(this.state.activeTab === 0){
      return(
      <div className="projects-grid fade-ani">
        <Card shadow={5} style={{minWidth:'450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}>
            React Project #1 </CardTitle>
            <CardText>
                Lorem ipsum dolor amet cred raw denim snackwave artisan green juice
                celiac. Kogi crucifix chillwave blue bottle, kale chips meh umami
                portland air plant cray synth viral prism aesthetic tofu. Blue bottle
                asymmetrical mlkshk aesthetic man bun mixtape chartreuse XOXO vegan bespoke cornhole.

            </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>CodePen</Button>
                <Button colored>LiveDemo</Button>
              </CardActions>
              <CardMenu style={{color:'#fff'}}>
                <IconButton name="share"/>
              </CardMenu>


        </Card>


        <Card shadow={5} style={{minWidth:'450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}>
            React Project #1 </CardTitle>
            <CardText>
                Lorem ipsum dolor amet cred raw denim snackwave artisan green juice
                celiac. Kogi crucifix chillwave blue bottle, kale chips meh umami
                portland air plant cray synth viral prism aesthetic tofu. Blue bottle
                asymmetrical mlkshk aesthetic man bun mixtape chartreuse XOXO vegan bespoke cornhole.

            </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>CodePen</Button>
                <Button colored>LiveDemo</Button>
              </CardActions>
              <CardMenu style={{color:'#fff'}}>
                <IconButton name="share"/>
              </CardMenu>


        </Card>

        <Card shadow={5} style={{minWidth:'450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}>
            React Project #1 </CardTitle>
            <CardText>
                Lorem ipsum dolor amet cred raw denim snackwave artisan green juice
                celiac. Kogi crucifix chillwave blue bottle, kale chips meh umami
                portland air plant cray synth viral prism aesthetic tofu. Blue bottle
                asymmetrical mlkshk aesthetic man bun mixtape chartreuse XOXO vegan bespoke cornhole.

            </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>CodePen</Button>
                <Button colored>LiveDemo</Button>
              </CardActions>
              <CardMenu style={{color:'#fff'}}>
                <IconButton name="share"/>
              </CardMenu>


        </Card>


      </div>

      )
    }
    else if (this.state.activeTab === 1) {
      return(
        <Card shadow={5} style={{minWidth:'450', margin: 'auto'}} className="fade-ani">
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}>
            React Project #1 </CardTitle>
            <CardText>
                Lorem ipsum dolor amet cred raw denim snackwave artisan green juice
                celiac. Kogi crucifix chillwave blue bottle, kale chips meh umami
                portland air plant cray synth viral prism aesthetic tofu. Blue bottle
                asymmetrical mlkshk aesthetic man bun mixtape chartreuse XOXO vegan bespoke cornhole.

            </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>CodePen</Button>
                <Button colored>LiveDemo</Button>
              </CardActions>
              <CardMenu style={{color:'#fff'}}>
                <IconButton name="share"/>
              </CardMenu>


        </Card>

      )
    }

    else if (this.state.activeTab === 2) {
      return(

        <Card shadow={5} style={{minWidth:'450', margin: 'auto'}} className="fade-ani">
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}>
            React Project #1 </CardTitle>
            <CardText>
                Lorem ipsum dolor amet cred raw denim snackwave artisan green juice
                celiac. Kogi crucifix chillwave blue bottle, kale chips meh umami
                portland air plant cray synth viral prism aesthetic tofu. Blue bottle
                asymmetrical mlkshk aesthetic man bun mixtape chartreuse XOXO vegan bespoke cornhole.

            </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>CodePen</Button>
                <Button colored>LiveDemo</Button>
              </CardActions>
              <CardMenu style={{color:'#fff'}}>
                <IconButton name="share"/>
              </CardMenu>


        </Card>

      )
    }

    else if (this.state.activeTab === 3) {
      return(
        <Card shadow={5} style={{minWidth:'450', margin: 'auto'}} className="fade-ani">
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}>
            React Project #1 </CardTitle>
            <CardText>
                Lorem ipsum dolor amet cred raw denim snackwave artisan green juice
                celiac. Kogi crucifix chillwave blue bottle, kale chips meh umami
                portland air plant cray synth viral prism aesthetic tofu. Blue bottle
                asymmetrical mlkshk aesthetic man bun mixtape chartreuse XOXO vegan bespoke cornhole.

            </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>CodePen</Button>
                <Button colored>LiveDemo</Button>
              </CardActions>
              <CardMenu style={{color:'#fff'}}>
                <IconButton name="share"/>
              </CardMenu>


        </Card>

      )
    }

  }



  render(){
    return(

      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
          <Tab>React</Tab>
          <Tab>Angular</Tab>
          <Tab>Vuejs</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>

        <Grid>
            <Cell col={12}>
              <div className = "content">
                {this.toggleCategories()}
              </div>
            </Cell>
        </Grid>

      </div>



    );
  }
}

export default Projects;
