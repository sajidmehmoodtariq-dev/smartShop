import React from "react";
import Navbar from "../Navbar/Navbar";
import Products from "../Products/Products";
import Footer from "../Footer/Footer";
import { products } from "../../data/products";

const ShopPage = ({ handleOrderPopup }) => {
	return (
		<div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
			<Navbar handleOrderPopup={handleOrderPopup} />
			<section className="container py-10 sm:py-14 lg:py-16">
				<div className="mb-8 max-w-3xl space-y-3 text-center sm:text-left">
					<p className="inline-flex items-center rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-primary dark:bg-white/5 sm:text-sm">
						Shop
					</p>
					<h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
						Browse the full product catalog.
					</h1>
					<p className="text-sm leading-7 text-gray-600 dark:text-gray-300 sm:text-base">
						All products are listed here in a clean grid so shoppers can scan the full range without distractions.
					</p>
				</div>
				<Products
					title="All products"
					subtitle="The complete catalog in one place."
					products={products}
					columnsClass="sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
					sectionClassName="py-0"
				/>
			</section>
			<Footer />
		</div>
	);
};

export default ShopPage;