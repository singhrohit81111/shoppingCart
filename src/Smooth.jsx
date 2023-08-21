import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Iphone from "./Components/Iphone";
import S23 from "./Components/S23";
import S22 from "./Components/S22";
import AddToCart from "./Components/AddToCart";
import data from './data.json';
import Comp from "./Components/Comp";

export default function Smooth() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<App />} />
                    <Route path=":id" element={<Comp />} />
                    <Route path="addtocart" element={<AddToCart />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}





