import React from "react";
import {  Navigate, Outlet } from "react-router-dom";

const GuardedRoute = () => {
	const auth = window.localStorage.getItem("token");
	console.log("auth");
	console.log(auth);

	return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default GuardedRoute;
