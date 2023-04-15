import React from 'react';
import Header from '../components/header/header';
import Underheader from '../components/underheader/underheader';
import Footer from '../components/footer/footer';
import Valuesarea from '../components/valuesarea/valuesarea';

export default function Apropos() {
    return (
        <div>
            <Header />
            <Underheader cover={2} />
            <Valuesarea />
            <Footer />
        </div>
    )
}