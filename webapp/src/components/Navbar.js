import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { navigate } from '@reach/router';

class Navbar extends Component {
  state = { activeItem: 'Home' }
  
  handleItemClick = (e, { name }) => {
    if (name === "Logout"){
      this.props.firebase.auth()
        .signOut()
        .then( () => {
            navigate('Login');
          }
        );
    } else {
      this.setState({activeItem: name});
      navigate(`/${name}`)
    }
  }

  render(){
    const { activeItem } = this.state;
    return (
      <div style={NavStyle}>
        <Menu vertical inverted fluid>
          <Menu.Item>
            <img src='logo192.png' style={{ width: "250px" }} alt="Logo"/>
          </Menu.Item>
          <Menu.Item
            name='Home'
            active={activeItem === 'Home'}
            onClick={this.handleItemClick}
          >
            Home
          </Menu.Item>
          <Menu.Item
            name='Calculator'
            active={activeItem === 'Calculator'}
            onClick={this.handleItemClick}
          >
            Calculator
          </Menu.Item>
          <Menu.Item
            name='Logout'
            active={activeItem === 'Logout'}
            onClick={this.handleItemClick}
          >
            Logout
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

const NavStyle = {
  position: "fixed",
  display: "flex",
  flexDirection: "column",
  top: 0,
  bottom: 0,
  left: 0,
  width: "250px",
  background: "#1B1C1D",
  overflowX: "hidden",
  flex: 1
}

export default Navbar;