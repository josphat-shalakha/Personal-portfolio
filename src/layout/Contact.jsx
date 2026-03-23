import React, { useState } from "react";
// Import all necessary icons
import { Mail, MapPin, MessageCircle, Send } from "lucide-react";

// 1. Ensure contactInfo is defined or imported
const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "josphatshalakha@gmail.com",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+254703612364",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Nairobi, CBD",
  },
];

export const Contact = () => {
  // 2. useState requires 'React' to be imported or destructured
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  // Remove ": React.FormEvent"
const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Form Submitted:", formData);
  alert("Thanks for reaching out!");
};

  return (
    <section id="contact" className="py-20 text-white px-4">
      <h2 className="text-4xl font-bold mb-12 text-center">Get In Touch</h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Side: Contact Information */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <p className="text-gray-400 mb-6">
              I'm open to new opportunities and collaborations. Feel free to reach out!
            </p>
          </div>

          <div className="space-y-6">
            {contactInfo.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div key={idx} className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                  <div className="p-3 bg-gray-700 rounded-lg">
                    <IconComponent className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Contact Form (Fixed and Closed) */}
        <form 
          onSubmit={handleSubmit} 
          className="bg-gray-800 p-8 rounded-2xl border border-gray-700 space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
            <input
              type="text"
              required
              value={formData.name}
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Your Name"
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
            <input
              type="email"
              required
              value={formData.email}
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="email@example.com"
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
            <textarea
              required
              rows={4}
              value={formData.message}
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="How can I help you?"
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all"
          >
            Send Message
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;