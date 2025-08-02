const Benefits = ({ title, subtitle, imageUrl, benefits }) => {
    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="container">
                
                {/* Section Header remains the same */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
                        {title}
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    
                    {/* Left Column: Image remains the same */}
                    <div className="animate-fadeInUp">
                        <img 
                            src={imageUrl}
                            alt={title}
                            className="rounded-xl shadow-xl w-full h-full object-cover"
                        />
                    </div>

                    {/* Right Column: NEW Timeline-Style Benefits List */}
                    <div className="animate-fadeInUp" style={{ animationDelay: '200ms' }}>
                        <div className="relative">
                            {/* Decorative vertical line */}
                            <div className="absolute left-4 top-4 h-[calc(100%-5rem)] w-0.5 bg-gray-200" aria-hidden="true"></div>

                            <div className="space-y-12">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="relative pl-12">
                                        <div className="absolute left-0 top-0">
                                            <span className="flex items-center justify-center h-8 w-8 rounded-full bg-[#00b8db] text-white">
                                                {benefit.icon}
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-semibold text-gray-900">{benefit.title}</h4>
                                            <p className="mt-2 text-gray-600 leading-relaxed">{benefit.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;