import React from 'react';
import { toast } from 'react-toastify';

const DataRow = ({ user, index, refetch }) => {
    const { email, role } = user;

    const makeAdmin = () => {
        fetch(`https://pure-badlands-39812.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to Make An Admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast(`Successfully made an Admin`);
                }
            })
    }

    const handleRemove = email => {
        fetch(`http://localhost:5000/user/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`User: ${email} is deleted`);
                    refetch();
                }
            })
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
            <td><button onClick={() => handleRemove(email)} class="btn btn-xs">Remove User</button></td>
        </tr>
    );
};

export default DataRow;