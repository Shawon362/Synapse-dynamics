import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

// Import icons
import { FaGoogleDrive, FaRegFileAlt } from 'react-icons/fa';
import { SiGooglesheets, SiN8N } from 'react-icons/si';
import { FiArrowRight } from 'react-icons/fi';

const InteractiveProcess = () => {
    // Data for each slide
    const processData = [
        {
            tag: 'IT Ops',
            title: 'Automate n8n Workflow Backups',
            description: 'Automate n8n workflow backups, save to Google Drive, and store in a structured format for easy access, all without manual intervention.',
            imageUrl: 'src/assets/images/itOps.png',
            tools: [<SiN8N key="n8n"/>, <FaGoogleDrive key="drive"/>, <SiGooglesheets key="sheets"/>]
        },
        {
            tag: 'Marketing',
            title: 'Sync Leads from Facebook to CRM',
            description: 'Never miss a lead. Automatically capture new leads from Facebook Lead Ads and instantly create new contacts in your CRM.',
            imageUrl: 'src/assets/images/marketing.png',
            tools: [<SiN8N key="n8n"/>, <FaRegFileAlt key="fb"/>, <FaGoogleDrive key="crm"/>]
        },
        {
            tag: 'E-Commerce',
            title: 'Generate Invoices for New Orders',
            description: 'Streamline your sales process by automatically generating and sending a PDF invoice for every new order in your Shopify store.',
            imageUrl: 'src/assets/images/ecommerce.png',
            tools: [<SiN8N key="n8n"/>, <FaRegFileAlt key="shopify"/>, <FaRegFileAlt key="invoice"/>]
        },
    ];
    
    // This state keeps track of the current active slide index
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="bg-gray-50 py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                        Your Next Automation Starts Here
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        Check out real examples of how businesses like yours are using AI to work faster with our curated n8n workflows.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Left Column: Swiper Slider */}
                    <div className="w-full">
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1}
                            loop={true}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            pagination={{ clickable: true }}
                            // This is the key part: it updates the state when the slide changes
                            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} 
                            className="rounded-xl shadow-xl"
                        >
                            {processData.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <img src={item.imageUrl} alt={item.title} className="w-full h-auto object-cover aspect-[16/10]" />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* Right Column: Dynamic Content */}
                    <div className="relative">
                        {/* Adding a key makes the content re-animate on change */}
                        <div key={activeIndex} className="animate-fadeInUp">
                            <span className="inline-block bg-cyan-100 text-cyan-700 text-sm font-semibold px-4 py-1 rounded-full mb-4">
                                {processData[activeIndex].tag}
                            </span>
                            <h3 className="text-3xl font-bold text-gray-900 mb-3">
                                {processData[activeIndex].title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                {processData[activeIndex].description}
                            </p>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4 text-2xl text-gray-400">
                                    {processData[activeIndex].tools}
                                </div>
                                <a href="#" className="group flex items-center gap-2 font-semibold text-[#00b8db] hover:text-opacity-80 transition-colors">
                                    Checkout Template
                                    <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
                 <div className="text-center mt-16">
                     <a href="#" className="group inline-flex items-center gap-2 font-semibold text-gray-700 hover:text-[#00b8db] transition-colors">
                        Browse All Templates
                        <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                     </a>
                </div>
            </div>
        </section>
    );
};

export default InteractiveProcess;