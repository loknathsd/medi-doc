import React from 'react';
import Avatar2 from '../../assets/avatar2.png'
import './Update.css'

const Update = () => {
    return (
        <div className='update-area'>
            <div className='d-flex justify-content-between'>
                <h5>Covid-19 Updates</h5>
                <div>
                    <h5>10 September 2022</h5>
                    <h6>Thursday 10.00.00 AM</h6>
                </div>
            </div>
            <div className='d-flex'>

                <img src={Avatar2} alt="" />
                <div className='info-area d-flex'>
                    <div className=''>
                        <p>Infection Number</p>
                        <h1>500</h1>
                        <p>Infection Rate</p>
                        <h1>10%</h1>
                    </div>
                    <div className='mx-4'>
                        <p>Total Infection</p>
                        <h1>5000,000</h1>
                        <p>Number of Death</p>
                        <h1>20</h1>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Update;