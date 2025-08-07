import React, { createContext, useContext } from "react";

import ImgCarousel from "../assets/imgCarousel.png";
import Project1 from "../assets/project1.png";
import Project2 from "../assets/project2.png";
import Project3 from "../assets/project3.png";
import dontation1 from "../assets/dontation1.png";
import dontation2 from "../assets/dontation2.png";
import dontation3 from "../assets/dontation3.png";
const DataContext = createContext();

const cardData = [
	{
		image: Project1,
		title: "البذرة المباركة",
		description:
			"من عمر 3 سنوات ونصف حتى  5 سنوات ( المدة سنتان)، الهدف : اتقان تلاوة القرآن والكتابة + حفظ جزأين من القرآن",
		link: "/donation",
		rate: "4.9",
		currentAmount: 200,
		targetAmount: 4500,
	},
	{
		image: Project2,
		title: "المرتل الصغير لكتاب الله المنير",
		description: "من عمر 5 سنوات حتى 10 سنوات ( المدة سنة لسنتين)، الهدف : اتقان تلاوة القرآن والكتابة",
		link: "/donation",
		rate: "4.8",
		currentAmount: 1005,
		targetAmount: 4500,
	},
	{
		image: Project3,
		title: "المرتل المُجيد لكتاب الله المَجيد",
		description: "من عمر 11 سنة فما فوق ( المدة 3 اشهر الى 6 اشهر )، الهدف : اتقان تلاوة القرآن",
		link: "/donation",
		rate: "4.2",
		currentAmount: 2800,
		targetAmount: 4500,
	},
	{
		image: Project2,
		title: "حلقات التلاوة (ختمتي).",
		description:
			"من عمر 12 سنة فما فوق ( المدة شهر الى 3 اشهر )، الهدف : تلاوة القرآن بنظام التتابع (السامع كالقارئ).",
		link: "/donation",
		rate: "4.8",
		currentAmount: 1005,
		targetAmount: 4500,
	},
	{
		image: Project1,
		title: "دورات أساسات التجويد.",
		description:
			"من عمر 12 سنة فما فوق ( المدة شهر الى 3 اشهر )، الهدف : تعلم أساسات أحكام التجويد مع التطبيق العملي..",
		link: "/donation",
		rate: "4.9",
		currentAmount: 200,
		targetAmount: 4500,
	},
	{
		image: Project1,
		title: "برنامج التأهيل العلمي لبرنامج الإجازة القرآنية.",
		description:
			"من عمر 16 سنة فما فوق ( المدة 3 اشهر )، الهدف : تعلم أحكام التجويد (تفصيلي) مع التطبيق العملي...",
		link: "/donation",
		rate: "4.9",
		currentAmount: 200,
		targetAmount: 4500,
	},
	{
		image: Project1,
		title: "البرنامج الذهبي.",
		description: "من عمر 7 سنة فما فوق (من (3) إلى (5) سنوات)، الهدف : حفظ القرآن الكريم ومراجعته..",
		link: "/donation",
		rate: "4.9",
		currentAmount: 200,
		targetAmount: 4500,
	},
	{
		image: Project1,
		title: "الدورات القرآنية المكثفة.",
		description: "من عمر 12 سنة فما فوق (من (3) إلى (6) أسابيع.)، الهدف : مراجعة القرآن الكريم أو أجزاء منه..",
		link: "/donation",
		rate: "4.9",
		currentAmount: 200,
		targetAmount: 4500,
	},
	{
		image: Project1,
		title: "الأيام القرآنية.",
		description:
			"من عمر 12 سنة فما فوق (من يوم واحد إلى (5) أيام)، الهدف : مراجعة القرآن الكريم أو أجزاء منه..",
		link: "/donation",
		rate: "4.9",
		currentAmount: 200,
		targetAmount: 4500,
	},
	{
		image: Project1,
		title: "الإقراء والإجازات.",
		description:
			"من عمر 16 سنة فما فوق (من سنة إلى سنتين)، الهدف : الحصول على الإجازة القرآنية غيبًا برواية من الروايات أو قراءة من القراءات العشر..",
		link: "/donation",
		rate: "4.9",
		currentAmount: 200,
		targetAmount: 4500,
	},
];

const donationData = [
	{
		category: "كفالات",
		title: "كفالة عامة",
		description: "دعم مفتوح يستخدم حسب الحاجة في التعليم أو الإدارة أو الفعاليات",
		image: dontation1,
		currentAmount: 2490,
		targetAmount: 4500,
		rate: 5,
	},
	{
		category: "كفالات",
		title: "كفالة تكريم الطلاب",
		description: "شارِك في إدخال السرور على قلوب الطلاب من خلال دعم جوائز التكريم والتشجيع",
		image: dontation2,
		currentAmount: 2490,
		targetAmount: 4500,
		rate: 4.2,
	},
	{
		category: "كفالات",
		title: "كفالة عامة",
		description: "شارك في إدخال السرور على قلوب الطلاب من خلال دعم جوائز التكريم والتشجيع",
		image: dontation3,
		currentAmount: 2490,
		targetAmount: 4500,
		rate: 3.9,
	},
	{
		category: "كفالات",
		title: "كفالة عامة",
		description: "دعم مفتوح يستخدم حسب الحاجة في التعليم أو الإدارة أو الفعاليات",
		image: dontation1,
		currentAmount: 2490,
		targetAmount: 4500,
		rate: 4.8,
	},
	{
		category: "كفالات",
		title: "كفالة تكريم الطلاب",
		description: "شارِك في إدخال السرور على قلوب الطلاب من خلال دعم جوائز التكريم والتشجيع",
		image: dontation2,
		currentAmount: 2490,
		targetAmount: 4500,
		rate: 4.8,
	},
];

export const DataProvider = ({ children }) => (
	<DataContext.Provider value={{ cardData, donationData }}>{children}</DataContext.Provider>
);

export const useData = () => useContext(DataContext);
