import React from 'react';

const Tagline = ({ trigger }) => {
    return (
        trigger && (
            <p className='text-center'>
                in progress!
            </p >
        )
    );
};

export default Tagline;
