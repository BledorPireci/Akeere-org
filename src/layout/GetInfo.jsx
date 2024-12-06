import React from 'react';
import '../scss/sections/_getInfo.scss'
import camera from '../assets/icons/Rectangle.png'

export default function GetInfo() {
    return (
        <div className="infoSection">
            <div className="infoWrapper">
                <div className="photo">
                    <img src={camera} alt="Konsultime për energji"/>
                </div>
                <div className="infoText">
                    <h2>Informohuni për energjinë e gjelbër</h2>
                    <p>Na kontaktoni për të mësuar më shumë rreth zgjidhjeve të qëndrueshme të energjisë dhe si mund të përmirësoni efiçiencën energjetike në projektet tuaja.</p>
                </div>
                <div className="booking">
                    <button className="bookingButton" role="button">Rezervo një konsultim</button>
                </div>
            </div>
        </div>
    );
}


