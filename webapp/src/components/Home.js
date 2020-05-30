import React from 'react';
import Navbar from "./Navbar";

function Home(props) {
  return (
    <div>
      <Navbar firebase={ props.firebase }/>
    </div>
  );
}

export default Home;