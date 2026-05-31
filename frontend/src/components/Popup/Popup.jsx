import React from "react";
import { FaXmark } from "react-icons/fa6";

const Popup = ({ orderPopup, handleOrderPopup }) => {
	if (!orderPopup) return null;

	return (
		<div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
			<div className="relative w-full max-w-md rounded-[1.6rem] bg-white p-6 shadow-2xl dark:bg-gray-900 dark:text-white">
				<button
					type="button"
					onClick={handleOrderPopup}
					className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition hover:bg-primary hover:text-white dark:bg-white/10 dark:text-white"
				>
					<FaXmark />
				</button>

				<p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
					Order now
				</p>
				<h2 className="mt-3 text-2xl font-bold tracking-tight">
					Ready to move this item to checkout?
				</h2>
				<p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
					This popup is wired up so you can expand it later into a full order form, quick view,
					or cart confirmation flow.
				</p>

				<div className="mt-6 flex gap-3">
					<button
						type="button"
						onClick={handleOrderPopup}
						className="flex-1 rounded-full border border-black/10 px-4 py-3 text-sm font-semibold text-gray-700 transition hover:border-primary hover:text-primary dark:border-white/10 dark:text-white"
					>
						Cancel
					</button>
					<button className="flex-1 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-white">
						Confirm
					</button>
				</div>
			</div>
		</div>
	);
};

export default Popup;
