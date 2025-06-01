import React from "react";
import Image from "next/image";

const Home = () => {
    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                        A Full-Service<br />
                        <span className="text-[#01B2FE]">Software Development</span><br />
                        Company
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
                        Delivering enterprise-grade solutions with modern technologies and exceptional expertise
                    </p>
                    <div className="relative w-full h-[300px] md:h-[400px]">
                        <Image 
                            src="/logo.svg" 
                            alt="Axios Logo"
                            fill
                            style={{ objectFit: 'contain' }}
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* Core Competencies Section */}
            <section className="py-24 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold mb-16 text-center">Core Competencies</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Custom Software Development",
                                content: "End-to-end development of enterprise-grade solutions using modern tech stack"
                            },
                            {
                                title: "Cloud and DevOps",
                                content: "Scalable solutions on Azure, Kubernetes, and Elastic environments"
                            },
                            {
                                title: "Data-Driven Solutions",
                                content: "Expertise in SQL Server, Neo4J, Elastic, and AI/ML integrations"
                            },
                            {
                                title: "Integration Specialists",
                                content: "Seamless integration of complex middleware solutions and APIs"
                            },
                            {
                                title: "Risk & Finance",
                                content: "Supporting financial institutions in business transformation"
                            },
                            {
                                title: "AI & Automation",
                                content: "Advanced AI integration with LLM, NLP, and BPM solutions"
                            }
                        ].map((item, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                                <div className="h-12 w-12 bg-[#01B2FE] rounded-lg mb-6 flex items-center justify-center">
                                    <span className="text-white text-2xl font-bold">{index + 1}</span>
                                </div>
                                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                                <p className="text-gray-600">{item.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;