import React, { useState } from "react";
import { Star } from "lucide-react";
import MainButton from "./Button";
import revesionImg from "../assets/revesionImg.png";
import Testimonials from "./Testimonials";
import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png";
import user3 from "../assets/user3.png";
import user4 from "../assets/user4.png";

const userImages = [user1, user2, user3, user4];

const initialTestimonials = [
	{
		name: "سمير سرحان",
		image: user1,
		text: "ابني الصغير أصبح متعلقًا بالقرآن وأحب الذهاب للحلقة كل أسبوع.",
		rating: 4,
	},
	{
		name: "خالد شحادة",
		image: user2,
		text: "المعلمون رائعون في التعامل مع الأطفال.",
		rating: 4,
	},
	{
		name: "قيس محمد",
		image: user3,
		text: "تبرعت من خلال الموقع وسُررت بسرعة الرد.",
		rating: 5,
	},
	{
		name: "اسامة الشرفا",
		image: user4,
		text: "أجواء المركز هادئة ومليئة بالإيمان...",
		rating: 5,
	},
	{
		name: "خالد شحادة",
		image: user2,
		text: "المعلمون رائعون في التعامل مع الأطفال.",
		rating: 4,
	},
	{
		name: "قيس محمد",
		image: user3,
		text: "تبرعت من خلال الموقع وسُررت بسرعة الرد.",
		rating: 5,
	},
];

export function RevesionForm() {
	const [rating, setRating] = useState(0);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [text, setText] = useState("");
	const [testimonials, setTestimonials] = useState(initialTestimonials);

	const handleSubmit = (e) => {
		e.preventDefault();

		const randomImage = userImages[Math.floor(Math.random() * userImages.length)];

		const review = {
			name,
			text,
			rating,
			image: randomImage,
		};

		setTestimonials((prev) => [review, ...prev]);

		// Reset form
		setName("");
		setEmail("");
		setText("");
		setRating(0);
	};

	return (
		<div className="lg:px-28">
			<div className="">
				<Testimonials testimonials={testimonials} />
			</div>
			<div className="flex flex-col gap-x-5 md:flex-row mt-20">
				<form onSubmit={handleSubmit} className="md:w-2/3 lg:w-1/2">
					<div className="flex gap-1 mb-6">
						{[...Array(5)].map((_, i) => (
							<Star
								key={i}
								size={28}
								onClick={() => setRating(i + 1)}
								className={`cursor-pointer transition-colors ${
									i < rating
										? "text-amber-600 fill-amber-600 stroke-none"
										: "text-gray-400"
								}`}
							/>
						))}
					</div>

					<div className="mb-4 text-start">
						<label className="block mb-2 text-[#97280e] font-medium" htmlFor="name">
							الاسم
						</label>
						<input
							id="name"
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
							placeholder="ادخل اسمك"
							required
							className="w-full px-4 py-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black/60 transtion-all duration-200"
						/>
					</div>

					<div className="mb-4 text-start">
						<label className="block mb-2 text-[#97280e] font-medium" htmlFor="email">
							الايميل
						</label>
						<input
							id="email"
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="أدخل البريد الإلكتروني"
							required
							className="w-full px-4 py-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black/60 transtion-all duration-200"
						/>
					</div>

					<div className="mb-4 text-start">
						<label className="block mb-2 text-[#97280e] font-medium" htmlFor="review">
							مراجعتك
						</label>
						<textarea
							id="review"
							value={text}
							onChange={(e) => setText(e.target.value)}
							placeholder="اكتب مراجعتك"
							required
							className="w-full px-4 py-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black/60 transtion-all duration-200"
						/>
					</div>

					<MainButton
						className="w-full flex justify-center items-center lg:w-1/2 bg-button rounded-full px-6 py-3 text-lg lg:text-xl"
						type="submit"
					>
						ارسال
					</MainButton>
				</form>

				<div className="w-1/2">
					<img
						className="hidden md:inline w-full h-[70vh] object-cover rounded-lg"
						src={revesionImg}
						alt=""
					/>
				</div>
			</div>
		</div>
	);
}
