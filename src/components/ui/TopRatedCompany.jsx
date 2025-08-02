import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { NavLink } from 'react-router-dom';
import CommonButton from '../ui/CommonButton';

const TopRatedCompany = ({ title, description, stats }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section className="bg-gray-50 py-16 lg:py-24">
            <div className="container">
                {/* Main 2-column grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    
                    {/* Left Column: Title & Description */}
                    <div className="animate-fadeInUp">
                        <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            {title}
                        </h2>
                        <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed">
                            {description}
                        </p>
                        <div className="mt-8">
                            <NavLink to="/about-us">
                                <CommonButton variant="secondary">
                                    Learn More About Us
                                </CommonButton>
                            </NavLink>
                        </div>
                    </div>

                    {/* Right Column: Stats Grid */}
                    <div ref={ref} className="grid grid-cols-2 gap-6 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
                        {stats.map((stat, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl text-center shadow-sm">
                                <h3 className="text-4xl lg:text-5xl font-bold text-[#00b8db]">
                                    {inView && <CountUp end={stat.value} duration={3} />}
                                    {stat.suffix}
                                </h3>
                                <p className="mt-2 text-base text-gray-600">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TopRatedCompany;