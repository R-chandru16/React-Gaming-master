import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";


import Chess from "./Maincontent/Chess/Chess";
import FootBall from "./Maincontent/FootBall/FootBall";
import VolleyBall from "./Maincontent/VolleyBall/VolleyBall";
import TableTennis from "./Maincontent/TableTennis/TableTennis";
import Rugby from "./Maincontent/Rugby/Rugby";
import { Login } from "./Login/Login";
import Home from "./Maincontent/Home/Home";
import { useState } from "react";
import Sidebar from "./Maincontent/Home/Home";









function App() {

    const [loggedIn, setLoggedIn] = useState(true)

    return (
        <>

            <Router>
                <Routes>
                    <Route index  exact element={<Login />} />
                    <Route
                        exact
                        path="Navbar"
                        element={loggedIn ? <Navbar /> : <Navigate replace to={"/"} />}
                    />







                    <Route path="/login"  element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/Chess" element={<Chess />} />
                    <Route path="/FootBall" element={<FootBall />} />
                    <Route path="/TableTennis" element={<TableTennis />} />

                    <Route path="/Volleyball" element={<VolleyBall />} />
                    <Route path="/Rugby" element={<Rugby />} />



                </Routes>


            </Router>





            {/* <BrowserRouter>
                <Navbar />

              

            </BrowserRouter> */}
        </>
    );
}

export default App;
