import './App.css';

import React, { Component } from 'react'
import { element } from 'prop-types';
import { TextBox, DataGrid, GridColumn, ComboBox, LinkButton, NumberBox } from 'rc-easyui';


export default class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        // id: "",
        name: 1,
        unit: 1,
        rate: "",
        quantity: "",
        amount: ""
      },
      getname: this.getName(),
      getunit: this.getUnit(),
      rows: [],

      rules: {
        name: " Name is Required",
        unit: " unit is Required",
        rate: "rate is Required",
        quantity: "quantity is Required",
        amount: "amount is Required"


      }
    };

    this.idRef = React.createRef();
    this.nameRef = React.createRef();
    this.unitRef = React.createRef();
    this.rateRef = React.createRef();
    this.quantityRef = React.createRef();
  }


  getName = () => {
    return [
      { value: 1, text: "Apple" },
      { value: 2, text: "Orange" },
      { value: 3, text: "Grapes" },
      { value: 4, text: "Tomato" },
      { value: 5, text: "Potato" },
      { value: 6, text: "Beans" },
    ]

  }

  getUnit = () => {
    return [

      { value: 1, text: "Kilogram" },
      { value: 2, text: "Gram" },
      { value: 3, text: "Dozen" },

    ]
  }



  componentDidMount() {
    this.nameRef.current.focus()
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
  //   // }
  //   componentDidMount(){
  //     this.formRef.current.focus();
  // }

  handleChange = (name, value) => {
    var { form } = this.state
    form[name] = value
    form.amount = form.rate * form.quantity
    this.setState({
      amount: form.amount,
      form

    })

  }
  //   enterKey = (event) => {

  //     if(event.keyCode === 13){
  //       var form = {
  //         name: "",
  //         unit: "",
  //         rate: "",
  //         quantity: "",
  //       }
  //       this.setState({
  //         form
  //       })
  //        this.formRef.current.focus()
  //  } 
  //    }
  enterUnit = (selection) => {
    alert(selection)


    this.unitRef.current.focus()

  }

  showData = () => {

    var { form, rules, rows } = this.state
    var a = form.rate
    var b = form.quantity


    var newForm = {
      // id: "",
      name: 1,
      unit: 1,
      rate: "",
      quantity: "",
      amount: ""
    }
    if (!form.name) {
      alert(rules.name)
    } else if (!form.unit) {
      alert(rules.unit)
    } else if (!form.rate) {
      alert(rules.rate)
    } else if (!form.quantity) {
      alert(rules.quantity)
    }
    else {
      form.amount = a * b;
      rows.push(form)
      this.setState({
        rows: [...rows],
        form: newForm
      })
      console.log(...rows)
      this.nameRef.current.focus()

    }

    // this.setState({
  }
  // deleteItems = (value) => {
  //   var { rows } = this.state
  //   var dell = rows.filter(element => element.id !== value.id)
  //   this.setState({
  //     rows: dell
  //   })

  // }

  deleteRow(row) {
    var { rows } = this.state
    this.setState({
      rows: rows.filter(r => r !== row)
    })
  }
  render() {
    var { form, rows, getname, getunit } = this.state

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

        {/* Name:<input ref={this.formRef} type="text" value={form.name} name="name" className="inputs" onChange={(e) => this.handleChange(e.target.name, e.target.value)}/> 
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
                              <td>{form.name} </td>
                              <td>{form.unit} </td>
                              <td> {form.rate} </td>
                              <td> {form.quantity} </td>
                              <td> {form.amount}  </td>
                             
                          
                             
                          </tr>
                      </tbody>
                  </table>  */}


        {/* <table id="entryTable">
          <thead>
            <tr>
              <th>Name</th>
              <th>Unit</th>
              <th>Rate</th>
              <th>Quantity</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr> */}
        {/* <input type="number" ref={this.formRef} value={form.id} name="id" className="inputs" onChange={(e) => this.handleChange(e.target.name, e.target.value)} />
        <input type="text" value={form.name} name="name" className="inputs" onChange={(e) => this.handleChange(e.target.name, e.target.value)} />
        <input type="number" value={form.unit} name="unit" className="inputs" onChange={(e) => this.handleChange(e.target.name, e.target.value)} />
        <input type="number" value={form.rate} name="rate" className="inputs" onChange={(e) => this.handleChange(e.target.name, e.target.value)} />
        <input type="number" value={form.quantity} name="quantity" className="inputs" onChange={(e) => this.handleChange(e.target.name, e.target.value)} />
        <input type="number" onKeyUp={this.enterKey} value={form.amount} name="amount" className="inputs" onChange={(e) => this.handleChange(e.target.name, e.target.value)} />
        <button onClick={this.showData}>Add</button> */}




        {/* <TextBox ref={this.idRef} value={form.id} className="inputs" onChange={(e) => this.handleChange("id",e)} /> */}
        <ComboBox value={form.name} ref={this.nameRef} className="inputs" onselectionChange={(e) => this.enterUnit(e)} data={getname} onChange={(e) => this.handleChange("name", e)} />
        <ComboBox value={form.unit} ref={this.unitRef} className="inputs" data={getunit} onChange={(e) => this.handleChange("unit", e)} />
        {/* <NumberBox value={form.rate} placeholder="Rate" className="inputs" onChange={(e) => this.handleChange("rate", e)} /> */}
        <TextBox value={form.rate} placeholder="Rate" className="inputs" onChange={(e) => this.handleChange("rate", e)} />
        <TextBox value={form.quantity} placeholder="Quantity" className="inputs" onChange={(e) => this.handleChange("quantity", e)} />
        {/* <NumberBox value={form.quantity} placeholder="Quantity" className="inputs" onChange={(e) => this.handleChange("quantity", e)} /> */}
        <NumberBox value={form.amount} placeholder="Total Amount" readOnly spinners={false} className="inputs" onChange={(e) => this.handleChange("amount", e)} />
        <LinkButton onClick={this.showData}>Add Items</LinkButton>


        {/* </tr>
          </tbody>
        </table> */}


        <br />
        <h1>{txt}</h1>
        {/* <table id="viewTable">
          <thead>
            <tr>

              <th>Name</th>
              <th>Unit</th>
              <th>Rate</th>
              <th>Quantity</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>

            {rows.map((value) => <tr key={value.id}>

              <td>{value.name}</td>
              <td>{value.unit}</td>
              <td>{value.rate}</td>
              <td>{value.quantity}</td>
              <td>{value.amount}</td>
              <td><span onClick={() => this.deleteItems(value)}>X</span></td>
            </tr>)}

          </tbody>
        </table> */}

        <DataGrid data={this.state.rows}>
          {/* <GridColumn field="id" title=""/>  */}
          <GridColumn field="name" title="Name" />
          <GridColumn field="unit" title="Unit" />
          <GridColumn field="rate" title="Rate" />
          <GridColumn field="quantity" title="Quantity" />
          <GridColumn field="amount" title="Amount" />
          <GridColumn field="act" title="Actions" align="center" width={110}
            render={({ row }) => (
              <div>


                <LinkButton onClick={() => this.deleteRow(row)}>Delete</LinkButton>

              </div>
            )}
          />

        </DataGrid>

      </div>




    );
  }
}
