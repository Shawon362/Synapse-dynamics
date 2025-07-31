import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

// Import icons
import { FaGoogleDrive, FaRegFileAlt, FaFacebook, FaShopify } from 'react-icons/fa';
import { SiGooglesheets, SiN8N } from 'react-icons/si';
import { FiArrowRight } from 'react-icons/fi';
// Import Images
import itOps from "/src/assets/images/itOps.png";
import marketing from "/src/assets/images/marketing.png";
import eCommerce from "/src/assets/images/ecommerce.png";
import { Link } from 'react-router-dom';

const InteractiveProcess = () => {
    // Data for each slide
    const processData = [
        {
            tag: 'IT Ops',
            title: 'Automate n8n Workflow Backups',
            description: 'Automate n8n workflow backups, save to Google Drive, and store in a structured format for easy access, all without manual intervention.',
            imageUrl: itOps,
            tools: [<SiN8N key="n8n" size={24}/>, <FaGoogleDrive key="drive" size={24}/>, <SiGooglesheets key="sheets" size={24}/>]
        },
        {
            tag: 'Marketing',
            title: 'Sync Leads from Facebook to CRM',
            description: 'Never miss a lead. Automatically capture new leads from Facebook Lead Ads and instantly create new contacts in your CRM.',
            imageUrl: marketing,
            tools: [<SiN8N key="n8n" size={24}/>, <FaFacebook key="fb" size={24}/>, <FaGoogleDrive key="crm" size={24}/>]
        },
        {
            tag: 'E-Commerce',
            title: 'Generate Invoices for New Orders',
            description: 'Streamline your sales process by automatically generating and sending a PDF invoice for every new order in your Shopify store.',
            imageUrl: eCommerce,
            tools: [<SiN8N key="n8n" size={24}/>, <FaShopify key="shopify" size={24}/>, <FaRegFileAlt key="invoice" size={24}/>]
        },
    ];
    
    // This state keeps track of the current active slide index
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="py-8 sm:py-12 lg:py-16 xl:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-8 sm:mb-10 lg:mb-12">
                    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
                        Your Next Automation Starts Here
                    </h2>
                    <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
                        Check out real examples of how businesses like yours are using AI to work faster with our curated n8n workflows.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                    
                    {/* Left Column: Swiper Slider */}
                    <div className="w-full order-2 lg:order-1">
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            spaceBetween={20}
                            slidesPerView={1}
                            loop={true}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}
                            pagination={{ 
                                clickable: true,
                                dynamicBullets: true,
                            }}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 1,
                                    spaceBetween: 30,
                                },
                                1024: {
                                    slidesPerView: 1,
                                    spaceBetween: 30,
                                },
                            }}
                            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} 
                            className="rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl overflow-hidden"
                        >
                            {processData.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="relative w-full">
                                        <img 
                                            src={item.imageUrl} 
                                            alt={item.title} 
                                            className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* Right Column: Dynamic Content */}
                    <div className="relative order-1 lg:order-2">
                        {/* Adding a key makes the content re-animate on change */}
                        <div key={activeIndex} className="animate-fadeInUp">
                            <span className="inline-block bg-cyan-100 text-cyan-700 text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1 rounded-full mb-3 sm:mb-4">
                                {processData[activeIndex].tag}
                            </span>
                            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">
                                {processData[activeIndex].title}
                            </h3>
                            <p className="text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                                {processData[activeIndex].description}
                            </p>
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                <div className="flex items-center gap-3 sm:gap-4 text-gray-400">
                                    {processData[activeIndex].tools}
                                </div>
                                <Link 
                                    to="#" 
                                    className="group flex items-center gap-2 font-semibold text-[#00b8db] hover:text-opacity-80 transition-colors text-sm sm:text-base w-fit"
                                >
                                    Checkout Template
                                    <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
                
                {/* Bottom CTA */}
                <div className="text-center mt-8 sm:mt-16">
                    <Link
                        to="#" 
                        className="group inline-flex items-center gap-2 font-semibold text-gray-700 hover:text-[#00b8db] transition-colors text-sm sm:text-base"
                    >
                        Browse All Templates
                        <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default InteractiveProcess;