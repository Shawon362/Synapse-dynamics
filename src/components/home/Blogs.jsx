import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import aiDevelopment from "/src/assets/images/ai-development.png";
import businessSolution from "/src/assets/images/businessSolution.png";
import healthCareTech from "/src/assets/images/healthcareTech.png";

const Blogs = () => {
    const blogData = [
        {
            title: "Custom ChatGPT for Business",
            category: "AI Development",
            date: "July 31, 2025",
            author: "Admin",
            excerpt: "Discover how tailor-made ChatGPT solutions can revolutionize your customer interactions, automate tasks, and drive business growth.",
            imageUrl: aiDevelopment,
            link: "/blog/custom-chatgpt-for-business"
        },
        {
            title: "Point of Sale System for Small Business",
            category: "Business Solutions",
            date: "July 28, 2025",
            author: "Admin",
            imageUrl: businessSolution,
            link: "/blog/pos-for-small-business"
        },
        {
            title: "How Smart Bed Management Optimizes Hospital Resources",
            category: "Healthcare Tech",
            date: "July 25, 2025",
            author: "Admin",
            imageUrl: healthCareTech,
            link: "/blog/hospital-bed-management"
        },
    ];
    const featuredPost = blogData[0];
    const otherPosts = blogData.slice(1);

    return (
        <section className="bg-gray-50 py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                        Latest Insights
                    </h2>
                    <NavLink to="/blog" className="group hidden sm:inline-flex items-center gap-2 font-semibold text-gray-700 hover:text-[#00b8db] transition-colors">
                        View All Articles
                        <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                    </NavLink>
                </div>

                {/* Featured Post */}
                <NavLink to={featuredPost.link} className="group block mb-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                        <div className="overflow-hidden rounded-lg">
                            <img src={featuredPost.imageUrl} alt={featuredPost.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        </div>
                        <div>
                            <span className="inline-block bg-cyan-100 text-cyan-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                                {featuredPost.category}
                            </span>
                            <h3 className="text-3xl font-bold text-gray-900 mb-3 group-hover:text-[#00b8db] transition-colors">
                                {featuredPost.title}
                            </h3>
                            <p className="text-gray-600 mb-4">{featuredPost.excerpt}</p>
                            <p className="text-sm text-gray-500">{featuredPost.date} by {featuredPost.author}</p>
                        </div>
                    </div>
                </NavLink>

                {/* Grid of Other Posts */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {otherPosts.map((post) => (
                        <NavLink to={post.link} key={post.title} className="group block bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                            <div className="overflow-hidden rounded-t-xl">
                                <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" />
                            </div>
                            <div className="p-6">
                                <span className="inline-block bg-cyan-100 text-cyan-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                                    {post.category}
                                </span>
                                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#00b8db] transition-colors">
                                    {post.title}
                                </h4>
                                <p className="text-sm text-gray-500">{post.date} by {post.author}</p>
                            </div>
                        </NavLink>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blogs;