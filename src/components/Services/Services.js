import React from 'react';
import Icon1 from '../../assets/Frame1.png'
import Icon2 from '../../assets/Frame2.png'
import Icon3 from '../../assets/Frame3.png'
import Icon4 from '../../assets/Frame4.png'
import Service from '../Service/Service';




const services = [
    {
        icon:Icon1,
        title : 'Pulse Count',
        count : '60 bpm',
        position : 'normal'
    },
    {
        icon:Icon2,
        title : 'Blood Pressure',
        count : '100/70 mmHg',
        position : 'Slightly higher'
    },
    {
        icon:Icon3,
        title : 'Oxygen Saturation',
        count : '90%',
        position : 'Slightly higher'
    },  {
        icon:Icon4,
        title : 'Glucose Count',
        count : '100 mm/dL',
        position : 'normal'
    }
]

const Services = () => {
    return (
        <div style={{marginLeft:'-45px'}} className='row'>
            {
                services.map(service=><Service service={service}></Service>)
            }
            
        </div>
    );
};

export default Services;