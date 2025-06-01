import React from "react";
import ClientCard, { useProjects } from "../components/projects";
import MarketPresence, { useMarketPresence } from "../components/marketPresence";

const Clients = () => {
  const { projects } = useProjects();
  const { successCases } = useMarketPresence();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-center md:text-left">
            Our <span className="text-[#01B2FE]">Success Stories</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl text-center md:text-left">
            Discover how we&apos;ve helped our clients achieve their goals
            through innovative software solutions and technical expertise.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-24">
            {projects.map((client, index) => (
              <div key={index} className="group">
                <ClientCard client={client} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <MarketPresence successCases={successCases} />
    </div>
  );
};

export default Clients;
