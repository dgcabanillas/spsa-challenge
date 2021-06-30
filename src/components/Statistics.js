import React, { useContext, useEffect, useState } from 'react';
import PeopledataContext from '../context/peopledata/peopledata.context';
import { average, formatNumber, standard_deviation } from '../helpers/functions';

const Statistics = () => {

    const { users } = useContext(PeopledataContext);
    const [stats, setStats] = useState({
        avg: "-",
        std: "-",
    });

    useEffect(() => {
        if( users && users.length > 0 ) {
            const ages = users.reduce((ages, user) => [...ages, user.edad], []);
            setStats({
                avg: formatNumber( average(ages), 2) ,
                std: formatNumber( standard_deviation(ages), 2 )
            });
        } else {
            setStats({
                avg: "-",
                std: "-"
            });
        }
    }, [users])

    return (
        <div className="row card card-body border-primary m-0">
            <h4 className="col-12 mx-auto fw-bold text-center"> 
                Estadísticas
            </h4>
            <div className="col-12 mx-0">
                <p className="mb-0"> 
                    Promedio de Edades 
                    <br />
                    <span className="fw-bold fs-3">{ stats.avg }</span>    
                </p>
                <p className="mb-0"> 
                    Desviación Estandar
                    <br />
                    <span className="fw-bold fs-3">{ stats.std }</span>    
                </p>
            </div>
        </div>
    )
}

export default Statistics;
