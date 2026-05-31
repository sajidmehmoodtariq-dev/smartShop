import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { FaCaretDown, FaShoppingCart } from "react-icons/fa";
import DarkMode from "./DarkMode";

const MenuLinks = [
    {
        id: 1,
        name: 'Home',
        link: '/'
    },
    {
        id: 2,
        name: 'Shop',
        link: '/shop'
    },
    {
        id: 3,
        name: 'About',
        link: '/about'
    },
    {
        id: 4,
        name: 'Blog',
        link: '/blog'
    },
    {
        id: 5,
        name: 'Contact',
        link: '/contact'
    }
]

const DropdownLinks = [
    {
        id: 1,
        name: 'Trending',
        link: '/trending'
    },
    {
        id: 2,
        name: 'Best Sellers',
        link: '/orders'
    },
    {
        id: 3,
        name: 'Top Rated',
        link: '/top-rated'
    }
]



const Navbar = () => {
    const [isQuickLinksOpen, setIsQuickLinksOpen] = useState(false);

    return (
        <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-[999] isolate'>
            <div className="py-4">
                <div className='container flex justify-between items-center'>
                    {/* logo and links section */}
                    <div className='flex items-center gap-4' >
                        <a
                            href="/"
                            className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'
                        >
                            SmartShop
                        </a>
                        {/* Menu Items */}
                        <div className='hidden lg:block'>
                            <ul className='flex items-center gap-4 ' >
                                {
                                    MenuLinks.map((data, index) => (
                                        <li key={index} className=''>
                                            <a
                                                href={data.link}
                                                className='inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200'
                                            >
                                                {data.name}</a>
                                        </li>
                                    ))}
                                    {/* dropdown */}
                                    <li className="relative cursor-pointer py-2">
                                        <button
                                            type="button"
                                            onClick={() => setIsQuickLinksOpen((prev) => !prev)}
                                            className="flex items-center gap-[2px] font-semibold text-gray-500 hover:text-black dark:hover:text-white py-2 duration-200"
                                            aria-expanded={isQuickLinksOpen}
                                            aria-haspopup="menu"
                                        >
                                            Quick Links
                                            <span>
                                                <FaCaretDown className={`${isQuickLinksOpen ? 'rotate-180' : ''} duration-300`} />
                                            </span>
                                        </button>
                                        <ul className={`absolute left-0 top-full z-[1000] w-[200px] space-y-1 rounded-md bg-white dark:bg-gray-800 p-2 shadow-md transition-all duration-200 ${isQuickLinksOpen ? 'visible opacity-100 pointer-events-auto' : 'invisible opacity-0 pointer-events-none'}`}>
                                                {
                                                    DropdownLinks.map((data) => (
                                                        <li key={data.id}>
                                                            <a href={data.link} className='block rounded px-2 py-1 text-gray-500 hover:bg-primary/20 hover:text-black dark:text-gray-300 dark:hover:text-white duration-200'>
                                                                {data.name}
                                                            </a>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                    </li>
                                
                            </ul>
                        </div>
                    </div>
                    {/* Navbar right section */}

                    <div className='flex items-center justify-between gap-4' >
                        {/* search bar */}
                        <div className='relative group hidden sm:block'>
                            <input type="text" placeholder="Search..." className='search-bar' />
                            <IoIosSearch className='text-xl group-hover:text-primary dark:text-gray-400 text-gray-600 absolute right-3 top-1/2 -translate-y-1/2 duration-200' />
                        </div>
                        {/* Order button  */}
                        <button className='relative p-3'>
                            <FaShoppingCart className='text-xl text-gray-600 dark:text-gray-400' />
                            <div className='w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs' >
                                4
                            </div>
                        </button>
                        
                        {/* dark Mode section */}
                        <DarkMode />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar