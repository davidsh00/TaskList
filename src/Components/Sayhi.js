import React from 'react';
import PropTypes from 'proptypes';


const Sayhi=(props)=>{
    return(
        <span>
        {`hello from ${props.name},your ${props.age} years old`}
        </span>
    )
}
Sayhi.propTypes={
    age:PropTypes.number.isRequired,
}
Sayhi.defultProps={
    age:20
}

export default Sayhi;