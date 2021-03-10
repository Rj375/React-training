import './App.css';
import { Link, Router } from "react-router-dom";


import { SideMenu, LinkButton } from 'rc-easyui';
import React from 'react';


class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
    };

  }


  
  render() {
    return (
   <div className="Nav">

      <Link to="/" >
        <li>Users</li>
      </Link>
      <Link to="/api">
        <li>Api</li>
      </Link>
      <Link to="/inputs">
       <li>Inputs</li>
      </Link>
      <Link to="/body">
        <li>Body</li>
      </Link>
      <Link to="/form">
        <li>Form</li>
      </Link>
      <Link to="/productlist">
        <li>Products</li>
      </Link>


    </div>




    )
  }
}


export default Nav;