import './App.css';

import React, { Component } from 'react'


export default class Table extends Component {
   constructor () {
     super()
     this.state = {
        form : {
          name : "",
          unit :  "",
          rate : "",
          quantity : "",
          amount : ""
        }
      
    }
     this.formRef = React.createRef();
   } 

  //  componentDidMount () {
  //    setTimeout(() => {
  //      this.setState({
  //        datas : [{name : 'Ramesh',unit : 2,rate : 23,quantity : 2,amount : 234,}]
  //      }) 
  //    }, 2000);

  //    console.log(this.state.datas)
  //  }
  // handleNameChange = (name, value) => {
  //   var state = this.state;
  //   state[name] = value
  //   this.setState({name: state});
  // }
  // handleUnitChange = (event) => {
  //   this.setState({unit: event.target.value});
  // }
  // handleRateChange = (event) => {
  //   this.setState({rate: event.target.value});
  // }
  // handleQuantityChange = (event) => {
  //   this.setState({quantity: event.target.value});
  // }
  componentDidMount(){
    this.formRef.current.focus();
}

   handleChange = (name, value) => {
     var {form} = this.state
     form[name] = value
      this.setState({
       
       form
       
     })
     
   }
  enterKey = (event) => {
    
    if(event.keyCode === 13){
      var form = {
        name: "",
        unit: "",
        rate: "",
        quantity: "",
      }
      this.setState({
        form
      })
       this.formRef.current.focus()
 } 
   }
   
   showData = () => {
    //  var {form} = this.state
    //   var a = form.rate;
    //   var b = form.quantity;
    //   var total = null;
    //   total = a*b;
  
    var form = {
      name: "",
      unit: "",
      rate: "",
      quantity: "",
    }
    this.setState({
      form
    })
     this.formRef.current.focus()
   
    
  }
  render() {
    var {form} = this.state
    //  var a = form.rate;
    //   var b = form.quantity;
    //   var total = null;
     
      // const showData = () => {
      //  total = a*b;
      // //  this.myRef.current.focus();
       
      // }
     
  
   
     var txt = "Informations"
     
    return (
      <div className="tbl">
      
        Name:<input ref={this.formRef} type="text" value={form.name} name="name" className="inputs" onChange={(e) => this.handleChange(e.target.name, e.target.value)}/> 
        Unit:<input type="number" name="unit" value={form.unit} className="inputs" onChange={(e) => this.handleChange(e.target.name, e.target.value)}/>
        Rate:<input type="number" name="rate" value={form.rate} className="inputs"onChange={(e) => this.handleChange(e.target.name, e.target.value)}/>
        Quantity:<input type="number" onKeyUp={this.enterKey} name="quantity" value={form.quantity} className="inputs" onChange={(e) => this.handleChange(e.target.name, e.target.value)}/>
         
         <button onClick={this.showData}>Add</button>

     
       <h1>{txt}</h1>

      
         
             <table>
                      <thead>
                          <tr>
                              <th>Name</th>
                              <th>Unit</th>
                              <th>Rate</th>
                              <th>Quantity</th>
                              <th>Total Amount</th>
                          </tr>
                      </thead>
  
                      <tbody>
                          <tr>
                              <td> {form.name} </td>
                              <td> {form.unit}</td>
                              <td> {form.rate} </td>
                              <td> {form.quantity} </td>
                              <td> {form.amount} </td>
                             
                          
                             
                          </tr>
                      </tbody>
                  </table> 
         </div>
      
      
        
      
    );
  }
}
