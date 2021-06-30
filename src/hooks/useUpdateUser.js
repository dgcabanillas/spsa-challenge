import { toast } from 'react-toastify';
import { db } from '../firebase';

const useUpdateUser = () => {

    const action = async (id, values) => {
        await db.collection('users').doc(id).update( values );
        toast("¡Datos actualizados!", { type: "success", autoClose: 2000, position: "bottom-left" });
    } 

    return [action]
}

export default useUpdateUser;
