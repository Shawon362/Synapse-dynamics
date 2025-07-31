import { NavLink } from 'react-router-dom';
import { BsCalendarCheck, BsChatQuote } from 'react-icons/bs';
import { IoRestaurantOutline } from "react-icons/io5";
import { FiArrowRight } from 'react-icons/fi';
import eventImage from "/src/assets/images/eventImage.png";
import restaurantReservation from "/src/assets/images/restaurantImage.png";
import appointmentBooking from "/src/assets/images/appointmentImage.png";

const VoiceAgents = () => {
    const agentsData = [
        {
            icon: <BsCalendarCheck />,
            title: "Event Attendee Confirmation",
            description: "Voice AI confirms attendance, collects preferences, and logs details by calling event guests automatically.",
            imageUrl: eventImage,
            link: "/agents/event-confirmation"
        },
        {
            icon: <IoRestaurantOutline />,
            title: "Restaurant Table Reservation",
            description: "Voice AI handles table bookings by answering calls, checking availability, and confirming reservations instantly.",
            imageUrl: restaurantReservation,
            link: "/agents/restaurant-reservation"
        },
        {
            icon: <BsChatQuote />,
            title: "Personal Appointment Booking",
            description: "Automate appointment scheduling with Voice AI that books, reschedules, and manages slots over phone calls.",
            imageUrl: appointmentBooking,
            link: "/agents/appointment-booking"
        }
    ];

    return (
        <section className="py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
                        Ready to use Voice AI Agents
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-gray-600">
                        Explore our ready-to-use Voice AI Agents that can be deployed immediately for various business needs.
                    </p>
                </div>

                {/* Alternating Layout Container */}
                <div className="space-y-20">
                    {agentsData.map((agent, index) => (
                        <div key={index} className="grid lg:grid-cols-2 gap-12 items-center">
                            
                            {/* Image Column */}
                            <div className={`animate-fadeInUp ${index % 2 !== 0 ? 'lg:order-last' : ''}`}>
                                <img 
                                    src={agent.imageUrl} 
                                    alt={agent.title} 
                                    className="rounded-xl shadow-xl w-full h-full object-cover aspect-video" 
                                />
                            </div>

                            {/* Text Column */}
                            <div className="animate-fadeInUp">
                                <div className="flex flex-col items-start sm:items-center gap-3 mb-4">
                                    <span className="text-3xl text-[#00b8db]">{agent.icon}</span>
                                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                                        {agent.title}
                                    </h3>
                                </div>
                                <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                                    {agent.description}
                                </p>
                                <NavLink 
                                    to={agent.link}
                                    className="group inline-flex items-center gap-2 font-semibold text-[#00b8db] hover:text-opacity-80 transition-colors"
                                >
                                    View Voice Agent
                                    <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                                </NavLink>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VoiceAgents;