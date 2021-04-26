import React from "react";
import PropTypes from 'prop-types';
// const onClick=()=>{
//   console.log('Clicked')
// }
const button = ({color,text,onClick}) => {

  return <button onClick={onClick} style={{backgroundColor:color}} className="btn">{text}</button>;
};

button.defaultProps = {
    color:'black',
    text:'Add',
}

button.propTypes={
  text:PropTypes.string,
  color:PropTypes.string,
  onClick:PropTypes.func,
}
export default button;
