
import React, { useState } from "react";







const Futable = () => {
  const [form, formSetState] = useState({
    name: "",
    unit: "",
    rate: "",
    quantity: "",
    amount: ""
  })
  const [rows, rowsSetState] = useState(
    []
  )
  const formRef = React.createRef();
  const handleChange = (name, value) => {

    form[name] = value
    formSetState({
      name: form.name,
      unit: form.unit,
      rate: form.rate,
      quantity: form.quantity,
      amount: form.amount



    })


  }
  
  
 

  const enterKey = (event) => {

    if (event.keyCode === 13) {

      showData()
    }
  }
 


  const showData = () => {
    
    

    rows.push(form)
    formSetState({
      rows // rows: rows
      // form: newForm
    })
    formRef.current.focus()
  }
  return <div>
    {/* Name:<input type="text" ref={formRef} value={form.name} name="name" className="inputs" onChange={(e) => handleChange(e.target.name, e.target.value)} />
        Unit:<input type="number" name="unit" value={form.unit} className="inputs" onChange={(e) => handleChange(e.target.name, e.target.value)} />
        Rate:<input type="number" name="rate" value={form.rate} className="inputs" onChange={(e) => handleChange(e.target.name, e.target.value)} />
        Quantity:<input type="number" name="quantity" value={form.quantity} className="inputs" onChange={(e) => handleChange(e.target.name, e.target.value)} />
        Amount:<input type="number" name="amount" value={form.amount} className="inputs" onChange={(e) => handleChange(e.target.name, e.target.value)} />

    <button onClick={showData}>Add</button>

    <h3>{form.name}</h3>
    <h3>{form.unit}</h3>
    <h3>{form.rate}</h3>
    <h3>{form.quantity}</h3>
    <h3>{form.amount}</h3> */}

    <table id="entryData" >
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
        <tr>
          <td><input type="text" ref={formRef} value={form.name} name="name" className="inputs" onChange={(e) => handleChange(e.target.name, e.target.value)} /></td>
          <td><input type="number" value={form.unit} name="unit" className="inputs" onChange={(e) => handleChange(e.target.name, e.target.value)} /></td>
          <td><input type="number" value={form.rate} name="rate" className="inputs" onChange={(e) => handleChange(e.target.name, e.target.value)} /></td>
          <td><input type="number" value={form.quantity} name="quantity" className="inputs" onChange={(e) => handleChange(e.target.name, e.target.value)} /></td>
          <td><input type="number" onKeyUp={enterKey} value={form.amount} name="amount" className="inputs" onChange={(e) => handleChange(e.target.name, e.target.value)} /></td>
          <td><button onClick={showData}>Add</button></td>
        </tr>
      </tbody>
    </table>

    <table id="viewTable">
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

            {rows.map((value, index) => <tr key={index}>
              
              <td>{value.name}</td>
              <td>{value.unit}</td>
              <td>{value.rate}</td>
              <td>{value.quantity}</td>
              <td>{value.amount}</td>
              {/* <td><span onClick={() => deleteItems(value)}>X</span></td> */}
            </tr>)}
            
          </tbody>
        </table>

  </div>;
}


export default Futable;