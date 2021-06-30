import React, { useContext } from 'react'
import PeopledataContext from '../context/peopledata/peopledata.context';
import { Link } from "react-router-dom";
import useDeleteUser from '../hooks/useDeleteUser';

const ClientList = () => {

    const { users } = useContext(PeopledataContext);
    const [deleteUser] = useDeleteUser();

    return (
        <div className="row card card-body border-primary m-0">
            <h4 className="col-12 fw-bold text-center"> 
                Lista de clientes
            </h4>
            <div className="col-12 px-0">
                <div>
                    <div className="d-flex justify-content-between fw-bold">
                        <span
                            style={{flexGrow: 1}}
                            className="text-truncate text-start"
                        >Nombre</span>
                        <span
                            style={{width: 40, flexShrink: 0}}
                            className="text-end"
                        >Edad</span>
                        <span style={{width: 35, flexShrink: 0}}> - </span>
                        <span style={{width: 25, flexShrink: 0}}> - </span>
                    </div> 

                    {users.map( 
                        user => {
                            return (
                                <div 
                                    key={user.id}
                                    className="d-flex justify-content-between"
                                >
                                    <span
                                        style={{flexGrow: 1}}
                                        className="text-truncate text-start"
                                    >{ user.nombre + ' ' + user.apellido }</span>
                                    <span
                                        style={{width: 40, flexShrink: 0}}
                                        className="text-end"
                                    >{ user.edad }</span>
                                    <Link 
                                        to={"user/" + user.id }
                                        style={{width: 35, flexShrink: 0}}
                                        className="text-decoration-none"
                                    > ver </Link>
                                    <button
                                        type="button" 
                                        className="btn btn-link text-danger btn-sm p-0"
                                        style={{width: 25, flexShrink: 0}}
                                        onClick={() => deleteUser(user.id)}
                                    >
                                        <i className="material-icons fs-6 fw-bold" style={{marginTop: 6}}>
                                            close
                                        </i>
                                    </button>
                                </div> 
                            )
                        }
                    )}
                </div>
            </div>
        </div>
    )
}

export default ClientList;
