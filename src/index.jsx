import React from "react";
import HeaderComponent from "./components/HeaderComponents";
import BestItems from "./components/BestItems";

export const Apps = () => {
  return (
    <body>
      <header>
        <HeaderComponent />;
      </header>
      <main>
        <BestItems />
      </main>
    </body>
  );
};

export default Apps;
