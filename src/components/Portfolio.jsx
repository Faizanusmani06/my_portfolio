import React from "react";
// import apna_hotel from "../assets/portfolio/apna_hotel.png";
import ContentBuddy from "../assets/portfolio/content_buddy.png";
import Movix from "../assets/portfolio/movix_website.png";
import conference from "../assets/portfolio/conference.png";
import shopping from "../assets/portfolio/shopping.png";
import weather from "../assets/portfolio/weather_app.png";
import file from "../assets/portfolio/file.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: file,
      link: 'https://bit.ly/apnahotel',
      repo: 'https://github.com/Faizanusmani06/Apna-Hotel'
    },
    {
      id: 2,
      src: ContentBuddy,
      link: 'https://content-buddy-2h2e-q1v2m2wwv-moh-faizans-projects-1dc32c43.vercel.app/',
      repo: 'https://github.com/Faizanusmani06/ContentBuddy'
    },
    {
      id: 3,
      src: Movix,
      link: 'https://movix-phi-eosin.vercel.app/',
      repo: 'https://github.com/Faizanusmani06/MOVIX'
    },
    {
      id: 4,
      src: conference,
      link: 'https://conference-opal.vercel.app/',
      repo: 'https://github.com/Faizanusmani06/conference-website'
    },
    {
      id: 5,
      src: shopping,
      link: 'https://shoping-app-redux.vercel.app/',
      repo: 'https://github.com/Faizanusmani06/shoping-app-redux'
    },
    {
      id: 6,
      src: weather,
      link: 'https://weather-nlwivd6rk-moh-faizans-projects-1dc32c43.vercel.app/',
      repo: 'https://github.com/Faizanusmani06/weather-app'
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black  to-gray-800 w-full text-white md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto  flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105 w-[300px] h-[280px] mx-auto pt-2"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(link, '_blank')}>
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(repo, '_blank')}>
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
