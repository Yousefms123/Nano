import { useSearchParams } from "react-router-dom";
import MainButton from "../components/Button";

const Success = () => {
	const [params] = useSearchParams();
	const title = params.get("title");
	const amount = params.get("amount");

	return (
		<div className="my-32 text-center font-Tajawal flex flex-col justify-self-center gap-y-5">
			<h1 className="text-2xl font-bold text-green-600 mb-4">✅ تم الدفع بنجاح</h1>
			<p className="text-lg">
				شكراً لتبرعك لمشروع: <span className="font-semibold">{title}</span>
			</p>
			<p className="text-lg">
				المبلغ المدفوع: <span className="text-main-color">{amount} $</span>
			</p>
			<MainButton to={"/"} className="w-50 bg-main-color text-sm md:text-base text-white">
				العودة للرئيسية
			</MainButton>

		</div>
	);
};

export default Success;
