import React, { createContext, useContext } from "react";

import ImgCarousel from "../assets/imgCarousel.png";

const DataContext = createContext();

const cardData = [
	{
		image: ImgCarousel,
		title: "كفالة ايجار مبنى",
		description: "ساهم في تغطية تكاليف إيجار المبنى الذي يحتضن الأنشطة القرآنية",
		link: "/donation",
		rate: "4.9",
		currentAmount: 4456,
		targetAmount: 4500,
	},
	{
		image: ImgCarousel,
		title: "تعليم القرآن للأطفال",
		description:
			"شارك في نشر الخير من خلال دعم حلقات تحفيظ القرآن للأطفال، وتوفير بيئة تربوية تُحببهم في كتاب الله وتغرس فيهم القيم الإسلامية",
		link: "/donation",
		rate: "4.8",
		currentAmount: 1005,
		targetAmount: 4500,
	},
	{
		image: ImgCarousel,
		title: "كفالة الطالب",
		description: "ساهم في تعليم طالبٍ القرآن الكريم وتوفير بيئة آمنة له",
		link: "/donation",
		rate: "4.2",
		currentAmount: 2800,
		targetAmount: 4500,
	},
];

const donationData = [
	{
		id: 1,
		category: "كفالات",
		title: "كفالة عامة",
		description: "دعم مفتوح يستخدم حسب الحاجة في التعليم أو الإدارة أو الفعاليات",
		image: ImgCarousel,
		currentAmount: 2490,
		targetAmount: 4500,
		rating: 4.8,
	},
	{
		id: 2,
		category: "كفالات",
		title: "كفالة تكريم الطلاب",
		description: "شارِك في إدخال السرور على قلوب الطلاب من خلال دعم جوائز التكريم والتشجيع",
		image: ImgCarousel,
		currentAmount: 2490,
		targetAmount: 4500,
		rating: 4.8,
	},
	{
		id: 3,
		category: "كفالات",
		title: "كفالة عامة",
		description: "شارك في إدخال السرور على قلوب الطلاب من خلال دعم جوائز التكريم والتشجيع",
		image: ImgCarousel,
		currentAmount: 2490,
		targetAmount: 4500,
		rating: 4.8,
	},
	{
		id: 4,
		category: "المشاريع",
		title: " كفالة حلقة تعليمية",
		description: "كن سببًا في استمرار حلقة كاملة تشمل المكان والمعلم والخدمات",
		image: ImgCarousel,
		currentAmount: 800,
		targetAmount: 2500,
		rating: 4.7,
	},
	{
		id: 5,
		category: "الزكاة",
		title: "زكاة المال",
		description: "ادفع زكاة مالك في مصارفها الشرعية لتغطي احتياجات الأسر",
		image: ImgCarousel,
		currentAmount: 2000,
		targetAmount: 4000,
		rating: 4.9,
	},
];

export const DataProvider = ({ children }) => (
	<DataContext.Provider value={{ cardData, donationData }}>{children}</DataContext.Provider>
);

export const useData = () => useContext(DataContext);
