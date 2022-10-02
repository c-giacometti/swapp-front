import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/signin";
import Register from "../pages/signup";

export default function Swapp(){

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Register />} />
            </Routes>
        </BrowserRouter>
    );

}