import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import PeopledataContext from '../context/peopledata/peopledata.context';
import { calculateAge, estimateDeathDate, seconds2datestring } from '../helpers/functions';
import useUpdateUser from '../hooks/useUpdateUser';

const ClientData = () => {

    const { id } = useParams();
    const { users } = useContext(PeopledataContext); 
    const [user, setUser] = useState(null);
    const [updateUser] = useUpdateUser();

    useEffect(() => {
        if( id ) {
            setUser(users.find( user => id === user.id ));
        }
    }, [id, users])

    useEffect(() => {
        if( user ) {
            if( !user.fechaFallecimiento ) {
                const fechaFallecimiento = estimateDeathDate(user.edad);
                const edadMaxima = calculateAge(new Date(user.fechaNacimiento.seconds * 1000), fechaFallecimiento);
                updateUser(user.id, { fechaFallecimiento, edadMaxima });
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])



    return (
        <div className="container d-flex flex-column">
            <Link to="/" className="text-decoration-none">
                <span className="d-flex">
                    <i className="material-icons me-2">
                        keyboard_return
                    </i>
                    Volver
                </span>
            </Link>
            <br />
            <h1 className="mb-0 ms-4 flex-grow-1 fw-bold">
                { user ? user.nombre + " " + user.apellido : "No se han encontrado registros"}
            </h1> 

            { 
                user && (
                    <div className="row">
                        <div className="col-md-7 mx-auto px-0">
                            <table className="table mt-4 align-middle">
                                <tbody>
                                    <tr className="d-flex">
                                        <th className="text-end pe-3 col-6"> Nombre </th>
                                        <td className="text-start ps-3 col-6">{ user.nombre }</td>
                                    </tr>
                                    <tr className="d-flex">
                                        <th className="text-end pe-3 col-6"> Apellido </th>
                                        <td className="text-start ps-3 col-6">{ user.apellido }</td>
                                    </tr>
                                    <tr className="d-flex">
                                        <th className="text-end pe-3 col-6"> Fecha Nacimiento </th>
                                        <td className="text-start ps-3 col-6">{ seconds2datestring(user.fechaNacimiento.seconds) }</td>
                                    </tr>
                                    <tr className="d-flex">
                                        <th className="text-end pe-3 col-6"> Edad </th>
                                        <td className="text-start ps-3 col-6">{ user.edad }</td>
                                    </tr>
                                    { user.fechaFallecimiento && (
                                        <>
                                            <tr className="d-flex">
                                                <th className="text-end pe-3 col-6"> Fecha de muerte proyectada </th>
                                                <td className="text-start ps-3 col-6">{ seconds2datestring(user.fechaFallecimiento.seconds) }</td>
                                            </tr>
                                            <tr className="d-flex">
                                                <th className="text-end pe-3 col-6"> Edad máxima proyectada </th>
                                                <td className="text-start ps-3 col-6">{ user.edadMaxima }</td>
                                            </tr>
                                        </>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default ClientData;
