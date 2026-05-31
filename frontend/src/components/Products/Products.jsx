import React from "react";
import Heading from "../Shared/Heading";
import ProductCard from "./ProductCard";

const Products = ({
	title = "Popular products",
	subtitle = "A curated mix of standout items with a clean, premium presentation.",
	products = [],
	columnsClass = "sm:grid-cols-2 xl:grid-cols-3",
	sectionClassName = "",
}) => {
	return (
		<section className={`container py-10 sm:py-14 lg:py-16 ${sectionClassName}`}>
			<Heading
				title={title}
				subtitle={subtitle}
			/>
			<div className={`grid gap-5 ${columnsClass}`}>
				{products.map((product) => (
					<ProductCard key={product.title} product={product} />
				))}
			</div>
		</section>
	);
};

export default Products;
