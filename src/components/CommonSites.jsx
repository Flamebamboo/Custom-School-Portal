import React, { useEffect } from "react";

import { portalLinks } from "../data/links";

const CommonSites = () => {
  //   useEffect(() => {
  //     portalLinks.apps.forEach((app) => {
  //       console.log(app);
  //     });
  //   }, []);
  return (
    <div className="flex items-center justify-center bg-secondary w-full">
      <div className="w-[80%] grid grid-cols-1 md:grid-cols-4 gap-10 p-9">
        {portalLinks.apps.map((app) => (
          <a href={app.url}>
            <div
              key={app.id}
              className="px-3 py-14 flex items-center justify-center flex-col bg-foreground border rounded-lg transition hover:-translate-1 hover:scale-110 duration-300 ease-in-out hover:bg-accent"
            >
              <h2 className="text-primary font-bold text-xl mb-2">
                {app.name}
              </h2>
              <p className="text-foreground mb-4">{app.description}</p>
              <img
                src={app.icon}
                alt={app.name}
                className="w-24 h-24 bg-contain transition hover:scale-110  duration-300 ease-in-out"
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CommonSites;
