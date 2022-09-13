import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-5 mt-28'>
            <InfoCard description="Lorem Ipsum is simply dummy text of the pri" bgClass="bg-gradient-to-r from-primary to-secondary" cardTitle="Our opening hours"  img={clock}></InfoCard>
            <InfoCard description="Brooklyn, NY 10036, United States" bgClass="bg-accent" cardTitle="Visit Our Locations" img={marker}></InfoCard>
            <InfoCard description="+000 123 456789" bgClass="bg-gradient-to-r from-primary to-secondary" cardTitle="Connect us now" img={phone}></InfoCard>
        </div>
    );
};

export default Info;