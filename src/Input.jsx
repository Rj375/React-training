

import React from 'react';

// import PropTypes from 'prop-types';


// const propTypes = {
    
// };

// const defaultProps = {};


// class Input extends React.Component {
// constructor(props) {
//     super(props);

//     this.state = {
//     };
// }

//     render() {
//         var {name, handleChange, label, type} = this.props;
//         return <div>
//             <form action="" >
//             <h3>{label}: </h3> <input type={type} name={name}  onChange={(e) => handleChange(e.target.name, e.target.value)}/>
//             </form>
           
          
//         </div>;
//     }
// }

// Input.propTypes = propTypes;
// Input.defaultProps = defaultProps;
// // #endregion

// export default Input;


// pass Input component as a forwardRef's parameter using arrow function

const Input = React.forwardRef((props, ref) => {
    var {name, handleChange, label, type, value} = props;
    return (
        <div>
             <h3>{label}: </h3> <input type={type} ref={ref} value={value} name={name}  onChange={(e) => handleChange(e.target.name, e.target.value)}/>
        </div>
    )
})

export default Input
