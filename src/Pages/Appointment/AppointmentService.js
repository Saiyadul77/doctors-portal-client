import { format } from 'date-fns';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import BookingModel from './BookingModel';
import Service from './Service';


const AppointmentService = ({ date }) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment]=useState(null);
    const formatedDate= format(date,'PP')

    const { isLoading, error, data:services, refetch } = useQuery(['available', formatedDate], () =>
    fetch(`https://pure-badlands-39812.herokuapp.com/available?date=${formatedDate}`).then(res =>
      res.json()
    )
  )
  if(isLoading){
    return <Loading></Loading>
  }
    // useEffect(() => {
    //     fetch(`https://pure-badlands-39812.herokuapp.com/available?date=${formatedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data));
    // }, [formatedDate])
    return (
        <div>
            <h2 className='text-xl text-secondary text-center'>Available Services on: {format(date, 'PP')}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <BookingModel 
            date={date} 
            setTreatment={setTreatment}
            refetch={refetch}
            treatment={treatment}></BookingModel>}
        </div>
    );
};

export default AppointmentService;