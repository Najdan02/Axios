import React from "react";

const Contacts = () => {
    const locations = [
        { country: "Serbia", city: "Belgrade (HQ)" },
        { country: "Montenegro", city: "Remote Team" },
        { country: "Bosnia and Herzegovina", city: "Remote Team" },
        { country: "North Macedonia", city: "Remote Team" }
    ];

    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-bold mb-8 text-center md:text-left">
                        Let&apos;s <span className="text-[#01B2FE]">Connect</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl text-center md:text-left">
                        Ready to transform your ideas into reality? Our team of experts 
                        is here to help you achieve your technology goals.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24 px-4">
                <div className="max-w-3xl mx-auto space-y-12">
                    {/* Contact Information */}
                    <div className="bg-gray-50 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold mb-6">AXIOS TEAM & PARTNERS</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-semibold mb-2 text-[#01B2FE]">Headquarters</h3>
                                <p className="text-gray-700">Belgrade, Serbia, Southeast Europe</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-3 text-[#01B2FE]">Regional Presence</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {locations.map((location, index) => (
                                        <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                                            <p className="font-medium">{location.country}</p>
                                            <p className="text-sm text-gray-600">{location.city}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2 text-[#01B2FE]">Email</h3>
                                <a 
                                    href="mailto:axios.core.team@gmail.com" 
                                    className="text-gray-700 hover:text-[#01B2FE] transition-colors"
                                >
                                    axios.core.team@gmail.com
                                </a>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2 text-[#01B2FE]">Team Size</h3>
                                <p className="text-gray-700">Core team: 30+ members</p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8">
                        <h2 className="text-2xl font-bold mb-4">Ready to Work Together?</h2>
                        <p className="text-gray-300 mb-6">
                            Whether you&apos;re looking for custom software development, cloud expertise, 
                            or data-driven solutions, our team is ready to help you achieve your goals.
                        </p>
                        <div className="flex items-center space-x-4">
                            <div className="h-12 w-12 rounded-full bg-[#01B2FE] flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm text-gray-300">Email us at</p>
                                <a 
                                    href="mailto:axios.core.team@gmail.com" 
                                    className="text-[#01B2FE] hover:underline"
                                >
                                    axios.core.team@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contacts;