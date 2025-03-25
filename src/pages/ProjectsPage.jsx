import React from 'react';
import '../scss/sections/_projectsPage.scss';
import Header from "../layout/Header";
import Footer from "../layout/Footer";
const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      year: "2023-2024",
      title: "Increasing awareness on climate change at local level",
      description: "The project is in process of implementation by the AKEREE and is supported by the Swiss Embassy in Prishtina. The period of implementation is 01.06.2023 to 31.05.2024."
    },
    {
      id: 2,
      year: "2022-2023",
      title: "Drafting the Municipal Energy and Climate Action Plan (MECAP) for the Municipality of Prizren",
      description: "The period of implementation was 22.08.2022 to 21.04.2023. The project was financed by Municipality of Prizren and the Deutsche Gesellschaft für Internationale Zusammenarbeit in Kosovo (GIZ) and has been successfully implemented by the AKEREE."
    },
    {
      id: 3,
      year: "2022-2023",
      title: "Promoting climate change actions among the Kosovar youth",
      description: "Part of the project was the organization of the Summer School on climate change 2022. The project was supported by the Swiss Embassy in Prishtina and has been successfully implemented by the AKEREE. The period of implementation was 01.04.2022 to 31.03.2023."
    },
    {
      id: 4,
      year: "2019-2020",
      title: "Support municipalities for application to Ministry of Economic Development of Kosovo/Kosovo Energy Efficiency Agency for Energy Efficiency projects",
      description: "The project was implemented in the period 07.11.2019 to 30.10.2020. The overall objective of the project was to provide support for increasing the municipalities capacities for setting processes for preparation of energy efficiency projects to be financed through the Kosovo Energy Efficiency Fund (KEEF), and other possible investors. Project was supported by the Deutsche Gesellschaft für Internationale Zusammenarbeit in Kosovo (GIZ)."
    },
    {
      id: 5,
      year: "2018-2019",
      title: "Municipal Energy Management System including MEEAP - Istog and Rahovec",
      description: "Project 'Providing the support on establishment of the Municipal Energy Management System including the Municipal Energy Efficiency Action plan (MEEAP) in municipalities Istog and Rahovec', supported by the Deutsche Gesellschaft für Internationale Zusammenarbeit in Kosovo (GIZ). Project has started in 17.10.2018 and has finished on 30.10. 2019. The overall objective of the project was to provide support to Istog and Rahoveci municipalities for the improvement the energy management, energy efficiency planning, implementation and reporting."
    },
    {
      id: 6,
      year: "2018-2019",
      title: "Municipal Energy Management System - Prizren and Gllogovc",
      description: "Project 'Providing the support on establishment of the Municipal Energy Management System for the municipalities Prizren and Gllogovc', supported by the Deutsche Gesellschaft für Internationale Zusammenarbeit in Kosovo (GIZ). Project has started in February 2018 and has finished by February 2019. The overall objective of the project was to provide support to Prizren e Gllogoc municipalities for the improvement the energy management, energy efficiency planning, implementation and reporting."
    },
    {
      id: 7,
      year: "2018-2019",
      title: "Strengthening Sustainable Private and Decentralized Forestry in Kosovo",
      description: "Project contracted by the CNVP - Connecting Natural Values and People Foundation in Kosovo. Project was implemented from 31 October to 31 December 2018 and Second phase of project from 26 June to 15 December 2019."
    },
    {
      id: 8,
      year: "2018",
      title: "Summer School on Energy Efficiency and Renewable Energy 2018",
      description: "In September 2018 AKEREE, for the fifth time, has successfully implemented the 5 days Summer School on Energy Efficiency and Renewable Energy 2018, for the students of the different universities and different of the studying programs. The Summer School have participated 30 students from Kosovo and Albania. Project was organized by AKEREE and supported by Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ). Summer School was held in Bogë, Peja, Kosovo."
    },
    {
      id: 9,
      year: "2017",
      title: "Summer School on Energy Efficiency and Waste Management 2017",
      description: "In November 2017 AKEREE, for the fourth time, has successfully implemented the 5 days Summer School on Energy Efficiency and Waste Management 2017. The Summer School participated 30 students from Kosovo and Albania. Project was organized by AKEREE and supported by Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ). Summer School was held in Durrës, Albania."
    },
    {
      id: 10,
      year: "2017",
      title: "Strengthening Sustainable Private and Decentralized Forestry in Kosovo",
      description: "Project contracted by the CNVP - Connecting Natural Values and People Foundation in Kosovo. Project was implemented from 23 October to 29 December 2017. The main objective of the assignment was to prepare a module for the role of forest on the carbon sequestration; carbon credits markets and opportunities for accessing markets for Kosovo, and to provide opportunities for training of relevant stakeholders for capacity building in this field."
    },
    {
      id: 11,
      year: "2016",
      title: "Summer School on Renewable Energy and Energy Efficiency 2016",
      description: "In October 2016 AKEREE, for the third time, has successfully implemented the 5 days Summer School on Renewable Energy and Energy Efficiency 2016. Project was organized in partnership with Konrad Adenauer Foundation (KAS) from Germany. Summer School was held in Prevallë, Prizren, Kosovo."
    },
    {
      id: 12,
      year: "2016",
      title: "Strengthening the Climate Change Agenda in Kosovo",
      description: "From May 2016 to the end of October 2016, AKEREE in partnership with International Organization CEED Kosovo and NGO Agrobiznesi from Rahoveci, Kosovo, have successfully implemented project Strengthening the Climate Change Agenda in Kosovo. Project was supported by UNDP Kosovo and financed by ADA Austria."
    },
    {
      id: 13,
      year: "2016",
      title: "Academy on Energy Efficiency and Climate Changes",
      description: "In March 2016, AKEREE in partnership with German Foundation Konrad Adenauer Stiftung (KAS) and Kosovo Renewable Energy Association (SHERK) has successfully organized the Academy on Energy Efficiency and the Climate Changes. Academy was held in Peja, Kosovo."
    },
    {
      id: 14,
      year: "2015",
      title: "Summer School on Renewable Energy and Energy Efficiency 2015",
      description: "In 2015 AKEREE has successfully implemented the 5 days Summer School on Renewable Energy and Energy Efficiency 2015. Project was supported by GIZ, UNDP and Konrad Adenauer Foundation (KAS). Summer School was held in Boge, Pejë, Kosovo."
    },
    {
      id: 15,
      year: "2015",
      title: "Energy Efficiency Academy - Role of Municipalities",
      description: "In May 2015, AKEREE in partnership with German Foundation Konrad Adenauer Stiftung (KAS) and Kosovo Renewable Energy Association (SHERK) has successfully organized the Energy Efficiency Academy The Role of the Municipalities in the Initiatives for Energy Efficiency."
    },
    {
      id: 16,
      year: "2014",
      title: "Summer School on Renewable Energy and Energy Efficiency 2014",
      description: "In July 2014 AKEREE has successfully implemented the 5 days Summer School on Renewable Energy and Energy Efficiency 2014. Project was supported by GIZ-ORF-EE, UNDP, Konrad Adenauer Foundation (KAS) and Municipality of Dragash. Summer School was held in Brod, Dragash, Kosovo."
    },
    {
      id: 17,
      year: "2014",
      title: "Energy Efficiency Academy April 2014",
      description: "In April 2014, AKEREE in partnership with German Foundation Konrad Adenauer Stiftung (KAS) and Kosovo Renewable Energy Association (SHERK) has successfully organized the Energy Efficiency Academy, Development of Energy Efficiency and Renewable Energy Sources on the local level in Kosovo. Academy has targeted the Municipal Officers who deal with energy issues within the institution, students and CSOs. Duration of the Academy was 3 days and had 30 participants. Academy was held in Prizren, Kosovo."
    },
    {
      id: 18,
      year: "2013",
      title: "Energy Efficiency Academy December 2013",
      description: "In December 2013, AKEREE in partnership with German Foundation Konrad Adenauer Stiftung (KAS) and Kosovo Renewable Energy Association (SHERK) has successfully organized the Energy efficiency Academy, Development of Energy Efficiency and RES at the local level. Academy has targeted the Municipal Officers who deal with energy issues within the institution and CSOs. Duration of the Academy was 3 days and had 30 participants. Academy was held in Prevallë, Prizren, Kosovo."
    },
    {
      id: 19,
      year: "2009-2010",
      title: "Energy Efficiency Projects 2009-2010",
      description: "Multiple projects implemented:\n\n1. \"Awareness Campaign for Renewable Energy and Energy Efficiency to Elementary and High schools in city of Prizren\". Project was supported by MATRA Program from Ministry for Foreign Affairs of Nederland. Campaign has consisted by activities with pupils in the schools with the information about the energy, renewable energies, learning the ways of saving the energy, changing the habits on using the energy. One of the products of the project was the publishing of the Brochure for Energy Efficiency measures in the households.\n\n2. \"Installing the solar system for sanitary water heating in Hospital of Dragash\", Kosovo. The project was supported by UNDP.\n\n3. \"Thermo insulation of walls, replacing the doors and windows in school 'Ulina' in Kosavë\" municipality of Dragash. Project was supported by UNDP. AKEREE has analyzed the energy consumption in the existed situation, have proposed the energy efficiency measures and have implemented the EE measures."
    },
    {
      id: 20,
      year: "2008",
      title: "GTZ-MMS Support and Conferences",
      description: "1. GTZ-MMS Support (December 2008): GTZ-MMS (German Organization for Technical Cooperation – Municipality Modernization Services) supported AKEREE for office equipment supply and publishing the Poster for Renewable Energy and publishing the Brochure for Renewable Energy.\n\n2. Conference Presentations:\n- August 28-29: International Conference 'Pollution monitoring and Energy development in Kosova and Albania'\n- October 20-21: KEPA Conference presentation on 'Kosovo opportunities on Energy Efficiency implementation'"
    },
    {
      id: 21,
      year: "2007-2008",
      title: "Initial Projects and Cooperation",
      description: "1. REC Office Cooperation (from November 13, 2007): 14 months cooperation with REC (Regional Environment Center) office in Prishtina. The main goal of activities was the increase of capacities of the organization. The result of the training was the preparation of project proposal with the possibility to be financed by MATRA.\n\n2. Energy Efficiency Studies (December 2007 to February 2008): Two Projects in the Energy Efficiency field (Energy Audits):\n- 'The study of parameters for Energy Efficiency measures for residential flats and businesses shops of building E-30/3A dhe E-30/3B in area of Ulpiana in Prishtina, Kosovo'\n- 'The study of measures for Energy Efficiency on the Street Lighting of City of Prizren, Kosovo'\nBoth projects were supported by the German Organization for Technical Cooperation, office in Prishtina, Kosovo."
    }
  ];

  return (
    <div className="projects-page">
        <Header />  
        <div className="projects-container">
            <h1 className="projects-title">AKEREE Projects Timeline</h1>
            <div className="projects-timeline">
                {projects.map((project) => (
                <div key={project.id} className="project-item">
                    <div className="project-year">{project.year}</div>
                    <div className="project-content">
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
        <Footer />
    </div>
  );
};

export default ProjectsPage;
