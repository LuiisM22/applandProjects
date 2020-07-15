import React from 'react';
import PropTypes from 'prop-types';
const Reutilizable = ({reu ,reu2})=>{
    return(
        <div>
            <h1>
                {`${reu} `}
            </h1>
                <p>{`${reu2} ++`}</p>
        </div>
    );
}

Reutilizable.propTypes={
    reu:PropTypes.number.isRequired,
    reu2:PropTypes.number.isRequired,

};
export default Reutilizable;