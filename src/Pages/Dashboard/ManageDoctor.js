import React from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import DeleteConfirmation from './DeleteConfirmation';
import DoctorsRow from './DoctorsRow';

const ManageDoctor = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);

    const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('http://localhost:5000/doctor', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className="text-2xl text-primary">Manage All Doctors: {doctors.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, index) => <DoctorsRow
                                key={doctor._key}
                                doctor={doctor}
                                index={index}
                                refetch={refetch}
                                setDeletingDoctor={setDeletingDoctor}
                            ></DoctorsRow>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingDoctor && <DeleteConfirmation
                    deletingDoctor={deletingDoctor}
                    setDeletingDoctor={setDeletingDoctor}
                    refetch={refetch}
                ></DeleteConfirmation>
            }
        </div>
    );
};

export default ManageDoctor;