import React from "react";
import { Link } from "react-router"; // استخدام Link للتنقل
import { ChevronLeft, ChevronRight } from "lucide-react"; // أيقونة للفصل

const Breadcrumbs = ({ items }) => {
	return (
		<nav aria-label="breadcrumb md:px-20">
			<ol className="flex items-center space-x-2 text-sm text-gray-500 rtl:space-x-reverse">
				{items.map((item, index) => (
					<li key={index} className="flex items-center">
						{!item.isCurrent ? (
							<Link to={item.path} className="hover:underline hover:text-gray-700">
								{item.label}
							</Link>
						) : (
							<span className="font-medium text-gray-800" aria-current="page">
								{item.label}
							</span>
						)}

						{index < items.length - 1 && <ChevronLeft className="h-4 w-4 mx-2" />}
					</li>
				))}
			</ol>
		</nav>
	);
};

export default Breadcrumbs;
