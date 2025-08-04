import { BsCheckCircleFill } from 'react-icons/bs';
import CommonButton from '../ui/CommonButton'; // Make sure to import CommonButton
import { usePaddle } from '../../hooks/usePaddle';

const ProductCard = ({ product, index }) => {
  const { openCheckout } = usePaddle(); // 👈 Use the hook

  // Handle the button click
  const handleCheckout = () => {
    openCheckout(product.priceId);
  };
  return(
    <div 
    className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 flex flex-col animate-fadeInUp"
    style={{ animationDelay: `${index * 150}ms` }}
  >
    <h3 className="text-2xl font-bold text-gray-800">{product.name}</h3>
    <p className="mt-4 text-gray-600 flex-grow">{product.description}</p>
    
    <div className="my-8 text-center">
      {/* Updated price color to match your new branding */}
      <span className="text-5xl font-extrabold text-[#00b8db]">${product.price}</span>
      <span className="text-lg font-medium text-gray-500">/{product.term}</span>
    </div>

    <ul className="space-y-4 mb-8">
      {product.features.map((feature, idx) => (
        <li key={idx} className="flex items-start">
          {/* Updated icon color */}
          <BsCheckCircleFill className="text-[#00b8db] w-5 h-5 mr-3 flex-shrink-0" />
          <span className="text-gray-700">{feature}</span>
        </li>
      ))}
    </ul>

    <div className="mt-auto">
        {/* Replaced standard button with your CommonButton component */}
        <CommonButton variant="primary" className="w-full" onClick={handleCheckout}>
            Get Started Now
        </CommonButton>
    </div>
  </div>
  )
};

const ProductShowcase = ({ title, subtitle, products }) => {
  return (
    // Updated padding and background to match TopRatedCompany section
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Updated heading styles */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">{title}</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            // Pass index for animation delay
            <ProductCard key={product.name} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;