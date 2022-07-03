import React from 'react';
import bannerLogo from '../../assets/banner.png'
import Appointments from '../Appointments/Appointments';
import Services from '../Services/Services';
import Todo from '../Todo/Todo';
import Update from '../Update/Update';
import './Banner.css'

const Banner = () => {
    return (
        <div >
            <div className="container">
                <div className="row">
                    <div className="col-md-8 ">
                        <div id="bannerArea" className="row banner-area">

                            <div className="col-md-6">
                                <img src={bannerLogo} alt="" />
                            </div>
                            <div className="col-md-6">
                                <div className="text-area">
                                    <h2>Hello,Mary Jane!</h2>
                                    <p className='mt-3'>Stay Up-to-Date with your appointments</p>
                                    <p>You have no pending reports</p>
                                </div>
                            </div>

                        </div>
                       
                            <Services></Services>
                            <Todo></Todo>
                        
                    </div>
                    <div className="col-md-4">
                        <div className="appointment-area">
                            <h4>Upcoming Appointments</h4>
                            <Appointments></Appointments>
                            

                        </div>
                        
                        <Update></Update>
                    </div>
                    
                </div>
            </div>

        </div>
    );
};

export default Banner;