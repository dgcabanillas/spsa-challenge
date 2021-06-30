import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Home from './pages/Home';
import ClientData from "./pages/ClientData";
import useGetUsersList from "./hooks/useGetUsersList";

const App = () => {

    const [ getUsersList ] = useGetUsersList()
    useEffect(() => { 
        getUsersList();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="container p-4 text-center">
            <Router>
                <Switch>
                    <Route exact path="/user/:id">
                        <ClientData />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
            <ToastContainer />
        </div>
    );
}

export default App;