

import React, { Component } from 'react'
import { productLists } from "./datas";


export default class Body extends Component {
    constructor() {
        super();
        this.state = {
            products: []
        }
        // this.deleteItems=this.deleteItems.bind(this)
    }




    componentDidMount() {
        setTimeout(() => {
            
            this.setState({
                products: productLists

            }

            )
            // console.log(this.state.products)

        }, 2000);

        
    }
    deleteItems = (item) => {
        
        var del = this.state.products.filter(element => element.id !== item.id)
        this.setState({
            products: del
        })
        
        // or
            //  const newState = this.state.products.slice();
            //    if (newState.indexOf(item) > -1) {
            //    newState.splice(newState.indexOf(item), 1);
            //    this.setState({products: newState})
            //  }
            
    }
    
    
    render() {

        // var str = '';
        // var str1 = '';
        // var str2 = '';
        
       
  

        // function getLists() {
        //       this.state.products.forEach( (item) => {
        //         var name = item.name;
        //         var price = item.price;
        //         var description = item.description;
        //         str +=`Name: ${name} `
        //         str1 += `Price: ${price}`
        //         str2 += `Description: ${description}`
        //     })

        // }

        // getLists()

    //    const deleteItems = (item) => {
    //         var del = this.state.products.filter(element => element.id !== item.id)

           
    //     }


        console.log(this.state.products)

        return (
            <div className="body">
                <h1>Product List</h1>

                {/* <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Description</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td> {this.state.products.map((item, index) => (
                                `${item.name} `
                                ))}
                            </td>
                            <td> {productLists.map((item, index) => (
                                `${item.price} `
                                ))}
                            </td>
                            <td> {productLists.map((item, index) => (
                                `${item.description} `
                                ))}
                            </td>
                        </tr>
                    </tbody>
                </table> */}


                {this.state.products.map((item, index) => {
                    return <div key = {item.id}>
                        <ul>
                            <li style={{display:'flex'}}><h3>Name:</h3>{item.name}<h3>price:</h3>
                            {item.price}<h3>Description:</h3>{item.description}<span className="spans" onClick={this.deleteItems.bind(this, item)}>X</span></li>
                            
                        </ul>
                      
                     
                    </div>
                })}
                
            </div>
        )
    }
}
