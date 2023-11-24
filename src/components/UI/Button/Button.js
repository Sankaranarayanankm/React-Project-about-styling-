import React from 'react';

import './Button.css';

const Button = props => {
  console.log(props);
  return (
    <button type={props.type} style={{backgroundColor:!props.valid?"rgb(231, 132, 132)":"#ac0e77"}} className="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
