import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

export default function routesApp() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<h1>About</h1>} />
        </Routes>
    )
}