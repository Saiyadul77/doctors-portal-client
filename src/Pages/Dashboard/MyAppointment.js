import { signOut } from 'firebase/auth';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppointment = () => {
    const [user, loading, error] = useAuthState(auth);

    const [appointments, setAppointments] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`https://pure-badlands-39812.herokuapp.com/booking?patient=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res)
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken')
                        navigate('/')
                    }
                    return res.json()
                })
                .then(data => {

                    setAppointments(data)
                }
                );
        }
    }, [user])
    return (
        <div class="overflow-x-auto">
            <table class="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Treatment</th>
                        <th>Date</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        appointments.map((appointment, index) =>
                            <tr key={appointment._id}>
                                <th>{index + 1}</th>
                                <td>{appointment.patientName}</td>
                                <td>{appointment.treatment}</td>
                                <td>{appointment.date}</td>
                                <td>{appointment.slot}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyAppointment;