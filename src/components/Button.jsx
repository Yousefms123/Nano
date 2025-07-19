import React from "react";
import { Link } from "react-router";
import { Button } from "@material-tailwind/react";
const MainButton = ({ children, className = "", onClick, type = "button", to }) => {
	// إذا كان فيه رابط "to"، نستخدم Link
	if (to) {
		return (
			<Link
				to={to}
				className={`inline-block px-4 py-2 rounded-full font-medium transition duration-200 ${className}`}
			>
				{children}
			</Link>
		);
	}
	return (
		<Button
			type={type}
			onClick={onClick}
			className={`text-white  transition-all duration-200  font-medium  px-4 py-2 text-center ${className}`}
		>
			{children}
		</Button>
	);
};

export default MainButton;
