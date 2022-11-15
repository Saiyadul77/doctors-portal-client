import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51M1ZqIIz3RW8VI2Kn0eoiKcVPcTEMOcdXaB3SGA4O3TQ16z8VxRyC2gAsYOcW57JiPFTeDBceNV31BgLZpzVxUYx00reRpyi0b');

const Payment = () => {
    const { id } = useParams();

    const url = `http://localhost:5000/booking/${id}`;
    const { data: appointment, isLoading } = useQuery('booking', () => fetch(url, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p>Hello, {appointment.patientName}</p>
                    <h2 class="card-title">Pay for {appointment.treatment}</h2>
                    <p>Your appointment:  <span className='text-orange-700'>{appointment.date}</span> at <span className='text-orange-700'>{appointment.slot}</span></p>
                    <p>Please pay: ${appointment.price}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;