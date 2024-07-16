import React from "react";
import "./journey.css";
import JourneyItems from "./JourneyItems";
import journey_data from "./journeyData";

const Journey = () => {
  return (
    <div>
      <div className="exclusives">
        {journey_data.map((item, i) => {
          return (
            <div>
              <JourneyItems
                name={item.name}
                image={item.image }
                desc={item.desc}
                desc1={item.desc1}
                duration={item.duration}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Journey;
