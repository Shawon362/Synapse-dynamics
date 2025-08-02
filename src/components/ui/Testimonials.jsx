import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

// Import an icon for the quotes
import { FaQuoteRight } from 'react-icons/fa';

const Testimonials = ({ title, subtitle, testimonials }) => {
    return (
        <section className="bg-gray-50 py-16 lg:py-24">
            <div className="container">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">{title}</h2>
                    <p className="mt-4 text-base sm:text-lg text-gray-600">{subtitle}</p>
                </div>

                {/* Testimonials Slider */}
               <div className="testimonial-slider">
                   <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    // Responsive breakpoints
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="pb-4"
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white p-8 rounded-xl shadow-md h-full flex flex-col pb-10">
                                <FaQuoteRight className="text-4xl text-[#00b8db] mb-4" />
                                <p className="text-gray-600 flex-grow mb-6">"{testimonial.text}"</p>
                                <div className="flex items-center mt-auto">
                                    <img src={testimonial.avatarUrl} alt={testimonial.authorName} className="w-12 h-12 rounded-full object-cover mr-4" />
                                    <div>
                                        <p className="font-semibold text-gray-900">{testimonial.authorName}</p>
                                        <p className="text-sm text-gray-500">{testimonial.authorTitle}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
               </div>
            </div>
        </section>
    );
};

export default Testimonials;