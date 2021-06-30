import { toast } from 'react-toastify';
import { db } from '../firebase';

const useCreateUser = () => {

    const action = async ( values ) => {
        await db.collection('users').doc().set( values );
        toast("¡Datos guardados!", { type: "success", autoClose: 2000, position: "bottom-left" });
    } 

    return [action]
}

export default useCreateUser;
