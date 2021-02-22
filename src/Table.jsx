import './App.css';

function Table() {

   var txt = "Informations"

  return (
    <div className="tbl">
    
       
     <h1>{txt}</h1>
     <table className="tables" style={{ margin: "auto" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Address</th>
              <th>Contact</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Ramesh Giri</td>
              <td>rams2571996@gmail.com</td>
              <td>24</td>
              <td>Pharsatikar</td>
              <td>896899879878</td>
            </tr>
            <tr>
              <td>sagar Shrestha</td>
              <td>sagar@gmail.com</td>
              <td>25</td>
              <td>Kanchibazar</td>
              <td>896899878</td>
            </tr>
            <tr>
              <td>Pramish Thapa </td>
              <td>pramish@gmail.com</td>
              <td>23</td>
              <td>Butwal</td>
              <td>896899878</td>
            </tr>
            <tr>
              <td>Santosh Paudel </td>
              <td>santosh@gmail.com</td>
              <td>23</td>
              <td>Butwal</td>
              <td>8968878</td>
            </tr>
          </tbody>
        </table>
      
    </div>
  );
}

export default Table;