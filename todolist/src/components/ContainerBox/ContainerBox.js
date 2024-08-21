import React from 'react';
import './ContainerBox.css';

const ContainerBox = ({ children }) => {
    return (
        <div className='container-box'>
            {children}
        </div>
    );
};

export default ContainerBox;