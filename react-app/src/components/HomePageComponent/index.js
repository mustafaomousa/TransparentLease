import React from "react";
import { useSelector } from "react-redux";

import LocateBar from "../LocateComponents/LocateBar";
import LatestDealsCarousel from "./LatestDealsCarousel";

const HomePageComponent = () => {
  const currentUser = useSelector((state) => state.user);

  return (
    <div>
      <LocateBar />
      <div>
        <LatestDealsCarousel />
      </div>
    </div>
  );
};

export default HomePageComponent;
