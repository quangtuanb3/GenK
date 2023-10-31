import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <ToastContainer position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored" />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
