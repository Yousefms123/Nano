import React, { useState } from "react";
import { Link } from "react-router";
import Logo from "../assets/Logo.svg";
import { Menu, X } from "lucide-react";
import { useLocation } from "react-router";
import MainButton from "./Button";

const Navbar = () => {
	const [isOpenMenu, setIsOpenMenu] = useState(false);
	const location = useLocation();
	const navItem = [
		{ href: "/", text: "الرئيسية" },
		{ href: "/about", text: "من نحن" },
		{ href: "/revision", text: "المراجعات" },
		{ href: "/contact", text: "تواصل معنا" },
	];

	return (
		<nav className="bg-main-color fixed w-full z-20 top-0 start-0  shadow-lg  font-Tajawal">
			<div className=" flex flex-wrap items-center justify-between mx-auto px-4 lg:px-12 py-4">
				{/* Logo */}
				<Link to={"/"} className="flex items-center">
					<img src={Logo} className="h-8" alt="Logo" />
				</Link>

				{/* Navigation Links */}
				<div
					className={`${
						isOpenMenu ? "block" : "hidden"
					} w-full md:block md:w-auto order-3 md:order-2`}
				>
					<ul className="flex flex-col md:flex-row text-base  lg:gap-x-6 md:mt-0 mt-4 font-medium p-4 md:p-0 bg-main-color md:bg-transparent border border-white md:border-0 rounded-lg">
						{navItem.map((nav, index) => (
							<li
								key={index}
								className={`border-b-2 border-transparent hover:border-b-white transition-all duration-200 ${
									nav.href === location.pathname ? "border-b-white" : ""
								}`}
							>
								<Link
									to={nav.href}
									className="block py-2 px-3 text-white rounded-sm"
									onClick={() => setIsOpenMenu(false)}
								>
									{nav.text}
								</Link>
							</li>
						))}
						<li className="md:hidden mt-2">
							<Link
								to="/register"
								className="block py-2 px-3 text-white rounded-sm hover:underline"
								onClick={() => setIsOpenMenu(false)}
							>
								تسجيل دخول
							</Link>
						</li>
					</ul>
				</div>

				{/* Right Section */}
				<div className="flex items-center  order-2 md:order-3">
					<Link to={"/register"} className="hidden md:block">
						<button
							type="button"
							className="text-white font-medium cursor-pointer text-sm px-4 py-2 text-center"
						>
							تسجيل الدخول
						</button>
					</Link>

					<MainButton
						to={"/donate"}
						className="text-white bg-button hover:bg-blue-900 transition-all duration-200 font-medium rounded-full text-sm lg:px-5 lg:py-3 text-center"
					>
						تبرع من هنا
					</MainButton>

					{/* Mobile Toggle Button */}
					<button
						className={`md:hidden cursor-pointer hover:bg-white/10 p-2 rounded-lg transition-all duration-200 ${
							isOpenMenu ? "bg-white/90 text-black" : "bg-transparent text-white"
						}`}
						onClick={() => setIsOpenMenu(!isOpenMenu)}
					>
						{isOpenMenu ? <X /> : <Menu />}
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
