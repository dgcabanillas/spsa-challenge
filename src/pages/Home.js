import React from 'react';
import DataForm from '../components/DataForm';
import ClientList from '../components/ClientList';
import Statistics from '../components/Statistics';

const Home = () => {
    return (
        <>
            <div className="row">
                <h2 className="col-12 mx-auto fw-bold text-center mb-4"> 
                    Creación de cliente 
                </h2>
                <div className="col-md-9 col-lg-7 mx-auto">
                    <DataForm />
                </div>
            </div>
            
            <br />

            <div className="row">
                <div className="col-md-9 col-lg-7 mx-auto">
                    <div className="row flex-column flex-md-row-reverse">
                        <div className="col-md-6">
                            <Statistics />
                        </div>
                        <br/>
                        <div className="col-md-6">
                            <ClientList />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
