import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";

import Revision from "./pages/Revision.jsx";
import Contact from "./pages/Contact.jsx";
import Dontaion from "./pages/Dontaion.jsx";
import { ThemeProvider } from "@material-tailwind/react";
import { DataProvider } from "./data/dataContext.jsx";
import DonationSection from "./components/DonationSection.jsx";
import PaymentPage from "./pages/Payment.jsx";
import Register from "./pages/Register.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/about", element: <About /> },
			{ path: "/revision", element: <Revision /> },
			{ path: "/contact", element: <Contact /> },
			{ path: "/donate", element: <Dontaion /> },
			{ path: "/register", element: <Register /> },
			{ path: "/donate/item", element: <DonationSection /> },
			{ path: "/payment", element: <PaymentPage /> },
		],
	},
]);
createRoot(document.getElementById("root")).render(
	<DataProvider>
		<ThemeProvider>
			<RouterProvider router={router} />
		</ThemeProvider>
	</DataProvider>
);
