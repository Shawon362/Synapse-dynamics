import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiCompass } from 'react-icons/fi';
import CommonButton from './CommonButton';

const NotFoundPage = () => {
  return (
    <div className="relative flex items-center justify-center text-center min-h-full bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8"> 
      {/* Background decorative text */}
      <h1 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] sm:text-[20rem] font-black text-gray-100/80 z-0"
        aria-hidden="true"
      >
        404
      </h1>

      <div className="relative z-10">
        <FiCompass className="mx-auto h-20 w-20 text-[#00b8db]" />
        <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Oops! Page Not Found
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="mt-10">
          <NavLink to="/">
            <CommonButton variant="primary">
              Return to Homepage
            </CommonButton>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;