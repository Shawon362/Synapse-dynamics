import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import CommonButton from './CommonButton';

const ServiceHero = ({ title, subtitle, features, imageUrl }) => {
  return (
    <section className="container bg-white py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="animate-fadeInUp">
            <div className="h-1.5 w-20 bg-[#00b8db] mb-4 rounded"></div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {title}
            </h2>
            <p className="mt-6 text-base sm:text-lg text-gray-600 max-w-xl">
              {subtitle}
            </p>
            
            {/* Feature Tags */}
            <div className="mt-8 flex flex-wrap gap-3">
              {features.map((feature, index) => (
                <span key={index} className="inline-block bg-cyan-100 text-cyan-800 text-sm font-medium px-4 py-2 rounded-full">
                  {feature}
                </span>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-10">
              <NavLink to="/contact">
                <CommonButton variant="primary" className='flex items-center'>
                  Get a Free Consultation
                  <FiArrowRight className="ml-2" />
                </CommonButton>
              </NavLink>
            </div>
          </div>

          {/* Right Column: Visual Content */}
          <div className="relative flex items-center justify-center overflow-hidden animate-fadeInUp" style={{ animationDelay: '200ms' }}>
            {/* Decorative Background Shape */}
            <div className="absolute -top-8 -right-8 w-72 h-72 bg-gray-100 rounded-full blur-xl opacity-60"></div>
            <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-cyan-100 rounded-full blur-xl opacity-50"></div>
            
            {/* Main Image */}
            <div className="relative w-full h-full">
               <img 
                src={imageUrl} 
                alt={title} 
                className="relative w-full rounded-2xl shadow-2xl object-cover aspect-auto sm:aspect-[4/3]"
               />
            </div>
          </div>
        </div>
    </section>
  );
};

export default ServiceHero;