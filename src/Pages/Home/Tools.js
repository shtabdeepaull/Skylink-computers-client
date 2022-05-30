import React, { useEffect, useState } from 'react';
import ToolsInfo from './ToolsInfo';

const Tools = () => {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch('https://still-brook-69259.herokuapp.com/part')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div>
            <h2  className='text-center text-3xl font-bold m-4 text-secondary'>Computer Parts</h2>
            <div  className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    products.map(product => <ToolsInfo
                    key={product._id}
                    product={product}
                    ></ToolsInfo>)
                }
            </div>
        </div>
    );
};

export default Tools;