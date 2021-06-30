import { toast } from "react-toastify";
import { db } from "../firebase";

const useDeleteUser = () => {

    const action = async (id) => {
        if (window.confirm("¿Está seguro de borrar el registro?")) {
            await db.collection("users").doc(id).delete();
            toast("Registro eliminado con éxito", {
                type: "success",
                autoClose: 2000,
                position: "bottom-left"
            });
        }
    }

    return [action];
}

export default useDeleteUser;
