import { useContext } from "react";
import PeopledataContext from "../context/peopledata/peopledata.context";
import { db } from "../firebase";

const useGetUsersList = () => {

    const { setUsersList } = useContext(PeopledataContext);

    const action = () => {
        db.collection('users').onSnapshot( query => {
            const docs = [];
            query.forEach( doc => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setUsersList(docs);
        })
    }

    return [action];
}

export default useGetUsersList;
