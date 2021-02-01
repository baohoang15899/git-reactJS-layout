import React, { Component } from 'react';

export default function Banner(){
    return (
        <div className="banner">
            <div className="container">
                <div className="banner__content">
                    <h3 className="banner__content-title">One Page Wonder</h3>
                    <h3 className="banner__content-subTitle">Will Rock Your Socks Off</h3>
                    <button className="banner__content-btn">Learn More</button>
                </div>
            </div>
        </div>
    )
}