import React from 'react';
import { TextBox, Form, FormField, LinkButton } from 'rc-easyui';
import Users from './Users'
import { Link, Router  , Redirect,Switch, Route} from "react-router-dom";
import history from './history';
import axios from "axios";
import Cookies from "js-cookie";
import { json } from 'express';





class Login extends React.Component {
    constructor(props) {
        super(props);
      
        this.state = {
            users: {
                username: "",
                password: ""
            },
            loggedIn: false,
            err: ""
        };
        
        var token = localStorage.getItem("token")
        if(token) {
            var {loggedIn} = this.state
            loggedIn = true
        }
        
    }
   
    handleChange = (name, value) => {
        var {users} = this.state
        users[name] = value
        this.setState({
            users: users
        })
    }

   
    
    submit = async(event) => {
        var {users} = this.state
        event.preventDefault();
        // users = users.json()
        // if(!users.username){
        //     alert('need username')
        // }else if(!users.password) {
        //     alert('need password')
        // }
        // else {
        // history.push('/users')
             
        // }
        try{
            var token = await axios.post("http://localhost:8080/login", {users})
           
            localStorage.setItem("token", token)
            this.setState({
                loggedIn: true
            })
        }
        catch(err){
            this.setState({
                err: err.message
            })
        }
        
       

        
    }
            
  
       
       

    render() {
        var { users,loggedIn, err } = this.state
        var text = "Login User"


        if(loggedIn) {
           return <Redirect to="./users" />
        }


    
        return <div className="login" style={{ border: "1PX solid skyblue",width: "30%", margin: "auto"}}>
            <h1>{err}</h1>
            <h1>{text}</h1>
            
            <Form
                ref={ref => this.form = ref}
                style={{ maxWidth: 400 , margin: "auto"}}
                //   validateRules={this.getCustomRules()}
                model={users}
                //   rules={rules}
                labelWidth={150}
                
                labelAlign="right"
            >
                 
                <FormField name="username" label="Username:">
                    <TextBox value={users.username} onChange={(e) => this.handleChange("username", e)} />
                </FormField>
                <FormField name="password" label="Password:">
                    <TextBox value={users.password} onChange={(e) => this.handleChange("password", e)} />
                </FormField>
                <FormField style={{ marginLeft: 120 }}>
                    <LinkButton  onClick={this.submit}>Submit</LinkButton>
                </FormField>
            </Form>
            {/* <Link to="/users" onClick={this.submit}>Submit</Link> */}

  
           
        

    
            
        </div>;
    }
}

export default Login;

