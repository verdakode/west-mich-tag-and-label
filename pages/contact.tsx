import React, { useState } from 'react';
import Navbar from './components/nav/navbar';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Process form data here (e.g., send to an API)
    console.log(formData);
    alert('Thank you for your message. We will get back to you shortly.');
    // Reset form or navigate to a different page
  };

  return (
    <div className="bg-gray-50">
      <Navbar />
      <div className="max-w-4xl mx-auto p-5">
        <h1 className="text-4xl font-bold text-center mb-10">Contact Us</h1>
        
        {/* Contact Information */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Contact Information</h2>
          <p className="text-lg mb-2">Phone: (123) 456-7890</p>
          <p className="text-lg mb-2">Email: contact@wmtl.com</p>
          <p className="text-lg">Address: 1234 Tag Ln, Label City, MI 12345</p>
        </div>

        {/* Contact Form */}
        <form className="w-full max-w-lg" onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" type="text" name="name" id="name" value={formData.name} onChange={handleChange} required />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" type="email" name="email" id="email" value={formData.email} onChange={handleChange} required />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="message" id="message" rows={5} value={formData.message} onChange={handleChange} required></textarea>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3 text-right">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
