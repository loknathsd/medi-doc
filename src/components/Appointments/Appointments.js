import React from 'react';
import Appointment from './Appointment';



const appointments = [
    {
        doctor:'Dr. Muhammad Abdul Hussein',
        dept :'Cardiologist',
        slot :'Morning',
        time :'10.00 AM'
    },
    {
        doctor:'Dr. Muhammad Abdul Hussein',
        dept :'Cardiologist',
        slot :'Morning',
        time :'10.00 AM'
    },
    {
        doctor:'Dr. Muhammad Abdul Hussein',
        dept :'Cardiologist',
        slot :'Morning',
        time :'10.00 AM'
    },
    {
        doctor:'Dr. Muhammad Abdul Hussein',
        dept :'Cardiologist',
        slot :'Morning',
        time :'10.00 AM'
    },
    {
        doctor:'Dr. Muhammad Abdul Hussein',
        dept :'Cardiologist',
        slot :'Morning',
        time :'10.00 AM'
    }
]

const Appointments = () => {
    return (
        <div>
            {
                appointments.map(appointment=><Appointment appointment={appointment}></Appointment>)
            }
            
        </div>
    );
};

export default Appointments;