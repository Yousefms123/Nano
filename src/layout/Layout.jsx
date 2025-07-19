import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const Layout = () => {
	
	return (
		<div>
			<ScrollToTop />
			<Navbar />
			<div>
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
