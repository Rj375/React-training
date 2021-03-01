
import './App.css';
import Nav from "./Nav";
import Table from "./Table";
import Form from "./Form";
import Body from "./Body";
import Inputs from "./Inputs";
import Productslist from "./Productslist";


function App() {

//   var a = 20;
//   var b = 5;
//   var results = `Addition: ${a + b}, Subraction: ${a - b}, Multiplication: ${a * b}, Division: ${a / b}`;


//   var x = 10;
//   var y = 5;
//   var text = "";
//   var text1 = "";


//  if (x > y || x != y) {
//     text = 'true'
//   }
//   else {
//     text = 'false'
//   }


//   (x == y ? text1 = "this is true" : text1 = "this is false")



    return (
      <div className="App">
        {/* <Nav text="Hello iam navbar(props)" />
        <hr/> */}
        {/* <Body/> */}
         {/* <Form /> */}
        
        {/* <hr />

        <span>Let us suppose a=20 and b=5</span>
        <p>{results}</p>
        <hr />
        <span>Let us suppose x=10 and y=5</span> <br/>
        <span>If x greater than y || x is not equal to y : <strong>{text}</strong></span>
        <br/>
        <span>If x Equals to y : <strong>{text1}</strong></span> */}
        

        

        {/* <hr /> */}
      
      <Table />
       
        {/* <Productslist /> */}
<hr/>
        <Inputs />
      </div>
    );
}






export default App;
