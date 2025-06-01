import React from "react";
import Image from "next/image";

interface SuccessCase {
  title: string;
  description: string;
}

export const useMarketPresence = () => {
  const successCases: SuccessCase[] = [
    {
      title: "Engaged in multiple projects of full IFRS 9 and IRRBB implementation across the CEE region",
      description: ""
    },
    {
      title: "Developed and implemented software solution for IFRS 9 provisioning",
      description: ""
    },
    {
      title: "Predictive analytics modelling projects",
      description: "Credit rating & scoring models for decision making, IFRS 9, CRM, Fraud prevention, Collection"
    },
    {
      title: "Core banking system implementation– business analyst role",
      description: ""
    },
    {
      title: "Other projects in Risk & Finance",
      description: "Risk management setup, reporting consolidation, FTP, ICAAP, ILAAP, recovery plans, Process improvement"
    }
  ];

  return { successCases };
};

interface MarketPresenceProps {
  successCases: SuccessCase[];
}

const MarketPresence: React.FC<MarketPresenceProps> = ({ successCases }) => {
  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">
          Our Market <span className="text-[#01B2FE]">Presence</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <div className="flex justify-center">
            <div className="relative w-[90%] aspect-[16/12] bg-white rounded-xl shadow-lg overflow-hidden">
              <Image
                src="/marketPresence.png"
                alt="Market presence map showing client locations"
                fill
                className="object-contain p-4"
              />
            </div>
          </div>

          {/* Success Cases */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6 text-center">Success cases</h3>
            {successCases.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h4 className="font-medium text-lg mb-2 text-center">{item.title}</h4>
                {item.description && (
                  <p className="text-gray-600 text-center">{item.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-8 bg-[#01B2FE] text-white py-8 px-6 rounded-xl text-center">
          <p className="text-xl font-medium">
            Helping financial institutions and corporate clients in facing challenges
            of transforming businesses and changing industry regulations
          </p>
        </div>
      </div>
    </section>
  );
};

export default MarketPresence; 