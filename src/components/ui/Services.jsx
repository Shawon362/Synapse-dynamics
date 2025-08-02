const Services = ({ title, subtitle, services }) => {
    return (
        <section className="bg-gray-50 py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header - Now uses props */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
                        {title}
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                </div>

                {/* Services Grid - Now maps over the 'services' prop */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
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