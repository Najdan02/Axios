import React from "react";
import Image from "next/image";

interface Project {
  name: string;
  tech: string;
  description: string;
}

interface Client {
  client: string;
  website: string;
  logo: string | null;
  projects: Project[];
}

export const useProjects = () => {
  const projects: Client[] = [
    {
      client: "XAPT",
      website: "xapt.com",
      logo: "/xapt.png",
      projects: [
        {
          name: "EMR (Equipment Maintenance & Repair)",
          tech: ".NET Core Middleware, MS Dynamics, Native Android, Native iOS Development",
          description:
            "We partnered with XAPT to deliver the EMR application, a powerful tool for managing equipment maintenance and repair operations. By integrating MS Dynamics middleware with native mobile solutions, we provided a streamlined, user-friendly interface that simplifies scheduling, tracking, and reporting, empowering businesses to optimize their maintenance workflows.",
        },
        {
          name: "Extending Microsoft TestEngine for Model-Based Power Apps Testing",
          tech: ".NET Core, Microsoft TestEngine",
          description:
            "This project bridges a critical gap in automated testing for model-based Power Apps, enhancing Microsoft's TestEngine to include this functionality. By extending the existing library, we introduced seamless automation for model-based app testing, ensuring improved quality assurance and operational efficiency in Power Apps solutions.",
        },
      ],
    },
    {
      client: "WeLytics",
      website: "welytics.ai",
      logo: "/welytics.png",
      projects: [
        {
          name: "Jaguar Rescue Center",
          tech: "Vue.js, GraphQL, .NET Core",
          description:
            "A management and tracking system for JRG volunteers, built with Vue.js. The application incorporates state management, GraphQL, and .NET Core for efficient operation and scalability..",
        },
        {
          name: "Company Graph",
          tech: "Vue.js, GraphQL, .NET Core, Neo4j",
          description:
            "A proof-of-concept project focused on scraping company data from the Swiss registry.",
        },
      ],
    },
    {
      client: "The March Group",
      website: "marchgp.com",
      logo: "/marchgp.jpeg",
      projects: [
        {
          name: "Needs-Based Analysis",
          tech: ".NET Core, Angular",
          description:
            "We developed a web application that provides clients with tailored investment recommendations for Bond vehicles. Featuring detailed analysis and automated report generation, this platform empowers users to make informed financial decisions. Our solution combines data-driven insights with an intuitive interface, showcasing our commitment to delivering value-focused solutions.",
        },
      ],
    },
    {
        client: "Mtel",
        website: "mtel.me",
        logo: "/mtel.png",
        projects: [
          {
            name: "Travelaizer",
            tech: ".NET Core Clean Architecture, Flutter (Mobile & Web), SQL Server, Elastic, Neo4J, Kubernetes, DevOps, AI Model, Zoho Creator, Zoho CRM, Zoho Flow",
            description:
              "Travelaizer is an innovative activity booking platform that integrates AI-driven models to create tailored day-trip itineraries by combining multiple activities. From business development and architecture setup to software development and launch, our team delivered an end-to-end solution. This platform supports seamless booking experiences and advanced CRM integrations, redefining how users explore and book activities",
          },
        ],
      },
      {
        client: "Bayrock",
        website: "bayrock.nl",
        logo: "/bayrock.jpeg",
        projects: [
          {
            name: "Bayrock Finance Freelancers Platform",
            tech: ".NET Core",
            description:
              "We delivered backend development for Bayrock's finance freelancers platform, enabling efficient connections between financial experts and businesses. The platform supports secure transactions, seamless project management, and robust user authentication, emphasizing our ability to build scalable, secure systems tailored to specific industry needs"
          },
        ],
      },
      {
        client: "Mindnet Consulting, Funk Group",
        website: "www.funk-gruppe.ch/en",
        logo: "/funk.png",
        projects: [
          {
            name: "RimiksX",
            tech: ".NET Core, Angular, SQL Server, DevOps",
            description:
              "An enterprise Risk Management solution built from the ground up, RimiksX is now trusted by over 50 enterprises with revenues ranging from €100M to €1B. We managed the complete lifecycle of this project, from architecture and development to deployment. Its robust framework enables companies to assess, manage, and mitigate risks effectively, showcasing our expertise in crafting mission-critical enterprise solutions."
          },
        ],
      },
  ];

  return { projects };
};

interface ClientCardProps {
  client: Client;
}

const ClientCard: React.FC<ClientCardProps> = ({ client }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
      <div className="md:flex h-full">
        {/* Client Info */}
        <div className="md:w-1/3 bg-gray-50 p-8 flex flex-col">
          <h2 className="text-2xl font-bold mb-6 text-center">
            {client.client}
          </h2>
          <div className="flex-grow flex flex-col justify-center">
            <div>
              <div className="aspect-w-16 aspect-h-9 bg-white rounded-lg p-4 flex items-center justify-center mb-4">
                {client.logo ? (
                  <Image
                    src={client.logo}
                    alt={`${client.client} logo`}
                    width={200}
                    height={60}
                    className="object-contain transition-transform duration-300 hover:scale-105"
                  />
                ) : (
                  <div className="flex items-center justify-center">
                    <span className="text-gray-400">Logo</span>
                  </div>
                )}
              </div>
              <div className="text-center">
                <a
                  href={`https://${client.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#01B2FE] hover:underline transition-colors duration-300"
                >
                  {client.website}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="md:w-2/3 p-8 flex flex-col justify-center">
          <div className="space-y-8">
            {client.projects.map((project, index) => (
              <div
                key={index}
                className="border-b border-gray-100 last:border-0 pb-8 last:pb-0"
              >
                <h3 className="text-xl font-bold mb-4">
                  {project.name}
                </h3>
                <div className="bg-gray-50 rounded-lg px-4 py-2 inline-block mb-4 transition-transform duration-300 hover:scale-105">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Tech Stack:</span>{" "}
                    {project.tech}
                  </p>
                </div>
                <p className="text-gray-600">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
