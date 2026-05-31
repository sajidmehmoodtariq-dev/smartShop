import React from "react";
import { FaStar, FaCartPlus } from "react-icons/fa6";

const ProductCard = ({ product }) => {
	return (
		<div className="group overflow-hidden rounded-[1.5rem] border border-black/5 bg-white/80 p-4 shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-gray-900/80">
			<div className="relative rounded-[1.25rem] bg-gradient-to-br from-gray-100 to-white p-4 dark:from-white/5 dark:to-white/0">
				<img
					src={product.image}
					alt={product.title}
					className="h-48 w-full object-contain transition-transform duration-500 group-hover:scale-105"
				/>
				<div className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-gray-700 shadow-sm shadow-black/5 dark:bg-gray-900/90 dark:text-gray-200">
					{product.category}
				</div>
			</div>

			<div className="mt-4 space-y-3">
				<div className="flex items-start justify-between gap-3">
					<div>
						<h3 className="text-lg font-bold text-gray-900 dark:text-white">
							{product.title}
						</h3>
						<p className="text-sm text-gray-500 dark:text-gray-400">{product.subtitle}</p>
					</div>
					<p className="text-lg font-bold text-primary">{product.price}</p>
				</div>

				<div className="flex items-center justify-between gap-3">
					<div className="flex items-center gap-1 text-amber-400">
						{[...Array(5)].map((_, index) => (
							<FaStar key={index} className="text-xs" />
						))}
					</div>
					<button className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5">
						<FaCartPlus className="text-sm" />
						Add to cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
