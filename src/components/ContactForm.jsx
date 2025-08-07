import React from "react";
import MainButton from "./Button";
const ContactForm = () => {
	return (
		<div className="lg:px-28">
			<div className="">
				<h1 className="text-lg md:text-xl lg:text-5xl font-bold mb-4">تواصل معنا</h1>
				<p className="text-base md:text-lg lg:text-xl text-gray-700">
					سوف يتم الرد عليك بأسرع وقت ممكن عبر الايميل الخاص بك
				</p>
			</div>
			<div className="flex flex-col-reverse gap-y-4 gap-x-5 md:flex-row mt-20">
				<form className="md:w-2/3 lg:w-1/2">
					<div className="mb-4 text-start">
						<label className="block mb-2 text-[#97280e] font-medium" htmlFor="name">
							الاسم
						</label>
						<input
							id="name"
							type="text"
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
							placeholder="اكتب مراجعتك"
							rows={6}
							required
							className="w-full px-4 py-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black/60 transtion-all duration-200"
						/>
					</div>

					<MainButton
						className="w-full flex justify-center items-center lg:w-1/2 bg-main-color rounded-full px-6 py-3 text-lg lg:text-xl"
						type="submit"
					>
						ارسال
					</MainButton>
				</form>

				<div className="w-full md:w-1/2">
					<div className="pb-5 ">
						<iframe
							title="Google Map"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.9520831951054!2d58.2258622!3d23.641887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8dfd389a330f0f%3A0x5171ffff875cb636!2z2YXYsdmD2LIg2KfZhNiz2YrYqCDYp9mE2YLYsdii2YbZiiAtINin2YTYrNmF2LnZitipINin2YTYudmF2KfZhtmK2Kkg2YTZhNi52YbYp9mK2Kkg2KjYp9mE2YLYsdii2YYg2KfZhNmD2LHZitmF!5e0!3m2!1sar!2s!4v1754217694057!5m2!1sar!2s"
							className="w-full h-[70vh] rounded-lg border-0"
							style={{ border: 0 }}
							allowFullScreen=""
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactForm;
