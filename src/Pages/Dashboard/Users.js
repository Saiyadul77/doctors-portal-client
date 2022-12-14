import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import DataRow from './DataRow';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://pure-badlands-39812.herokuapp.com/user',{
        method: 'GET',
        headers:{
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-2xl">All Users: {users.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
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
                            users.map((user, index) => <DataRow
                            key={user._id}
                            user={user}
                            index={index}
                            refetch={refetch}
                            ></DataRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;