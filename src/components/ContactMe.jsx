import React, { useState } from 'react';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <div id="contact" className="min-h-screen flex flex-col justify-center items-center bg-black py-10">
      <h1 className="text-4xl text-yellow-400 font-bold mb-6">Contact Me</h1>
      <form 
        onSubmit={handleSubmit} 
        className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg"
      >
       
        <div className="mb-6">
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-900 text-white focus:ring focus:ring-yellow-500 focus:outline-none"
            placeholder="Enter your name"
          />
        </div>

        
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-900 text-white focus:ring focus:ring-yellow-500 focus:outline-none"
            placeholder="Enter your email"
          />
        </div>

       
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-900 text-white focus:ring focus:ring-yellow-500 focus:outline-none h-32"
            placeholder="Enter your message"
          ></textarea>
        </div>

      
        <div>
          <button
            type="submit"
            className="w-full bg-yellow-400 text-gray-900 font-semibold py-2 px-4 rounded-md hover:bg-yellow-500 transition-colors"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactMe;
