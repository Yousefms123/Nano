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
		title: "كفالة ايجار مبنى",
		description: "ساهم في تغطية تكاليف إيجار المبنى الذي يحتضن الأنشطة القرآنية",
		link: "/donation",
		rate: "4.9",
		currentAmount: 200,
		targetAmount: 4500,
	},
	{
		image: Project2,
		title: "تعليم القرآن للأطفال",
		description:
			"شارك في نشر الخير من خلال دعم حلقات تحفيظ القرآن للأطفال، وتوفير بيئة تربوية تُحببهم في كتاب الله وتغرس فيهم القيم الإسلامية",
		link: "/donation",
		rate: "4.8",
		currentAmount: 1005,
		targetAmount: 4500,
	},
	{
		image: Project3,
		title: "كفالة الطالب",
		description: "ساهم في تعليم طالبٍ القرآن الكريم وتوفير بيئة آمنة له",
		link: "/donation",
		rate: "4.2",
		currentAmount: 2800,
		targetAmount: 4500,
	},
	{
		image: Project2,
		title: "تعليم القرآن للأطفال",
		description:
			"شارك في نشر الخير من خلال دعم حلقات تحفيظ القرآن للأطفال، وتوفير بيئة تربوية تُحببهم في كتاب الله وتغرس فيهم القيم الإسلامية",
		link: "/donation",
		rate: "4.8",
		currentAmount: 1005,
		targetAmount: 4500,
	},
	{
		image: Project1,
		title: "كفالة ايجار مبنى",
		description: "ساهم في تغطية تكاليف إيجار المبنى الذي يحتضن الأنشطة القرآنية",
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
		rating: 4.8,
	},
	{
		category: "كفالات",
		title: "كفالة تكريم الطلاب",
		description: "شارِك في إدخال السرور على قلوب الطلاب من خلال دعم جوائز التكريم والتشجيع",
		image: dontation2,
		currentAmount: 2490,
		targetAmount: 4500,
		rating: 4.8,
	},
	{
		category: "كفالات",
		title: "كفالة عامة",
		description: "شارك في إدخال السرور على قلوب الطلاب من خلال دعم جوائز التكريم والتشجيع",
		image: dontation3,
		currentAmount: 2490,
		targetAmount: 4500,
		rating: 4.8,
	},
	{
		category: "كفالات",
		title: "كفالة عامة",
		description: "دعم مفتوح يستخدم حسب الحاجة في التعليم أو الإدارة أو الفعاليات",
		image: dontation1,
		currentAmount: 2490,
		targetAmount: 4500,
		rating: 4.8,
	},
	{
		category: "كفالات",
		title: "كفالة تكريم الطلاب",
		description: "شارِك في إدخال السرور على قلوب الطلاب من خلال دعم جوائز التكريم والتشجيع",
		image: dontation2,
		currentAmount: 2490,
		targetAmount: 4500,
		rating: 4.8,
	},
];

export const DataProvider = ({ children }) => (
	<DataContext.Provider value={{ cardData, donationData }}>{children}</DataContext.Provider>
);

export const useData = () => useContext(DataContext);
