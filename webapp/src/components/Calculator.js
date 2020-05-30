import React, { Component } from 'react';
import Navbar from "./Navbar";
import { Grid, Step } from "semantic-ui-react";

class Calculator extends Component {

  state = {}
  handleClick = (e, { title }) => this.setState({ active: title })

  render(){
    const { active } = this.state;
    return (
      <div>
        <Navbar firebase={ this.props.firebase }/>
        <div style={contentStyle}>
          <div>
            <Grid padded>
              <Grid.Row>
                <Grid.Column>
                <Step.Group>
                  <Step
                    active={active === 'Company'}
                    icon='university'
                    link
                    onClick={this.handleClick}
                    title='Choose Company'
                    description='Choose the company to evaluate'
                  />
                  <Step
                    active={active === 'Quality'}
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
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

const contentStyle = {
  marginLeft: "250px", 
  minWidth: "550px"
}

export default Calculator;