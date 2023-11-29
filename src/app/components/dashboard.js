import React from "react";
import Hero from "./Hero";
import Chart from "./chart";

export default function Dashboard() {
  return (
    <div className="md:w-3/4 ">
      <Hero />
      <Chart />
    </div>
  );
}
