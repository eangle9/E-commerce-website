import React from 'react';
import { Layout } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = () => {
    return (
        <>
            <Header />
            <Layout />
            <Footer />
        </>
    );
}

export default Layout;
