import React from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const {partsId} = useParams();
    return (
        <div>
            <h2>Purchase:{partsId}</h2>
        </div>
    );
};

export default Purchase;