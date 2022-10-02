import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/signin";

export default function Swapp(){

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" />
            </Routes>
        </BrowserRouter>
    );

}