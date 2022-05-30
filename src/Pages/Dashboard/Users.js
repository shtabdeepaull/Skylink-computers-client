import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from '../Dashboard/UserRow';

const Users = () => {
    const {data: users, isLoading} = useQuery('users', () => fetch('https://still-brook-69259.herokuapp.com/user').then(res => res.json()))
    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className="text-xl">All Users: {users.length}</h2>
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
                        {
                            users.map(user => <UserRow
                            key={user._id}
                            user={user}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;