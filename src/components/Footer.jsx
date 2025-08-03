import React from "react";
import { Button } from "@material-tailwind/react";
import Logo from "../assets/FooterLogo.svg";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { PiPhoneCall } from "react-icons/pi";
import { MapPin } from "lucide-react";

const Footer = () => {
	const currentYear = new Date().getFullYear();
	const social = [
		{ icon: FaWhatsapp, link: "/" },
		{ icon: FiFacebook, link: "/" },
		{ icon: FaXTwitter, link: "/" },
		{ icon: IoLogoInstagram, link: "/" },
	];
	const fastLink = [
		{
			link: "/",
			text: "الرئيسية",
		},
		{
			link: "/about",
			text: "من نحن",
		},
		{
			link: "/donate",
			text: "التبرعات",
		},
		{
			link: "/contact",
			text: "تواصل معنا",
		},
	];
	const contactLink = [
		{
			icon: CiMail,
			text: "contact@qurannaeeb.com",
		},
		{
			icon: PiPhoneCall,
			text: "92009423",
		},
	];
	const locationLink = [
		{
			icon: <MapPin />,
			text: "مركز المبنى بحي العوامر الشمالية (مقابل مسجد رحمة )",
			link: "https://maps.app.goo.gl/yvgEzWaWq6eLbARW8",
		},
		{
			icon: <MapPin />,
			text: "مبنى المركز بالمعلبية الجنوبية ( حي الرحبة) - الشارع 99",
			link: "https://maps.app.goo.gl/RpvYoS55tPbWjQNV8",
		},
	];
	return (
		<footer className="bg-gray-100 px-2 md:px-28 border-t-2 border-gray-400 font-Tajawal">
			<div className="flex flex-col justify-between">
				<div className="flex items-center gap-x-5 sm:justify-between lg:px-8 border-b-2 border-gray-400">
					<div className="flex w-20 h-20 sm:w-20 sm:h-20 md:w-36 md:h-36">
						<img className="md:w-36 md:h-36" src={Logo} alt="" />
					</div>
					<div className="flex gap-x-2 lg:gap-x-5 items-center">
						{social.map((item, index) => (
							<Link
								to={item.link}
								key={index}
								className="text-gray-600 border border-gray-400 p-3 rounded-full text-sm lg:text-xl hover:bg-main-color hover:text-white transition-all duration-200"
							>
								{React.createElement(item.icon)}
							</Link>
						))}
					</div>
				</div>
				<div className="flex gap-2 mt-4 flex-wrap justify-between px-4  lg:p-8 ">
					<div className="">
						<h1 className="font-bold text-start text-lg md:text-2xl">روابط سريعة</h1>
						<ul>
							{fastLink.map((item, index) => (
								<li
									key={index}
									className="text-gray-600 text-sm md:text-lg text-start mt-2 lg:mt-5"
								>
									<Link to={item.link}>{item.text}</Link>
								</li>
							))}
						</ul>
					</div>
					<div className="">
						<h1 className="font-bold text-start text-lg md:text-2xl">تواصل معنا</h1>
						<ul>
							{contactLink.map((item, index) => (
								<li
									key={index}
									className="text-gray-600 text-sm md:text-xl text-start mt-5 flex items-center gap-x-4"
								>
									{React.createElement(item.icon)}| <span>{item.text}</span>
								</li>
							))}
						</ul>
					</div>
					<div className="">
						<h1 className="font-bold text-start text-base md:text-2xl">مواقع التعليم</h1>
						<ul>
							{locationLink.map((item, index) => (
								<li
									key={index}
									className="text-gray-600 text-sm md:text-xl text-start mt-5 flex items-center gap-x-4"
								>
									{item.icon}| <Link to={item.link} target="_blanck">{item.text}</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="pb-5 border-b-2 border-gray-400">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.9520831951054!2d58.2258622!3d23.641887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8dfd389a330f0f%3A0x5171ffff875cb636!2z2YXYsdmD2LIg2KfZhNiz2YrYqCDYp9mE2YLYsdii2YbZiiAtINin2YTYrNmF2LnZitipINin2YTYudmF2KfZhtmK2Kkg2YTZhNi52YbYp9mK2Kkg2KjYp9mE2YLYsdii2YYg2KfZhNmD2LHZitmF!5e0!3m2!1sar!2s!4v1754217694057!5m2!1sar!2s"
						width="100%"
						height="100%"
						style={{ border: 0 }}
						allowFullScreen=""
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
				<div className="flex items-center justify-center gap-x-2 lg:gap-x-6 py-4 text-gray-600">
					<span className="text-[10px]"> جميع الحقوق محفوظة لسنة {currentYear} ©</span>
					<span>|</span>
					<span className="text-[10px]">مركز السيب القرآني لتحفيظ القرآن</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
