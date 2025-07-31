import { NavLink } from 'react-router-dom';
import CommonButton from '../ui/CommonButton';


const CTA = () => {
    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main CTA Card */}
                <div className="relative bg-slate-900 rounded-2xl shadow-xl overflow-hidden">
                    {/* Background Glow Effects */}
                    <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2">
                        <div className="w-[400px] h-[400px] bg-[#00b8db] rounded-full blur-3xl opacity-20"></div>
                    </div>
                    <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2">
                         <div className="w-[400px] h-[400px] bg-blue-600 rounded-full blur-3xl opacity-20"></div>
                    </div>

                    <div className="relative z-10 text-center px-6 py-16 md:py-20">
                        {/* Title */}
                        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white">
                            Ready to Transform Your Business?
                        </h2>

                        {/* Subtitle */}
                        <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
                            Let's build something amazing together. Reach out to our team today and discover how our expertise can power your next big innovation.
                        </p>

                        {/* Button */}
                        <div className="mt-8">
                            <NavLink to="/contact">
                                <CommonButton variant="primary">
                                    Contact Us
                                </CommonButton>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;