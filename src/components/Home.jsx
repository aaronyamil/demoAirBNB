import React from 'react'
import ContainerHeader from '../containers/header/ContainerHeader';
import ContainerStays from '../containers/header/ContainerStays';
import '../styles/main.css'

const Home = () => {
    return (
        <div className="content">
            {/* <ContainerHeader /> */}
            <ContainerStays />
        </div>
    );
};

export default Home;
