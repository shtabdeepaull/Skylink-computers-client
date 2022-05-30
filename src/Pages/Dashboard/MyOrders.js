import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';

const MyOrders = () => {

  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
      // axios.get(`https://still-brook-69259.herokuapp.com/order?email=${user.email}`)
      // .then(data => setOrders(data))

          if(user){
              fetch(`https://still-brook-69259.herokuapp.com/order?email=${user.email}`, {
                  method: 'GET',
                  headers:{
                      'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
                  }
              })
              .then(res => {
                console.log('res', res);
                if(res.status === 401 || res.status ===403){
                  navigate('/')
                }
               return res.json()
              })
              .then(data => {
                setOrders(data)
              });
          }
  }, [user, navigate])


  // const { data: orders, isLoading } = useQuery(['order', user.email], () =>
     
  // fetch(`https://still-brook-69259.herokuapp.com/order?email=${user.email}`, {
  //   method: 'GET',
  //   headers: {
  //     'authorization': `Bearer ${localStorage.getItem('accessToken')}`
  //   }

  // })
  //   .then(res => {
  //       console.log('res', res);
  //       if (res.status === 401 || res.status === 403) {
  //         navigate('/')
  //       }
  //       return res.json()
  //     })
  //   );

// if (isLoading) {
//   return <Loading></Loading>
// }

return (
  <div>
    <h2>My Order: {orders.length}</h2>
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
          </tr>
          <tr>
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Purple</td>
          </tr>
          <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Red</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);
};

export default MyOrders;