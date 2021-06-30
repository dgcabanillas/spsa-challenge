import React, { useState, useEffect } from "react";
import InputText from './InputText';
import SubmitButton from './SubmitButton';
import ErrorMessage from './ErrorMessage';
import Datepicker from './Datepicker';
import useCreateUser from "../hooks/useCreateUser";
import { calculateAge } from "../helpers/functions";

const DataForm = () => {

    const initialValues = {
        nombre: "",
        apellido: "",
        edad: "",
        fechaNacimiento: new Date(),
    };

    const [createUser] = useCreateUser();
    const [values, setValues] = useState(initialValues);
    const [message, setMessage] = useState("");

    const handleInputChange = (e) => {
        setMessage("");
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };
    const handleDateChange = (date) => {
        setMessage("");
        date == null && ( date = "" );
        setValues({ ...values, "fechaNacimiento": date });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        let errorMessage = "";

        if( values.nombre === "" ) {
            if ( errorMessage === "" ) {
                errorMessage += "Falta completar nombre";
            } else {
                errorMessage += ", nombre";
            }
        }

        if( values.apellido === "" ) {
            if ( errorMessage === "" ) {
                errorMessage += "Falta completar apellido";
            } else {
                errorMessage += ", apellido";
            }
        }

        if( values.fechaNacimiento === "" ) {
            if ( errorMessage === "" ) {
                errorMessage += "Falta completar fecha de nacimiento";
            } else {
                errorMessage += ", fecha de nacimiento";
            }
        }

        if( errorMessage ) {
            setMessage(errorMessage);
            return;
        }

        if( values.fechaNacimiento > new Date() ) {
            setMessage("Ingrese una fecha válida");
            return;
        }

        await createUser(values);
        setValues({ ...initialValues });
    };

    useEffect(() => {
        if( values.fechaNacimiento ) {
            const age = calculateAge(values.fechaNacimiento)
            setValues({ ...values, "edad": age });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [values.fechaNacimiento])

    return (
        <form onSubmit={handleSubmit} className="card card-body border-primary">
            <InputText 
                placeholder="Nombre"
                name="nombre"
                values={values}
                onChange={handleInputChange}
                icon="create"
            />
            <InputText
                placeholder="Apellido"
                name="apellido"
                values={values}
                onChange={handleInputChange}
                icon="create"
            />
            <Datepicker 
                placeholder="Fecha de nacimiento"
                name="fechaNacimiento"
                values={values}
                onChange={handleDateChange}
            />
            <InputText 
                placeholder="Edad"
                name="edad"
                values={values}
                onChange={handleInputChange}
                icon="event_available"
                disabled
            />
            <SubmitButton> Guardar </SubmitButton>
            { message && <ErrorMessage message={message}/> }
        </form>
    );
};

export default DataForm;