import * as React from "react";
import { Platform } from "./components/platform";

export const App = () => {
  return (
    <div className="container">
      <Platform speed={30} />
    </div>
  );
};
