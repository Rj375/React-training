
import React from 'react';
import Input from './Input'
import Button from './Button'

import PropTypes from 'prop-types';


const propTypes = {};

const defaultProps = {};

class Inputs extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        form1: {
            name: "",
            address: "",
            phone: "",
            email: "",
            password: "",
            confirmPassword: ""
        },
        rules: {
            name: " Name is Required",
            email: " Valid Email is Required",
            address: "Address is Required",
            phone: "Phone is Required",
            password: "password is Required and must be ateast 8 characters"
            

        }
    };
    this.myRef = React.createRef()

}

 componentDidMount(){
     console.log(this.myRef.current)
 }
 handleChange = (name, value) => {
    var {form1} = this.state;
    form1[name] = value;
    this.setState({form1});
}

focusInput = () => {
    var {form1, rules} = this.state 
    var valideEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!form1.name){
        alert(rules.name)
    }else if(!form1.address){
        alert(rules.address)
    }else if(!form1.phone){
        alert(rules.phone)
    }else if(!form1.email.match(valideEmail)) {
        alert(rules.email)
    }else if(form1.password.length < 8){
        alert(rules.password)
    }else if(form1.password !== form1.confirmPassword){
        alert('match password')
    }
    else{
        this.myRef.current.focus();
    }
     
}

clearData =() => {
    var {form1} = this.state;
    
    var form1 = {
        name: "",
        address: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: ""
    }
    this.setState({
        form1
    })
}

    render() {
        var {form1} = this.state
        return <div>
            <input type="text" />
            <input type="text" name="name" onChange={(e) => this.handleChange(e.target.name, e.target.value)} value={form1.name}/>
            <input type="text" name="address" onChange={(e) => this.handleChange(e.target.name, e.target.value)} value={form1.address}/>
            

            <Input name="name" ref={this.myRef} label="*Name" handleChange={this.handleChange} value={form1.name} type="text"/>               
            <Input name="address" label="*Address" handleChange={this.handleChange} value={form1.address} type="text"/>
            <Input name="phone" label="*Phone" handleChange={this.handleChange} value={form1.phone} type="number"/>
            <Input name="email" label="*Email" handleChange={this.handleChange} value={form1.email} type="email"/>
            <Input name="password" label="*Password" handleChange={this.handleChange} value={form1.password} type="password"/>
            <Input name="confirmPassword" label="*Confirm-Password" handleChange={this.handleChange} value={form1.confirmPassword} type="password"/>
            
            <Button click={this.focusInput} clear={this.clearData}/>
            {/* <button onClick={this.focusInput}>Submit</button> */}
    
            Name:- {form1.name} <br/>
            Address:- {form1.address} <br/>
            Phone:- {form1.phone} <br/>
            Email:- {form1.email} <br/>
            Password:- {form1.password} <br/>
            Confirm-Password:- {form1.confirmPassword}

        </div>;
    }
}

Inputs.propTypes = propTypes;
Inputs.defaultProps = defaultProps;


export default Inputs;