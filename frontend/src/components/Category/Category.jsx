import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import watch from "../../assets/category/watch.png";
import earphone from "../../assets/category/earphone.png";
import gaming from "../../assets/category/gaming.png";
import speaker from "../../assets/category/speaker.png";
import vr from "../../assets/category/vr.png";
import macbook from "../../assets/category/macbook.png";

const categories = [
  {
    id: 1,
    name: "Wearables",
    description: "Minimal, connected, everyday-ready pieces for sharper routines.",
    image: watch,
    accent: "from-cyan-500/20 via-white/10 to-transparent",
    cardClass: "md:col-span-2 md:row-span-2",
    imageClass: "w-[72%] sm:w-[68%] max-h-[180px] sm:max-h-[210px]",
    imagePositionClass: "justify-center",
  },
  {
    id: 2,
    name: "Audio",
    description: "Premium sound for music, calls, and focused work sessions.",
    image: earphone,
    accent: "from-violet-500/20 via-white/10 to-transparent",
    cardClass: "md:col-span-1",
    imageClass: "w-[78%] sm:w-[72%] max-h-[120px] sm:max-h-[140px]",
    imagePositionClass: "justify-end pr-2 sm:pr-4 lg:pr-5",
  },
  {
    id: 3,
    name: "Gaming",
    description: "Fast, immersive gear tuned for long sessions and sharp response.",
    image: gaming,
    accent: "from-amber-500/20 via-white/10 to-transparent",
    cardClass: "md:col-span-1 md:row-span-2",
    imageClass: "w-[78%] sm:w-[74%] max-h-[180px] sm:max-h-[210px]",
    imagePositionClass: "justify-end pr-1 sm:pr-3 lg:pr-4",
  },
  {
    id: 4,
    name: "Speakers",
    description: "Room-filling audio with a refined, sculpted look.",
    image: speaker,
    accent: "from-emerald-500/20 via-white/10 to-transparent",
    cardClass: "md:col-span-1",
    imageClass: "w-[80%] sm:w-[72%] max-h-[118px] sm:max-h-[138px]",
    imagePositionClass: "justify-end pr-3 sm:pr-5 lg:pr-6",
  },
  {
    id: 5,
    name: "Immersive Tech",
    description: "Step into a deeper product experience with vivid visuals.",
    image: vr,
    accent: "from-sky-500/20 via-white/10 to-transparent",
    cardClass: "md:col-span-2",
    imageClass: "w-[68%] sm:w-[62%] max-h-[150px] sm:max-h-[176px]",
    imagePositionClass: "justify-end pr-4 sm:pr-6 lg:pr-10",
  },
  {
    id: 6,
    name: "Laptops",
    description: "Powerful, portable machines designed to keep up with everything.",
    image: macbook,
    accent: "from-rose-500/20 via-white/10 to-transparent",
    cardClass: "md:col-span-2",
    imageClass: "w-[70%] sm:w-[64%] max-h-[150px] sm:max-h-[176px]",
    imagePositionClass: "justify-end pr-4 sm:pr-6 lg:pr-10",
  },
];

const Category = () => {
  return (
    <section className="container overflow-hidden py-5 sm:py-6 lg:max-h-[calc(100vh-88px)] lg:pb-10 lg:pt-6">
      <div className="mb-5 flex flex-col gap-4 sm:mb-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl space-y-3 text-center sm:text-left">
          <div className="inline-flex items-center rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-primary shadow-sm shadow-black/5 dark:bg-white/5 sm:text-sm">
            Shop by category
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl lg:text-4xl">
            A bento-style category wall with stronger visual rhythm.
          </h2>
          <p className="max-w-xl text-sm leading-6 text-gray-600 dark:text-gray-300 sm:text-base">
            Explore the most important product groups in a layout that feels editorial, modern,
            and easy to scan on any screen.
          </p>
        </div>

        <a
          href="/shop"
          className="inline-flex w-fit items-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-2.5 text-sm font-semibold text-gray-700 shadow-sm shadow-black/5 transition-transform duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary dark:border-white/10 dark:bg-white/5 dark:text-gray-200"
        >
          Browse all products
          <FaArrowRight className="text-xs" />
        </a>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4 xl:auto-rows-[138px] 2xl:auto-rows-[148px]">
        {categories.map((category) => (
          <a
            key={category.id}
            href="/shop"
            className={`group relative overflow-hidden rounded-[1.6rem] border border-black/5 bg-white/75 p-4 shadow-[0_18px_60px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(15,23,42,0.14)] dark:border-white/10 dark:bg-gray-900/70 ${category.cardClass}`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${category.accent}`} />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.8),transparent_42%)] opacity-80 dark:opacity-40" />
            <div className="relative z-20 flex h-full min-h-[138px] flex-col justify-between gap-2.5 sm:min-h-[148px]">
              <div className="flex items-start justify-between gap-3">
                <div className="max-w-[13rem] space-y-1.5 pr-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500 dark:text-gray-400">
                    Category
                  </p>
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 transition-colors duration-300 group-hover:text-primary dark:text-white sm:text-2xl">
                    {category.name}
                  </h3>
                  <p className="text-sm leading-5 text-gray-600 dark:text-gray-300">
                    {category.description}
                  </p>
                </div>

                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-black/5 bg-white/90 text-gray-700 shadow-sm shadow-black/5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/10 dark:text-white">
                  <FaArrowRight className="text-sm" />
                </span>
              </div>

              <div className={`pointer-events-none absolute inset-x-0 bottom-0 flex items-end overflow-hidden pb-1 sm:pb-2 ${category.imagePositionClass}`}>
                <img
                  src={category.image}
                  alt={category.name}
                  className={`translate-y-3 object-contain object-center drop-shadow-[0_20px_35px_rgba(0,0,0,0.18)] transition-transform duration-500 group-hover:translate-y-1 group-hover:scale-[1.03] ${category.imageClass}`}
                />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Category;