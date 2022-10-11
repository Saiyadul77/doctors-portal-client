import React, { useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import AppointmentBanner from './AppointmentBanner';
import AppointmentService from './AppointmentService';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <AppointmentService date={date}></AppointmentService>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;