import React from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../../data/products";
import Button from "../Shared/Button";
import { FaChevronLeft, FaStar } from "react-icons/fa6";

const ProductPage = ({ handleOrderPopup = () => {} }) => {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="container py-16">
        <p className="text-center text-lg">Product not found.</p>
        <div className="mt-6 text-center">
          <Link to="/shop" className="text-primary font-semibold">
            Back to shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <div className="container py-12 sm:py-16">
        <div className="mb-6 flex items-center gap-4">
          <Link to="/shop" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary">
            <FaChevronLeft /> Back to shop
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[1.5rem] border border-black/5 bg-white/80 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-gray-900/80">
            <img src={product.image} alt={product.title} className="w-full object-contain" />
          </div>

          <div className="space-y-6">
            <div className="space-y-1">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{product.title}</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">{product.subtitle}</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-2xl font-bold text-primary">{product.price}</div>
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-sm" />
                ))}
              </div>
            </div>

            <p className="text-sm leading-7 text-gray-600 dark:text-gray-300">{product.longDescription}</p>

            <div className="flex items-center gap-3">
              <Button text="Add to cart" bgColor="bg-primary" textColor="text-white" handler={handleOrderPopup} />
              <button className="rounded-full border border-black/10 px-4 py-2 text-sm font-semibold dark:border-white/10">Add to wishlist</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
