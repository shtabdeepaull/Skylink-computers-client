import React from 'react';
import { useNavigate } from 'react-router-dom';

const ToolsInfo = ({ product }) => {
    const {_id, name, price, description, minimumOrderQuantity, availableQuantity, image} = product;
    const navigate = useNavigate();
    const navigateToPurchase = id =>{
        navigate(`/parts/${_id}`);
    }
    return (
        <div  className="card w-80 bg-base-150 shadow-2xl">
            <figure  className="px-10 pt-10">
                <img src={image} alt="Shoes"  className="rounded-xl" />
            </figure>
            <div  className="card-body items-center">
                <h2  className="card-title text-secondary">{name}</h2>
                <p><small>Description:{description?.length > 100 ? description.slice(0, 100)+"..." :  description}</small></p>
                <p>Available Quantity:{availableQuantity}</p>
                <p>Minimum Order Quantity:{minimumOrderQuantity}</p>
                <p>PerUnitPrice: ${price}</p>
                <div  className="card-actions">
                    <button onClick={() => navigateToPurchase(_id)} className="btn btn-secondary">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default ToolsInfo;