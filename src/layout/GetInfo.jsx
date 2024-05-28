import React from 'react';
import '../scss/sections/_getInfo.scss'
import camera from '../assets/icons/Rectangle.png'
export default function GetInfo() {
    return (
        <div className="infoSection">
            <div className="infoWrapper">
                <div className="photo">
                    <img src={camera}/>
                </div>
                <div className="infoText">
                    <h2>Get informed?</h2>
                    <p>Select this option if you would like to receive critical emails only (e.g. receipts, orders, password changes, etc).</p>
                </div>
                <div className="booking">
                    <button className="bookingButton" role="button">Book a consult</button>
                </div>
            </div>
        </div>
    );
}


