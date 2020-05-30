import React, { Component } from 'react';
import Navbar from "./Navbar";
import Header from "./Header";
import { Container, Grid, Divider, Form } from "semantic-ui-react";

class Calculator extends Component {
  render(){
    return (
      <div>
        <Navbar firebase={ this.props.firebase }/>
        <div style={contentStyle}>
          <Container>
            <Grid padded>
              <Header />
              <Divider />
              <Grid.Row>
                <Grid.Column>
                  <Form>
                    <Form.Group inline>
                      <Form.Input label='Company Symbol' placeholder='AAPL' />
                    </Form.Group>
                  </Form>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
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