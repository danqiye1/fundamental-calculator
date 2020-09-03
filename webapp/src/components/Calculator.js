import React, { Component } from 'react';
import Navbar from "./Navbar";
import Header from "./Header";
import { Container, Grid, Divider, Form, Message } from "semantic-ui-react";
import "firebase/firestore";

class Calculator extends Component {

  constructor(props){
    super(props);
    this.handleDataInput = this.handleDataInput.bind(this);
    this.handleDataRetrieval = this.handleDataRetrieval.bind(this);
  }

  state = {
    ticker: null,
    messageComponent: <div></div>
  }

  handleDataRetrieval(ticker){
    // Connect to database
    const db = this.props.firebase.firestore();

    // Get document
    const docRef = db.collection("financials").doc(this.state.ticker);
    docRef.get().then((doc) => {
      if (doc.exists) {
        console.log("Document data:", doc.data());
      } else {
        console.log("No such document");
      }
    }).catch((error) => {
      console.log("Error getting document:", error);
      this.setSttate({messageComponent : (
          <Message>
            <Message.Header>Error</Message.Header>
            <p>{error}</p>
          </Message>
        )
      })
    });
  }

  handleDataInput(e, { name, value }){
    this.setState({ [name]: value })
  }

  render(){

    const { ticker } = this.state

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
                      <Form.Input
                        name="ticker" 
                        label='Company Symbol' 
                        placeholder='AAPL'
                        value={ticker}
                        onChange={this.handleDataInput}
                      />
                      <Form.Button content="Retrieve Data" />
                    </Form.Group>
                    {this.state.messageComponent}
                  </Form>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column>
                  
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