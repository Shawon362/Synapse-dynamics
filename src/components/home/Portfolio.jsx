import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import shiningQualities from "/src/assets/images/shiningQualities.png";
import flexyfitAcademy from "/src/assets/images/flexyfitAcademy.png";
import whatsappChatbot from "/src/assets/images/chatbot.png";

const Portfolio = () => {
    const portfolioData = [
        {
            title: "Shining Qualities",
            description: "A Diamond Marketplace that processes 1M+ diamonds a day.",
            imageUrl: shiningQualities,
            link: "/portfolio/shining-qualities",
            gridSpan: "md:row-span-2" 
        },
        {
            title: "FlexyFit Academy",
            description: "Seamless transition from Legacy PHP to Laravel for a fitness platform.",
            imageUrl: flexyfitAcademy,
            link: "/portfolio/flexyfit-academy",
            gridSpan: ""
        },
        {
            title: "WhatsApp Chatbot with n8n",
            description: "Automated rewards, feedback, and loyalty for restaurant chains.",
            imageUrl: whatsappChatbot,
            link: "/portfolio/whatsapp-chatbot",
            gridSpan: ""
        },
    ];

    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="max-w-3xl mb-8 sm:mb-12">
                    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
                        Portfolio of Innovation
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-gray-600">
                        Discover how we've helped companies achieve their goals through our expertise.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {portfolioData.map((item, index) => (
                        <div 
                            key={index} 
                            className={`group relative block overflow-hidden rounded-xl shadow-lg min-h-[20rem] h-full ${item.gridSpan}`}
                        >
                            <img
                                src={item.imageUrl}
                                alt={item.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out"
                            />
                            
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-200 text-base sm:text-lg mb-4">
                                        {item.description}
                                    </p>
                                    <NavLink to={item.link}>
                                        <span className="group inline-flex items-center gap-2 font-semibold text-[#00b8db] hover:text-opacity-80 transition-colors">
                                            View Case Study
                                            <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                                        </span>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;