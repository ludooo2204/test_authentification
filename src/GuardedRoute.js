import React from "react";
import {  Navigate, Outlet } from "react-router-dom";

const GuardedRoute = () => {
	const auth = window.localStorage.getItem("token");
	console.log("auth from gardedroute");
	console.log(auth);
// ne verifie juste s'il ya une valeur dans la key token de localstorage ; pas si elle est valide
	return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default GuardedRoute;
