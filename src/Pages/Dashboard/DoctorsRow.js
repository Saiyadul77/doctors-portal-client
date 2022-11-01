import id from 'date-fns/esm/locale/id/index.js';
import React from 'react';
import { toast } from 'react-toastify';

const DoctorsRow = ({ doctor, index, refetch, setDeletingDoctor }) => {
    const { name, email, specialty, img } = doctor;

    

    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div class="avatar">
                    <div class="w-16 rounded">
                        <img src={img} alt={name} />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{specialty}</td>
            <td>
                <label onClick={()=>setDeletingDoctor(doctor)} for="delete-confirm-model" class="btn">Delete</label>
                
            </td>
        </tr>
    );
};

export default DoctorsRow;