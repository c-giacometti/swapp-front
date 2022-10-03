import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "../contexts/UserContext";

import Login from "../pages/signin";
import Register from "../pages/signup";
import UserProducts from "../pages/myproducts";

export default function Swapp(){

    const [token, setToken] = useState("");
    const context = { token, setToken };

    return (
        <BrowserRouter>
            <UserContext.Provider value={ context }>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<Register />} />
                    <Route path="/myproducts" element={<UserProducts />} />
                </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    );

}