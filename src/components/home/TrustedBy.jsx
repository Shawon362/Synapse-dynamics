
import sponsorOne from "/src/assets/images/chatbits.svg";
import sponsorTwo from "/src/assets/images/flexyfit-logo.svg";
import sponsorThree from "/src/assets/images/hirxpert.svg";
import sponsorFour from "/src/assets/images/shining-qualities.svg"
import sponsorFive from "/src/assets/images/webworks.svg";

const TrustedBy = () => {
    const sponsors = [
        { id: 1, name: 'Sponsor 1', logoUrl: sponsorOne },
        { id: 2, name: 'Sponsor 2', logoUrl: sponsorTwo },
        { id: 3, name: 'Sponsor 3', logoUrl: sponsorThree },
        { id: 4, name: 'Sponsor 4', logoUrl: sponsorFour },
        { id: 5, name: 'Sponsor 5', logoUrl: sponsorFive }
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