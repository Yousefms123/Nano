import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";

const breadcrumbNameMap = {
	about: "من نحن",
	services: "الخدمات",
	contact: "تواصل معنا",
	revision: "المراجعات",
	donate: "تبرع",
	register: "تسجيل جديد",
	payment: "اتمام التبرع",
	item: "",
};

const DynamicBreadcrumbs = () => {
	const location = useLocation();
	const [searchParams] = useSearchParams();
	const pathnames = location.pathname.split("/").filter((x) => {
		return x;
	});

	if (pathnames.length === 0) {
		return null;
	}

	const breadcrumbItems = [
		{ label: "الرئيسية", path: "/", isCurrent: false },
		...pathnames.map((name, index) => {
			let routeTo;

			// إذا كان اسم المسار هو donate، ثبّت الرابط مباشرة
			if (name === "donate") {
				routeTo = "/donate";
			} else {
				routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
			}

			const isCurrent = index === pathnames.length - 1;

			let label = breadcrumbNameMap[name] || name;

			// إذا كنا في صفحة item ضمن التبرع، نأخذ اسم المشروع من URL
			if (name === "item") {
				label = searchParams.get("title") || "تفاصيل المشروع";
			}
			return { label, path: routeTo, isCurrent };
		}),
	];

	return <Breadcrumbs items={breadcrumbItems} />;
};

export default DynamicBreadcrumbs;
