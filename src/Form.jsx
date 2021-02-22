import './App.css';

function Form() {

   var txt = "Register Users"

  return (
    <div className="frm">
       
       <h1 style={{ color: "blue" }}>{txt}</h1>
        <form action="#" style={{ border: "1px green solid" }} className="form">

          Name: <input type="text" name="name" className="inputs" /><br />
         Email: <input type="email" name="email" className="inputs" /><br />
         Age: <input type="number" name="age" className="inputs" /><br />
         Address: <input type="text" name="address" className="inputs" /><br />
         URL: <a href="https://google.com/" target="_blank" title="Go to google.com">Click Me</a> <br />
         Contact: <input type="number" name="contact" className="inputs" /><br />
         select:  <select name="select" className="inputs">
            <option value="fruits">Apple</option>
            <option value="fruits">Orange</option>
            <option value="fruits">Banana</option>
            <option value="fruits">Grapes</option>
          </select> <br />

          <input type="submit" value="submit" className="btn" />

        </form>
    </div>
  );
}

export default Form;