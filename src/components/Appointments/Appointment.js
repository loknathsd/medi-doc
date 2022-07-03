import React from 'react';
import './appointment.css'

const Appointment = ({appointment}) => {

    const {doctor,dept,time,slot} = appointment;

    return (
        <div className='d-flex my-3'>
            <div className='date-area'>
                <h6 >2022</h6>
                <p>13</p>
                <h4>Sep</h4>
            </div>
            <div className='doctor-detail'>
                <h5>{doctor}</h5>
                <small>{dept}</small>
                <div className='d-flex'>
                    <p><span>Slot</span> {slot}</p>
                    <p><span>Time</span> {time}</p>
                </div>
            </div>
        </div>
    );
};

export default Appointment;