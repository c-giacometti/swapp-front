import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Swapp(){

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/signin" />
                <Route path="/signup" />
            </Routes>
        </BrowserRouter>
    );

}