import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "../contexts/UserContext";

import Login from "../pages/signin";
import Register from "../pages/signup";
import UserProducts from "../pages/myproducts";
import RegisterProduct from "../pages/registerproduct";
import Match from "../pages/match";
import Trade from "../pages/trades";

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
                    <Route path="/registerproduct" element={<RegisterProduct />} />
                    <Route path="/matchs" element={<Match />} />
                    <Route path="/trade" element={<Trade />} />
                </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    );

}