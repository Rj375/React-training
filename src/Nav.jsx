import './App.css';

function Nav({text}) {

   var txt = "just for practice"

  return (
    <div className="Nav">
       
     <h1>{text}</h1>
      <p>{txt}</p>
    </div>
  );
}

export default Nav;