import { Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";
import Job from "../Pages/Job";
import {Login} from "../Pages/Login";

function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/job" element={<Job />}></Route>
        </Routes>
    );
}

export default AllRoutes;
