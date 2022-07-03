import React from 'react';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import './service.css'

const Service = ({service}) => {
    const {icon,title,count,position} = service;

    return (
        <div className='col-md-3 mt-4 col-sm-3 col-6'>
            <div className="card-area">
                <img src={icon} alt="" />
                <p>{title}</p>
                <h5>{count}</h5>
                <div className='d-flex'>
                    <ArrowDropUpIcon />
                    <h6>{position}</h6>
                </div>
            </div>
        </div>
    );
};

export default Service;