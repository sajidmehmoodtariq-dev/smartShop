import React from "react";
import { FaTruckFast, FaShieldHeart, FaRotate, FaHeadset } from "react-icons/fa6";

const services = [
	{
		icon: FaTruckFast,
		title: "Free shipping",
		text: "Fast delivery on qualifying orders with transparent tracking.",
	},
	{
		icon: FaShieldHeart,
		title: "Secure checkout",
		text: "A clean, protected payment flow from cart to confirmation.",
	},
	{
		icon: FaRotate,
		title: "Easy returns",
		text: "Simple exchanges and returns when you change your mind.",
	},
	{
		icon: FaHeadset,
		title: "24/7 support",
		text: "Quick help from a support team that stays available.",
	},
];

const Services = () => {
	return (
		<section className="container py-10 sm:py-14">
			<div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
				{services.map((service) => {
					const Icon = service.icon;

					return (
						<div
							key={service.title}
							className="rounded-[1.5rem] border border-black/5 bg-white/80 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.07)] dark:border-white/10 dark:bg-gray-900/80"
						>
							<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
								<Icon className="text-xl" />
							</div>
							<h3 className="text-xl font-bold text-gray-900 dark:text-white">
								{service.title}
							</h3>
							<p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
								{service.text}
							</p>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Services;
