import React from 'react';

const LayoutConTainer = ({children}) => {
    return (
        <div className='max-w-4xl  mx-auto px-4 md:mx-6 lg:mx-12'>
            {children}
        </div>
    );
};

export default LayoutConTainer;