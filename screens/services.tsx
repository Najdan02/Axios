import React from "react";

const Services = () => {
    const services = [
        {
            title: "Full Team Provisioning",
            description: "Access our broad \"first circle\" of engineers available on per-project basis, with deep reach into the talent market beyond.",
            icon: "👥"
        },
        {
            title: "Expert Team Members",
            description: "Experienced software architects, QA, DevOps, and domain experts in fintech, telco, banking, and risk management.",
            icon: "⭐"
        },
        {
            title: "Quality Assurance",
            description: "Guarantee of quality recruitment & selection including personality testing if requested by the client.",
            icon: "✓"
        },
        {
            title: "Performance Monitoring",
            description: "Jointly and regularly monitored team & individual performance to ensure project success.",
            icon: "📊"
        },
        {
            title: "Domain Partnerships",
            description: "Cooperation with other domain specific companies to provide comprehensive solutions.",
            icon: "🤝"
        },
        {
            title: "IT Consulting",
            description: "Organizational consulting from IT system development perspective.",
            icon: "💡"
        }
    ];

    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-bold mb-8 text-center md:text-left">
                        What We <span className="text-[#01B2FE]">Offer</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl text-center md:text-left">
                        Comprehensive software development services tailored to your needs,
                        delivered by our expert team across Southeast Europe.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div 
                                key={index} 
                                className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all hover:-translate-y-1"
                            >
                                <div className="text-4xl mb-6">{service.icon}</div>
                                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Rates Section */}
            <section className="py-24 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold mb-16 text-center">
                        Transparent <span className="text-[#01B2FE]">Pricing</span>
                    </h2>
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                        <div className="max-w-3xl mx-auto">
                            <div className="overflow-x-auto">
                                <table className="w-full mb-8">
                                    <thead>
                                        <tr className="border-b-2 border-gray-200">
                                            <th className="py-4 text-left text-lg font-semibold text-gray-700">SENIORITY</th>
                                            <th className="py-4 text-right text-lg font-semibold text-gray-700">RATE [EUR]</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-gray-100">
                                            <td className="py-4 text-left text-gray-700">Top Talent</td>
                                            <td className="py-4 text-right text-gray-700">65 - 85</td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="py-4 text-left text-gray-700">Senior (4+ y)</td>
                                            <td className="py-4 text-right text-gray-700">45 - 70</td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="py-4 text-left text-gray-700">Medior (1 – 4 y)</td>
                                            <td className="py-4 text-right text-gray-700">30 - 50</td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="py-4 text-left text-gray-700">Junior (&lt;1 y)</td>
                                            <td className="py-4 text-right text-gray-700">20 - 30</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            
                            <div className="space-y-4">
                                <div className="flex items-start space-x-4">
                                    <span className="h-2 w-2 bg-[#01B2FE] rounded-full mt-2"></span>
                                    <p className="flex-1 text-gray-600">
                                        Rates of Blockchain, IoT, ML, AI and business domain experts are usually higher 
                                        than of engineers without this specific experience.
                                    </p>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <span className="h-2 w-2 bg-[#01B2FE] rounded-full mt-2"></span>
                                    <p className="flex-1 text-gray-600">
                                        The prices can vary depending on number of engaged engineers and business 
                                        consultants and engagement period.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;