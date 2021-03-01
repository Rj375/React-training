import React from 'react';

import PropTypes from 'prop-types';

const propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
    owner: PropTypes.object.isRequired,
    colors: PropTypes.string,
    size: PropTypes.string
    
  
};

const defaultProps = {
    colors: '',
    size: ''
};

const Products = (props) => {
    const {name, price, stock , owner, colors, size} = props

    return <div>
        <ul style={{listStyle: 'none', border: '1px solid black'}}>
            <li><b>{name}</b></li>
            <li>Price: {price}</li>
            <li>stock: {stock}</li>
        </ul>
     <h3>{owner.ownername}</h3>
     <h5>{owner.owneraddress}</h5>
     <h5>{owner.ownercontact}</h5>

    <h3>Color: {colors}</h3>
    <h3>Size: {size}</h3>

    </div>
}

Products.propTypes = propTypes;
Products.defaultProps = defaultProps;


export default Products;