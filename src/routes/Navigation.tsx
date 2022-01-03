import { BrowserRouter, NavLink } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import { RegisterPage, FormikAbstract, FormikBasicPage, FormikComponents, FormikYupPage, RegisterFormikPage, DynamicForms } from "../forms/pages/";

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
                                to="/formik/registerPage"
                                className={({ isActive }) => (isActive ? "nav-active" : "")}
                            >
                                Register Formik Page
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
                                to="/formik/components"
                                className={({ isActive }) => (isActive ? "nav-active" : "")}
                            >
                                Formik Components
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/formik/abtracts"
                                className={({ isActive }) => (isActive ? "nav-active" : "")}
                            >
                                Formik Abstractation
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/formik/DynamicForms"
                                className={({ isActive }) => (isActive ? "nav-active" : "")}
                            >
                                Formik Dynamic
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/formik/basic" element={<FormikBasicPage />} />
                    <Route path="/formik/yup" element={<FormikYupPage />} />
                    <Route path="/formik/components" element={<FormikComponents />} />
                    <Route path="/formik/registerPage" element={<RegisterFormikPage />} />
                    <Route path="/formik/abtracts" element={<FormikAbstract />} />
                    <Route path="/formik/DynamicForms" element={<DynamicForms />} />

                    <Route path="/*" element={<Navigate to="/register" replace />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};
