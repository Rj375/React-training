import React, { Component } from 'react'
import Products from './Products'


export default class Productslist extends Component {
    constructor(props){
        super(props)
        this.state = {
            productInfo :[{
                info: { name: 'Watch', price: 25, stock: 5},
                // colors: '',
                // size: '',
                owner:{
                    ownername: 'Ramesh Giri',
                    owneraddress: 'Pharsatikar',
                    ownercontact: 986376373
                }
            }]
                   
           
           
        }
    }

    render() {
       
        
        var {productInfo , colors, size} = this.state
        return (
            <div>
               {productInfo.map((value, index) => <Products key={value.info.name}
                    name={value.info.name} price ={value.info.price} stock={value.info.stock} 
                    owner={value.owner} // key = {object}
                    colors = {value.info.name ? 'Red' : colors} 
                    size= {value.info.name ? 'Meduim' : size}
                    
               />)}

           
              
              
               
            </div>
        )
    }
}





