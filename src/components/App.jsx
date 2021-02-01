import React, { Component } from 'react';
import Header from './childComponents/Header';
import Banner from './childComponents/Banner';
import Content from './childComponents/Body';
import Footer from './childComponents/Footer';

export default function App(){
    return(
        <div className="wrapper">
            <Header />
            <Banner />
        </div>
    )
}