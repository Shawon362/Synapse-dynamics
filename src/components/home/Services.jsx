// Importing icons from the react-icons library
import { LuBrainCircuit } from "react-icons/lu";
import { GoWorkflow } from "react-icons/go";
import { RiRobot2Line } from "react-icons/ri";
import { BsChatDots } from "react-icons/bs";
import { FaLaravel } from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";

const Services = () => {
    const servicesData = [
        {
            icon: <LuBrainCircuit size={32} />,
            title: "AI Automation",
            description: "Transform your business with our AI Automation Services. Leverage cutting-edge technology to streamline operations and enhance productivity."
        },
        {
            icon: <GoWorkflow size={32} />,
            title: "n8n Workflow",
            description: "Streamline your processes with our Workflow Automation Services. Boost efficiency and productivity with our tailored automation solutions."
        },
        {
            icon: <RiRobot2Line size={32} />,
            title: "AI Agent Development",
            description: "Build smarter AI agents to transform experiences and operations with our expertise in automation and conversational AI."
        },
        {
            icon: <BsChatDots size={32} />,
            title: "ChatBot Development",
            description: "Tailor-Made ChatBot Solutions to meet your unique needs. We bring Conversational UIs to your products with great user experience."
        },
        {
            icon: <FaLaravel size={32} />,
            title: "Voice AI Development",
            description: "Robust and scalable web applications with Voice AI. Elevate your web presence with our custom Voice AI solutions tailored for performance and growth."
        },
        {
            icon: <IoCodeSlash size={32} />,
            title: "Generative AI",
            description: "Jump start your projects with our Pre-Built Scripts. Save time and resources with our high-quality, customizable scripts, available on Envato."
        },
    ];

    return (
        <section className="bg-gray-50 py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
                        Services We Offer
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                        Discover our comprehensive range of solutions designed to elevate your business.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service, index) => (
                        <div 
                            key={index} 
                            className="bg-white p-8 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out"
                        >
                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-cyan-100 mb-6">
                                <div className="text-[#00b8db]">
                                    {service.icon}
                                </div>
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;