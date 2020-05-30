import React, { Component } from 'react';
import { Grid, Step } from "semantic-ui-react";

class Header extends Component {

  state = {
    active: "Choose Company"
  }

  handleClick = (e, { title }) => this.setState({ active: title })

  render(){
    const { active } = this.state;
    return (
      <Grid.Row>
        <Grid.Column>
          <Step.Group>
            <Step
              active={active === 'Choose Company'}
              icon='university'
              link
              onClick={this.handleClick}
              title='Choose Company'
              description='Choose the company to evaluate'
            />
            <Step
              active={active === 'Quality Check'}
              icon='balance scale'
              link
              onClick={this.handleClick}
              title='Quality Check'
              description='Check if company is good quality'
            />
            <Step
              active={active === 'Valuation'}
              icon='chart bar'
              link
              onClick={this.handleClick}
              title='Valuation'
              description='Calculate our intrinsic value'
            />
          </Step.Group> 
        </Grid.Column>
      </Grid.Row>
    );
  }
}

export default Header;