import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {useAuthState} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { isDisabled } from '@testing-library/user-event/dist/utils';
import { toast } from 'react-toastify';

const Purchase = () => {
    const { partsId } = useParams();
    const [parts, setParts] = useState([]);
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        const url = `http://localhost:5000/part/${partsId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setParts(data))
    }, []);

    const handlePlaceOrder = event =>{
        event.preventDefault();
        const AvailableQuantity= parts.availableQuantity;
        const MinimumOrderQuantity= parts.minimumOrderQuantity;
        const Quantity =event.target.orderQuantity.value;
    
        // const orderQuantity=(AvailableQuantity < Quantity || MinimumOrderQuantity > Quantity);
        const order ={
            parts:parts.name,
            name:event.target.name.value,
            user:event.target.email.value,
            address:event.target.address.value,
            Quantity:event.target.orderQuantity.value,
            phone:event.target.phone.value,
        }
        fetch('http://localhost:5000/order',{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            toast('Order Booked');
        })
    }

    return (
        <div className="flex justify-center items-center">
            <div className="card w-96 bg-base-200 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={parts.image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{parts.name}</h2>
                    <p>AvailableQuantity:{parts.availableQuantity}</p>
                    <p>MinimumOrderQuantity:{parts.minimumOrderQuantity}</p>
                    <p>Price Per Unit:${parts.price}</p>
                </div>
            </div>
            <div className="divider lg:divider-horizontal">OR</div> 
            <div className="card w-96 bg-base-200 shadow-xl">
                <div className="card-body items-center text-center">
                   <form onSubmit={handlePlaceOrder} className="grid gird-cols-1 gap-3">
                   <input type="text" name="name" disabled value={user?.displayName || ''} className="input w-full max-w-xs" />
                   <input type="email" name="email" disabled value={user?.email || ''} className="input  w-full max-w-xs" />
                   <input type="text" name="address" placeholder="Address" className="input w-full max-w-xs" />
                   <input type="number" name="phone" placeholder="Phone Number" className="input w-full max-w-xs" />
                   <input type="number" name="orderQuantity" placeholder="Order Quantity" className="input w-full max-w-xs" />
                   <input 
                //    disabled={}
                    type="submit" 
                    value="Order Now" 
                    className="btn btn-secondary w-full max-w-xs" />
                   </form>
                </div>
            </div>

        </div>
    );
};

export default Purchase;