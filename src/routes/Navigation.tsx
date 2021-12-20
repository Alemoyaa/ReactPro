import { BrowserRouter, NavLink } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import { RegisterPage } from "../forms/pages/RegisterPage";
import { FormikBasicPage } from "../forms/pages/FormikBasicPage";
import { FormikYupPage } from "../forms/pages/FormikYupPage";

import logo from "../logo.svg";

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React Logo" />
                    <ul>
                        <li>
                            <NavLink
                                to="/register"
                                className={({ isActive }) => (isActive ? "nav-active" : "")}
                            >
                                Register Page
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/formik/basic"
                                className={({ isActive }) => (isActive ? "nav-active" : "")}
                            >
                                Formik Basic
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/formik/yup"
                                className={({ isActive }) => (isActive ? "nav-active" : "")}
                            >
                                Formik Yup
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/users"
                                className={({ isActive }) => (isActive ? "nav-active" : "")}
                            >
                                Users
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/formik/basic" element={<FormikBasicPage />} />
                    <Route path="/formik/Yup" element={<FormikYupPage />} />
                    <Route path="/users" element={<h1>Users page</h1>} />

                    <Route path="/*" element={<Navigate to="/users" replace />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};
