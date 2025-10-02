import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader.jsx';
import { portfolioOwner, socialLinks } from '../data/portfolioData.jsx';

const ContactSection = () => {
    const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
    const [formError, setFormError] = useState('');
    const [formSuccess, setFormSuccess] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setContactForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormError(''); 
        setFormSuccess('');
        if (!contactForm.name || !contactForm.email || !contactForm.message) {
            setFormError("Please fill out all fields before sending.");
            setTimeout(() => setFormError(''), 3000);
            return;
        }
        console.log("Form submitted successfully:", contactForm);
        setFormSuccess("Thank you for your message! I'll get back to you soon.");
        setContactForm({ name: '', email: '', message: '' });
        setTimeout(() => setFormSuccess(''), 5000);
    };

    return (
        <section id="contact" className="py-20 md:py-24">
            <div className="container mx-auto px-[26px] sm:px-[50px] md:px-[98px] max-w-6xl text-center">
                <SectionHeader title="Get In Touch" subtitle="Let's build something together" />
                <motion.p className="mt-4 text-gray-500 dark:text-gray-400 max-w-xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} viewport={{ once: true }}>
                    Let's connect! Feel free to reach out for collaborations or just a friendly chat.
                </motion.p>
                <div className="mt-12 text-left grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        {socialLinks.slice(0, 3).map(link => (
                            <div key={link.name} className="flex items-start gap-4 p-4 mb-4 bg-white/50 dark:bg-gray-900/50 rounded-lg border border-gray-200 dark:border-gray-800 backdrop-blur-sm">
                                <span className="text-indigo-600 dark:text-indigo-400 mt-1">{link.icon}</span>
                                <div>
                                    <h3 className="font-semibold">{link.name.replace(' Profile', '').replace('Send ', '')}</h3>
                                    <a href={link.url} className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors break-all">{link.name === 'Send Email' ? link.url.replace('mailto:', '') : `Connect on ${link.name.replace(' Profile', '')}`}</a>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                    <motion.form className="space-y-4" onSubmit={handleSubmit} initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <input type="text" name="name" placeholder="Your Name" value={contactForm.name} onChange={handleInputChange} className="w-full p-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                        <input type="email" name="email" placeholder="Your Email" value={contactForm.email} onChange={handleInputChange} className="w-full p-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                        <textarea name="message" placeholder="Your Message" rows="5" value={contactForm.message} onChange={handleInputChange} className="w-full p-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
                        {formError && <p className="text-red-500 text-sm text-center">{formError}</p>}
                        {formSuccess && <p className="text-green-500 text-sm text-center">{formSuccess}</p>}
                        <button type="submit" className="w-full p-3 bg-indigo-600 text-white rounded-md font-semibold hover:bg-indigo-700 transition">Send Message</button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;

