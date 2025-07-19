import React from "react";
import { UserPlus, BookOpen } from "lucide-react"; // مثال على استخدام أيقونات Lucide
import MainButton from "./Button";

const EnrollmentSection = ({ title, descriptionParagraphs, buttonText, imageUrl, imageAlt }) => {
	return (
		<section className="w-full flex flex-wrap flex-col-reverse lg:flex-row lg:justify-around gap-y-4 items-center lg:items-start py-10 px-4 md:px-4 text-right font-Tajawal">
			<div className="w-[100%] md:w-[100%] h-[100%] lg:w-2/5 md:pl-8 mb-8 md:mb-0 flex flex-col lg:gap-y-10 ">
				<h2 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-6">{title}</h2>
				{descriptionParagraphs.map((paragraph, index) => (
					<p key={index} className="text-sm lg:text-lg leading-relaxed text-gray-700 mb-4">
						{paragraph}
					</p>
				))}
				<MainButton
					to={"/register"}
					className=" text-center bg-main-color hover:bg-main-color/90 lg:w-4/5 text-white py-4 px-10 rounded-full text-sm lg:text-lg font-semibold transition-colors duration-300 font-Tajawal "
				>
					<span>{buttonText}</span>
				</MainButton>
			</div>
			<div className="md:w-full  lg:w-2/4">
				<img
					src={imageUrl}
					alt={imageAlt}
					className="w-full h-auto rounded-lg shadow-lg object-cover"
				/>
			</div>
		</section>
	);
};

export default EnrollmentSection;
