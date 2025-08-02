import React from 'react';

const Technologies = ({ title, subtitle, categories }) => {
    const allTechnologies = categories.flatMap(cat => cat.technologies);

    return (
        <section className="py-16 lg:py-24">
            <div className="container">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">{title}</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
                </div>

                {/* Responsive Grid of Technology Cards */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {allTechnologies.map((tech) => (
                        <div 
                            key={tech.name} 
                            className="group bg-white p-6 rounded-xl shadow-md border border-gray-200 transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-[#00b8db]/20 hover:-translate-y-2"
                        >
                            <div className="flex flex-col items-center justify-center text-center h-full">
                                <img 
                                    src={tech.logoUrl} 
                                    alt={tech.name} 
                                    className="h-16 w-auto object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
                                />
                                <p 
                                    className="mt-4 font-semibold text-gray-700 transition-colors duration-300 group-hover:text-[#00b8db]"
                                >
                                    {tech.name}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Technologies;