import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
    return (
        <Layout>
            <Header />
            <main>
                <h1>Welcome to VN Codes</h1>
                <p>Your go-to resource for coding tutorials and insights.</p>
                <p>Explore our latest posts and learn something new today!</p>
            </main>
            <Footer />
        </Layout>
    );
};

export default HomePage;