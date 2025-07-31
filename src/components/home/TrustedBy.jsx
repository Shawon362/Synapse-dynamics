const TrustedBy = () => {
    // 1. Define your sponsor logos in an array
    const sponsors = [
        { id: 1, name: 'Sponsor 1', logoUrl: '/src/assets/images/chatbits.svg' },
        { id: 2, name: 'Sponsor 2', logoUrl: '/src/assets/images/flexyfit-logo.svg' },
        { id: 3, name: 'Sponsor 3', logoUrl: '/src/assets/images/hirxpert.svg' },
        { id: 4, name: 'Sponsor 4', logoUrl: '/src/assets/images/shining-qualities.svg' },
        { id: 5, name: 'Sponsor 5', logoUrl: '/src/assets/images/webworks.svg' }
    ];

    // 2. Duplicate the sponsors array for a seamless loop effect
    const duplicatedSponsors = [...sponsors, ...sponsors];

    return (
        <section className="bg-gray-50 py-16 sm:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h3 className="text-2xl sm:text-3xl text-gray-600 font-bold">
                        Trusted by industry leaders worldwide
                    </h3>
                </div>

                {/* Slider Container with Fade Effect */}
                <div
                    className="relative w-full overflow-hidden"
                    // This creates the fade-out effect on the left and right edges
                    style={{
                        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
                    }}
                >
                    <div className="flex animate-slide">
                        {/* 3. Map over the duplicated array to render logos */}
                        {duplicatedSponsors.map((sponsor, index) => (
                            <div key={index} className="flex-shrink-0 w-48 flex justify-center items-center mx-6">
                                <img
                                    src={sponsor.logoUrl}
                                    alt={sponsor.name}
                                    className="max-h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;