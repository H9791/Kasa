import React from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Page404 from '../components/page404/page404';

export default function NoPage() {
    return (
        <>
            <Header />
            <Page404 />
            <Footer />
        </>
    );

}