import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';

// Import icons
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import CommonButton from '../components/ui/CommonButton';

// Reusable component for a floating label input field
const FloatingLabelInput = ({ id, label, register, errors, ...props }) => (
    <div className="relative">
        <input
            id={id}
            placeholder=" "
            {...register(id, props.validation)}
            {...props}
            className="block w-full px-0 pt-6 pb-2 text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#00b8db] peer"
        />
        <label
            htmlFor={id}
            className="absolute text-md text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
        >
            {label}
        </label>
        {errors[id] && <p className="text-red-500 text-xs mt-1">{errors[id].message}</p>}
    </div>
);

// Reusable component for a floating label select field
const FloatingLabelSelect = ({ id, label, register, errors, children, ...props }) => (
     <div className="relative">
        <select
            id={id}
            {...register(id)}
            {...props}
            className="block w-full px-0 pt-6 pb-2 text-md text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#00b8db]"
        >
            {children}
        </select>
         <label
            htmlFor={id}
            className="absolute text-md text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-0"
        >
            {label}
        </label>
    </div>
);

const Contact = () => {
    const { register, handleSubmit, control, formState: { errors, isSubmitting }, reset } = useForm();
    const [submissionStatus, setSubmissionStatus] = useState(null);

    const onSubmit = (data) => {
        console.log("Form Data:", data);
        return new Promise(resolve => {
            setTimeout(() => {
                setSubmissionStatus('success');
                reset();
                resolve();
            }, 2000);
        });
    };

    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">Get a Free Quote</h1>
                    <p className="mt-4 text-lg text-gray-600">
                        Got a great idea in your mind? Interested in our Products and Services? Submit your query here and we will get back to you as soon as possible.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="bg-gray-50 p-8 rounded-xl">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                        <div className="space-y-4 text-gray-600">
                            <div className="flex items-start gap-4"><FaMapMarkerAlt className="text-[#00b8db] text-xl flex-shrink-0" /><span>Kandirpar, Cumilla 3500<br/>Chittagong Division, Bangladesh</span></div>
                            <div className="flex items-start gap-4"><FaPhone className="text-[#00b8db] text-xl flex-shrink-0" /><a href="tel:+8801712345678" className="hover:text-[#00b8db]"> +880 171 234 5678</a></div>
                            <div className="flex items-start gap-4"><FaEnvelope className="text-[#00b8db] text-xl flex-shrink-0" /><a href="mailto:contact@yourcompany.com.bd" className="hover:text-[#00b8db]">contact@yourcompany.com.bd</a></div>
                        </div>
                        <div className="mt-8 rounded-lg overflow-hidden"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58531.95600371994!2d91.15115284348143!3d23.45423507345903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37547e3500000001%3A0x4b07823910a3ac8!2sCumilla!5e0!3m2!1sen!2sbd!4v1678886456789!5m2!1sen!2sbd" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Google Map of Cumilla, Bangladesh"></iframe></div>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-xl">
                        {submissionStatus === 'success' ? (
                            <div className="text-center py-12"><h3 className="text-2xl font-bold text-green-600">Thank You!</h3><p className="mt-2 text-gray-600">Your request has been submitted successfully. We'll be in touch soon.</p></div>
                        ) : (
                            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-8">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                    <FloatingLabelInput id="fullName" label="Full Name" register={register} errors={errors} validation={{ required: 'Full name is required' }} type="text" />
                                    <FloatingLabelInput id="email" label="Email ID" register={register} errors={errors} validation={{ required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } }} type="email" />
                                    <FloatingLabelInput id="phone" label="Phone Number" register={register} errors={errors} type="tel" />
                                    <FloatingLabelInput id="company" label="Company Name" register={register} errors={errors} type="text" />
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                    <FloatingLabelSelect id="interest" label="Interested In" register={register} errors={errors}>
                                        <option>AI Automation</option><option>Web Development</option><option>Consulting</option>
                                    </FloatingLabelSelect>
                                    <FloatingLabelSelect id="budget" label="Select Budget" register={register} errors={errors}>
                                        <option>$1,000 - $5,000</option><option>$5,000 - $10,000</option><option>$10,000+</option>
                                    </FloatingLabelSelect>
                                </div>
                                <div>
                                    <FloatingLabelSelect id="product" label="Select Product" register={register} errors={errors}>
                                        <option>Product A</option><option>Product B</option><option>Product C</option>
                                    </FloatingLabelSelect>
                                </div>
                                <div className="relative">
                                     <textarea id="message" {...register('message')} placeholder=" " rows="4" className="block w-full px-0 pt-6 pb-2 text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#00b8db] peer"></textarea>
                                     <label htmlFor="message" className="absolute text-md text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Type a Message</label>
                                </div>
                                <div>
                                    <Controller name="recaptcha" control={control} rules={{ required: 'Please complete the reCAPTCHA' }} render={({ field }) => ( <ReCAPTCHA sitekey="6LcBHpgrAAAAABHE9G6Ly6sefiSrHuU9woA2P6Wz" onChange={field.onChange} /> )} />
                                    {errors.recaptcha && <p className="text-red-500 text-xs mt-1">{errors.recaptcha.message}</p>}
                                </div>
                                <div className="mt-6">
                                    <CommonButton type="submit" variant="primary" disabled={isSubmitting}>
                                        {isSubmitting ? 'Submitting...' : 'Submit Request'}
                                    </CommonButton>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;