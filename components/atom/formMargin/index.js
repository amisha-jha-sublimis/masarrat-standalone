import React from 'react';

const MarginForm = (props) => {
    return (
        <div className={`formMargin clearfix ${props.margin}`}>
            {props.children}
        </div>
    );
};

export default MarginForm