import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { FaMedal, FaTools, FaMicrochip, FaUsers } from 'react-icons/fa';

const WhyChooseUs = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const stats = [
        { value: 250, label: 'Successful Projects Delivered', suffix: '+' },
        { value: 120, label: 'Clients Served', suffix: '+' },
        { value: 10, label: 'Years of Industry Experience', suffix: '+' },
        { value: 4.9, label: 'Average Client Rating', suffix: '' },
        { value: 40, label: 'Expert Professionals', suffix: '+' },
        { value: 15, label: 'Countries Served', suffix: '+' },
    ];

    const features = [
        {
            icon: <FaMedal />,
            title: 'Proven Expertise',
            description: 'We are one of the top open-source contributors, with over 15+ open-source packages and 5 million+ downloads.',
        },
        {
            icon: <FaTools />,
            title: 'Tailored Solutions',
            description: 'Custom Software, Not Cookie-Cutter. We craft solutions that perfectly align with your business goals, not generic templates.',
        },
        {
            icon: <FaMicrochip />,
            title: 'Cutting-Edge Technology',
            description: 'Leaders in innovation. We stay ahead of the curve, utilizing the latest technologies like AI, Laravel, and MERN.',
        },
        {
            icon: <FaUsers />,
            title: 'Client-Centric Approach',
            description: 'Your Success is Our Priority. We\'re committed to open communication, transparency, and exceeding your expectations.',
        },
    ];

    return (
        <section className="bg-gray-50 py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
                        Why Choose Us?
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                        Your Partner for Innovation and Growth in SaaS Software Development.
                    </p>
                </div>

                {/* Animated Stats Grid */}
                <div ref={ref} className="mt-8 sm:mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                            <h3 className="text-4xl font-bold text-[#00b8db]">
                                {inView && <CountUp end={stat.value} duration={3} decimals={stat.value % 1 !== 0 ? 1 : 0} />}
                                {stat.suffix}
                            </h3>
                            <p className="mt-2 text-sm text-gray-600">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Features Grid */}
                <div className="mt-10 sm:mt-20 grid md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-4">
                            <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-cyan-100 text-[#00b8db] text-2xl">
                                {feature.icon}
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold text-gray-900">{feature.title}</h4>
                                <p className="mt-1 text-gray-600 text-base">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;